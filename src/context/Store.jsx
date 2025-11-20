import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

const StoreContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return { ...state, ...action.payload }
    case 'ADD_TO_CART': {
      const existing = state.cart.find(i => i.id === action.item.id)
      let cart
      if (existing) {
        cart = state.cart.map(i => i.id === action.item.id ? { ...i, qty: i.qty + (action.qty || 1) } : i)
      } else {
        cart = [...state.cart, { ...action.item, qty: action.qty || 1 }]
      }
      persist({ ...state, cart })
      return { ...state, cart }
    }
    case 'REMOVE_FROM_CART': {
      const cart = state.cart.filter(i => i.id !== action.id)
      persist({ ...state, cart })
      return { ...state, cart }
    }
    case 'UPDATE_QTY': {
      const cart = state.cart.map(i => i.id === action.id ? { ...i, qty: Math.max(1, action.qty) } : i)
      persist({ ...state, cart })
      return { ...state, cart }
    }
    case 'CLEAR_CART': {
      const cart = []
      persist({ ...state, cart })
      return { ...state, cart }
    }
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.includes(action.id)
      const wishlist = exists ? state.wishlist.filter(id => id !== action.id) : [...state.wishlist, action.id]
      persist({ ...state, wishlist })
      return { ...state, wishlist }
    }
    default:
      return state
  }
}

function persist(state) {
  try { localStorage.setItem('neo.store', JSON.stringify({ cart: state.cart, wishlist: state.wishlist })) } catch {}
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { cart: [], wishlist: [] })

  useEffect(() => {
    try {
      const raw = localStorage.getItem('neo.store')
      if (raw) {
        const parsed = JSON.parse(raw)
        dispatch({ type: 'INIT', payload: parsed })
      }
    } catch {}
  }, [])

  const client_id = useMemo(() => {
    let id = localStorage.getItem('neo.client')
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem('neo.client', id)
    }
    return id
  }, [])

  const api = useMemo(() => ({
    addToCart: async (product, qty = 1) => {
      dispatch({ type: 'ADD_TO_CART', item: product, qty })
      try {
        await fetch(`${BACKEND}/api/cart/add`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id, product_id: product.id, qty }) })
      } catch {}
    },
    removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', id }),
    updateQty: (id, qty) => dispatch({ type: 'UPDATE_QTY', id, qty }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    toggleWishlist: async (id) => {
      dispatch({ type: 'TOGGLE_WISHLIST', id })
      try { await fetch(`${BACKEND}/api/wishlist/toggle`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id, product_id: id }) }) } catch {}
    },
    checkout: async (payload) => {
      const res = await fetch(`${BACKEND}/api/checkout`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...payload, client_id }) })
      return res.json()
    }
  }), [client_id])

  return (
    <StoreContext.Provider value={{ state, dispatch, api }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}

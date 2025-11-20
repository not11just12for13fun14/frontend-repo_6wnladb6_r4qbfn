import { ShieldCheck, Sparkles, CreditCard } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Secure by design",
    desc: "Encrypted, tokenized payments with zero compromise.",
  },
  {
    icon: Sparkles,
    title: "Premium finishes",
    desc: "Matte textures, glass layers and subtle gradients that feel alive.",
  },
  {
    icon: CreditCard,
    title: "Flexible checkout",
    desc: "Express pay, installments, and one-tap wallet support.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-white">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/70 to-blue-600/70">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold tracking-tight">{title}</h3>
              </div>
              <p className="mt-3 text-slate-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

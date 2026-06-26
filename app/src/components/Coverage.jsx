import React from "react";
import { motion } from "framer-motion";

const routes = [
  { name: "Китай — Европа (ж/д)", eta: "14–18 дней" },
  { name: "Юго-Восточная Азия — РФ (море)", eta: "28–35 дней" },
  { name: "Турция — РФ (авто)", eta: "5–8 дней" },
  { name: "Любая точка — авиа", eta: "2–4 дня" },
];

const figures = [
  { value: "30", label: "портов с представительством" },
  { value: "8", label: "таможенных переходов" },
  { value: "0", label: "посредников" },
];

export default function Coverage() {
  return (
    <section id="coverage" className="py-24 md:py-32 bg-[#05070d] border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-widest text-blue-400 font-semibold">[ ЗОНЫ ПОКРЫТИЯ ]</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Собственные агенты в 30 ключевых портах
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-10 max-w-lg">
            Работаем там, где остальные перевозчики разводят руками — прямые контракты и представители на 8 сухопутных переходах.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {figures.map((f) => (
              <div key={f.label}>
                <div className="text-3xl font-bold text-white">{f.value}</div>
                <div className="text-xs text-zinc-500 mt-1">{f.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl border border-zinc-800 divide-y divide-zinc-900 overflow-hidden bg-zinc-950/40"
        >
          {routes.map((r) => (
            <div key={r.name} className="flex items-center justify-between px-6 py-4 hover:bg-blue-500/5 transition-colors">
              <span className="font-medium text-sm text-zinc-200">{r.name}</span>
              <span className="text-xs font-semibold text-blue-300 font-mono">{r.eta}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

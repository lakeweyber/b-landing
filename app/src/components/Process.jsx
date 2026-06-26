import React from "react";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Расчёт маршрута", desc: "Стоимость и сроки в течение 24 часов, фиксируем в договоре." },
  { n: "02", title: "Забор груза", desc: "Упаковка и подготовка документов для пересечения границ." },
  { n: "03", title: "Транспортировка", desc: "Отслеживание в реальном времени, личный куратор на связи." },
  { n: "04", title: "Доставка", desc: "Таможенная очистка и доставка до двери с актом приёма-передачи." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#070a12] border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-widest text-blue-400 font-semibold">[ КАК ЭТО РАБОТАЕТ ]</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Четыре этапа от заявки до доставки
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-10 md:gap-6">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-full border border-blue-500/40 bg-[#05070d] text-blue-300 font-bold mb-5">
                {s.n}
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

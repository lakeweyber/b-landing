import React from "react";
import { motion } from "framer-motion";
import { Ship, ShieldCheck, Warehouse, Plane, Truck, Radar } from "lucide-react";

const items = [
  {
    title: "Мультимодальные перевозки",
    icon: Ship,
    desc: "Море, авиа, авто и железная дорога в одном маршруте — подбираем комбинацию по срокам и бюджету.",
  },
  {
    title: "Таможенное оформление",
    icon: ShieldCheck,
    desc: "Полное юридическое сопровождение, декларирование и сертификация в стране отправления и назначения.",
  },
  {
    title: "Складская логистика",
    icon: Warehouse,
    desc: "Консолидация, хранение и кросс-докинг на узловых терминалах — груз не простаивает между этапами.",
  },
  {
    title: "Авиаперевозки",
    icon: Plane,
    desc: "Срочная доставка в любую точку мира за 2-4 дня для критичных по времени партий груза.",
    badge: "Экспресс",
  },
  {
    title: "Автомобильные маршруты",
    icon: Truck,
    desc: "Прямые контракты на 8 сухопутных переходах — без задержек на границе и лишних посредников.",
  },
  {
    title: "Отслеживание в реальном времени",
    icon: Radar,
    desc: "Личный куратор и live-трекинг на каждом этапе пути, от завода поставщика до вашего склада.",
  },
];

export default function Features() {
  return (
    <section id="services" className="bg-[#05070d] text-zinc-50 py-24 md:py-32 border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs tracking-widest text-blue-400 font-semibold">[ СЕРВИСЫ ]</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Полный цикл логистики под одним подрядчиком
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, icon: Icon, desc, badge }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-visible rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-950/60 to-zinc-950/30 p-0 transition-colors duration-300 hover:border-blue-500/40 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-blue-400/10 via-white/5 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-row items-start gap-3 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/70 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
                    {badge && (
                      <span className="rounded-full border border-blue-500/40 px-2 py-0.5 text-[10px] leading-none text-blue-300">{badge}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="relative z-10 px-6 pb-6 text-sm text-zinc-400 leading-relaxed">{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

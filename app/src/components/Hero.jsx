import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Globe, TrendingUp, Clock } from "lucide-react";
import { cn } from "../lib/utils";

const Glow = ({ className }) => (
  <div className={cn("absolute w-full -top-[128px]", className)}>
    <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.5)_10%,_rgba(59,130,246,0)_60%)] sm:h-[512px]" />
    <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.3)_10%,_rgba(37,99,235,0)_60%)] sm:h-[256px]" />
  </div>
);

const shipmentStatuses = [
  { status: "В пути", location: "Шанхай, Китай", icon: Package, color: "text-blue-400" },
  { status: "Таможенная очистка", location: "Роттердам, Нидерланды", icon: Globe, color: "text-green-400" },
  { status: "Передан на доставку", location: "Москва, РФ", icon: TrendingUp, color: "text-purple-400" },
];

const stats = [
  { label: "доставок в срок", value: "99.2%" },
  { label: "отправлений в год", value: "48 000+" },
  { label: "стран доставки", value: "120+" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => setCurrent((p) => (p + 1) % shipmentStatuses.length), 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-gradient-to-b from-[#05070d] via-[#0a0d16] to-[#05070d] text-white overflow-hidden pt-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Glow className="opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-8">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-blue-300">
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-blue-400" />
                120+ стран доставки, отслеживание в реальном времени
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-4">
                Груз приходит<br />
                <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">тогда, когда обещано.</span>
              </h1>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Мультимодальные международные поставки, таможенное оформление и контроль на каждом этапе — от завода поставщика до склада получателя. Без посредников и без сюрпризов в сроках.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-semibold px-8 h-11 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300">
                Запросить расчёт маршрута
              </a>
              <a href="#coverage" className="inline-flex items-center justify-center rounded-md text-sm font-semibold px-8 h-11 border border-gray-700 text-gray-300 hover:bg-gray-800/50 transition-all duration-300">
                Зоны покрытия →
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }} className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="relative">
            <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-md shadow-2xl">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Маршрут #MRD-2026-8472</h3>
                    <p className="text-sm text-gray-500">Приоритетная доставка</p>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold">В графике</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn("p-3 rounded-full bg-gray-900/50", shipmentStatuses[current].color)}>
                        {React.createElement(shipmentStatuses[current].icon, { className: "w-6 h-6" })}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white mb-1">{shipmentStatuses[current].status}</div>
                        <div className="text-xs text-gray-400">{shipmentStatuses[current].location}</div>
                      </div>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="space-y-4">
                  {[
                    { label: "Отправление", value: "Шанхай, Китай", done: true },
                    { label: "Транзитный узел", value: "Роттердам, Нидерланды", done: true },
                    { label: "Назначение", value: "Москва, РФ", done: false },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }} className="flex items-center gap-4">
                      <div className={cn("w-3 h-3 rounded-full border-2", item.done ? "bg-blue-500 border-blue-500" : "bg-transparent border-gray-600")} />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Прогресс доставки</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5, delay: 1, ease: "easeOut" }} className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Ожидаемое прибытие</div>
                    <div className="text-lg font-bold text-white">22 дня (море + авто)</div>
                  </div>
                  <div className="text-2xl">📦</div>
                </div>
              </div>
            </div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl" />
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-[#070a12] to-[#0a0d16] text-white overflow-hidden border-t border-zinc-900">
      <div className="absolute left-1/2 top-0 h-[300px] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.25)_10%,_rgba(59,130,246,0)_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Получите расчёт маршрута за 24 часа
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-10">
          Оставьте контакт — куратор свяжется с вами и предложит 2–3 варианта маршрута с разными сроками и бюджетом.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@company.com"
            aria-label="Email"
            className="flex-1 min-w-[220px] rounded-lg bg-white/5 border border-white/15 px-4 py-3.5 text-sm placeholder-zinc-500 text-white focus:outline-none focus:border-blue-400 transition-colors"
          />
          <button
            type="submit"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition font-semibold px-6 py-3.5 text-sm shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            {sent ? "Отправлено ✓" : "Получить расчёт"}
          </button>
        </form>
        {sent && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-sm text-blue-300">
            Заявка отправлена — куратор свяжется с вами в течение 24 часов.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";

const AnimatedNavLink = ({ href, children }) => (
  <a href={href} className="group relative inline-block overflow-hidden h-5 flex items-center text-sm whitespace-nowrap">
    <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
      <span className="text-gray-300 whitespace-nowrap">{children}</span>
      <span className="text-white whitespace-nowrap">{children}</span>
    </div>
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shapeClass, setShapeClass] = useState("rounded-full");
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (isOpen) {
      setShapeClass("rounded-2xl");
    } else {
      timeoutRef.current = setTimeout(() => setShapeClass("rounded-full"), 300);
    }
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [isOpen]);

  const navLinks = [
    { label: "Сервисы", href: "#services" },
    { label: "Покрытие", href: "#coverage" },
    { label: "Как это работает", href: "#process" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pl-5 pr-5 py-3 backdrop-blur-md ${shapeClass} border border-white/10 bg-[#0c0e16]/70 w-[calc(100%-2rem)] sm:w-auto transition-[border-radius] duration-200 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-10">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-sm">M</span>
          <span className="font-bold tracking-tight text-white">MERIDIAN</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <AnimatedNavLink key={l.href} href={l.href}>{l.label}</AnimatedNavLink>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden sm:inline-flex relative z-10 px-4 py-2 text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-white hover:to-gray-200 transition-all duration-200"
        >
          Запросить расчёт
        </a>

        <button
          className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-300"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      <div className={`lg:hidden flex flex-col items-center w-full transition-all ease-in-out duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0 pt-0 pointer-events-none"}`}>
        <nav className="flex flex-col items-center gap-4 text-base w-full">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors w-full text-center">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" onClick={() => setIsOpen(false)} className="mt-4 mb-2 px-5 py-2 text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full">
          Запросить расчёт
        </a>
      </div>
    </header>
  );
}

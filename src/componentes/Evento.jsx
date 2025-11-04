import React from "react";
import { Church, PartyPopper, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Evento = () => {
  const corazones = Array.from({ length: 8 });

  // 📍 Links de Google Maps
  const linkIglesia = "https://www.google.com/maps/place/Parroquia+San+Francisco+Solano/@-27.4625833,-58.8377282,17z/data=!3m1!4b1!4m6!3m5!1s0x94456ca5f9173f77:0x5cb01a00561675f!8m2!3d-27.4625881!4d-58.8351533!16s%2Fg%2F1tf76lvx?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";
  const linkFiesta = "https://www.google.com/maps/place/27%C2%B024'57.1%22S+58%C2%B045'04.9%22W/@-27.415871,-58.7539422,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-27.415871!4d-58.7513673?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D";

  // 🔗 Función para abrir los enlaces
  const abrirMapa = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="evento"
      className="relative py-16 text-center bg-white/80 backdrop-blur-md overflow-hidden"
    >
      {/* 💞 Corazones animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {corazones.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#C9D9D1]"
            initial={{
              opacity: 0.5,
              scale: Math.random() * 0.6 + 0.4,
              x: Math.random() * window.innerWidth - window.innerWidth / 2,
              y: "100%",
            }}
            animate={{
              y: ["100%", "-10%"],
              opacity: [0.6, 0.2, 0],
              rotate: [0, 30, -30, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            <Heart size={28} fill="#82A1D1" stroke="none" />
          </motion.div>
        ))}
      </div>

      {/* 📍 Título principal */}
      <motion.h2
        className="text-3xl font-semibold text-[#1C2751] mb-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Lugar y Fecha del Evento
      </motion.h2>

      {/* 💖 Fecha especial */}
      <motion.p
        className="text-[#344C92] text-3xl mb-10 italic relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="font-semibold text-[#1C2751]">
          20 de diciembre de 2025
        </span>
      </motion.p>

      {/* 🙏 Misa y 🎉 Fiesta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-3xl mx-auto relative z-10">
        {/* MISA */}
        <motion.div
          onClick={() => abrirMapa(linkIglesia)}
          className="flex flex-col items-center bg-[#C9D9D1]/50 p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4 hover:scale-105 transition-transform">
            <Church className="text-[#1C2751]" size={40} />
          </div>
          <h3 className="text-2xl font-semibold text-[#1C2751] mb-2">
            Ceremonia Religiosa
          </h3>
          <p className="text-[#303e5b] mb-1">
            ⛪ Iglesia San Francisco. Mendoza 420
          </p>
          <p className="text-[#303e5b]">🕐 17:30 hs</p>
        </motion.div>

        {/* FIESTA */}
        <motion.div
          onClick={() => abrirMapa(linkFiesta)}
          className="flex flex-col items-center bg-[#C9D9D1]/50 p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4 hover:scale-105 transition-transform">
            <PartyPopper className="text-[#1C2751]" size={40} />
          </div>
          <h3 className="text-2xl font-semibold text-[#1C2751] mb-2">Fiesta</h3>
          <p className="text-[#303e5b] mb-1">
            🎉 Sindicato de Sutiaga, Corrientes
          </p>
          <p className="text-[#303e5b]">🕗 19:00 hs</p>
        </motion.div>
      </div>

      {/* 👣 Nota para los invitados */}
      <p className="mt-8 text-sm text-[#646f88] italic relative">
        (Tocá los íconos para ver la ubicación en Google Maps)
      </p>

      {/* 👗 Código de vestimenta */}
      <p className="mt-10 text-[#303e5b] italic text-lg relative z-10">
        Código de vestimenta:{" "}
        <span className="font-semibold">Elegante (evitar blanco)</span>
      </p>
    </section>
  );
};

export default Evento;

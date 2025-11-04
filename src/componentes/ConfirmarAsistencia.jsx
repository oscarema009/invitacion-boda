import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ConfirmarAsistencia = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [asistencia, setAsistencia] = useState("asistiré");

  const numeroWpp = "5493794355420"; // 📞 ← Numereo de mica

  const enviarMensaje = () => {
    if (!nombre.trim()) {
      alert("Por favor, ingresá tu nombre antes de enviar 💌");
      return;
    }

    const texto = `Hola! Soy ${nombre}. ${mensaje ? mensaje + " " : ""}Confirmo que ${asistencia === "asistire" ? "asistiré" : "no podré asistir"} a la boda.`;
    const url = `https://wa.me/${numeroWpp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="confirmar"
      className="py-20 bg-white/80 backdrop-blur-md text-center flex flex-col items-center px-6"
    >
      {/* 💌 Título */}
      <motion.h2
        className="text-3xl font-semibold text-[#1C2751] mb-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Confirmá tu Asistencia
      </motion.h2>

      {/* ✨ Frase cálida */}
      <motion.p
        className="text-[#303e5b] mb-8 max-w-lg text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Tu presencia es el mejor regalo que podemos recibir.  
        Nos encantaría saber si vas a acompañarnos en este día tan especial
      </motion.p>

      {/* 📝 Formulario */}
      <motion.div
        className="bg-[#C9D9D1]/50 backdrop-blur-md rounded-2xl shadow-md p-8 w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Nombre */}
        <div className="mb-4 text-left">
          <label className="block text-[#1C2751] font-medium mb-1">
            Nombre:
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre completo"
            className="w-full border border-[#82A1D1] rounded-xl p-2 text-[#1C2751] focus:ring-2 focus:ring-[#5572B2] outline-none"
          />
        </div>

        {/* Mensaje */}
        <div className="mb-4 text-left">
          <label className="block text-[#1C2751] font-medium mb-1">
            Mensaje (opcional):
          </label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribí unas palabras si querés..."
            className="w-full border border-[#82A1D1] rounded-xl p-2 text-[#1C2751] h-24 focus:ring-2 focus:ring-[#5572B2] outline-none"
          ></textarea>
        </div>

        {/* Selección de asistencia */}
        <div className="mb-6 text-left">
          <label className="block text-[#1C2751] font-medium mb-2">
            Confirmación:
          </label>
          <div className="flex justify-around">
            <label className="flex items-center gap-2 text-[#303e5b] cursor-pointer">
              <input
                type="radio"
                value="asistire"
                checked={asistencia === "asistire"}
                onChange={(e) => setAsistencia(e.target.value)}
              />
              Asistiré
            </label>
            <label className="flex items-center gap-2 text-[#303e5b] cursor-pointer">
              <input
                type="radio"
                value="noAsistire"
                checked={asistencia === "noAsistire"}
                onChange={(e) => setAsistencia(e.target.value)}
              />
              No podré asistir
            </label>
          </div>
        </div>

        {/* Botón enviar */}
        <motion.button
          onClick={enviarMensaje}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#6B8F7A] text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2 mx-auto"
        >
          <Send size={20} /> Enviar por WhatsApp
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ConfirmarAsistencia;

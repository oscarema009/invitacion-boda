import React from "react";
import { motion } from "framer-motion";
import portadaMovil from "../imagenes/micaynico.png";
import fondoSinTexto from "../imagenes/sintexto.jpg";

function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center">
      {/* 🌸 Fondo escritorio */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage: `url(${fondoSinTexto})`,
        }}
      ></div>

      {/* 📱 Fondo móvil */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:hidden"
        style={{
          backgroundImage: `url(${portadaMovil})`,
        }}
      ></div>

      {/* ✨ Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 text-center text-[#1C2751] sm:text-[#1C2751] px-12"
      >
        
        {/* 🌿 Versión escritorio */}
<div className="hidden sm:block mt-56"> {/* ← agregado mt-16 para bajar todo el bloque */}
  <h2 className="text-6xl font-bold font-script mb-10">Micaela</h2>
  <h2 className="text-4xl font-bold font-script mb-10">&</h2>
  <h2 className="text-6xl font-bold font-script mb-60">Nicolás</h2>

  <p className="mt-80 text-2xl text-[#344C92] italic mb-6">
    Después de 10 años de prueba... decidimos que Sí funciona...
  </p>

  {/* ⬇️ bajamos un poco esta parte */}
  <div className="mt-8"> 
    <p className="text-[#344C92] text-2xl italic mb-10">
      Con Tiziano y Jonás como testigos de todo, por fin decimos:
    </p>

    <h3 className="text-6xl font-bold text-[#1C2751] italic mb-10">
      ¡Nos casamos!
    </h3>
  </div>
</div>


        {/* 📱 Versión móvil */}
        <div className="mt-20 block sm:hidden text-[#1C2751]">
          <h2 className="text-6xl font-script mb-4">Micaela</h2>
          <h2 className="text-4xl font-script mb-2">&</h2>
          <h2 className="text-6xl font-script mb-8">Nicolás</h2>
          

          <p className="mt-52 text-black text-lg">
            Después de 10 años de prueba... decidimos unir nuestras vidas
          </p>
          <p className="text-black text-lg">
            Con Tiziano y Jonás como testigos de todo, por fin decimos...
          </p>
          <h3 className="text-3xl mt-3 font-bold text-[#1C2751]">
            ¡Nos casamos!
          </h3>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

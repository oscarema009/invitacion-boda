import React from "react";
import polaroid1 from "../imagenes/foto1.jpg";
import polaroid2 from "../imagenes/foto2.jpg";
import polaroid3 from "../imagenes/foto3.jpg";

const HistoriaSection = () => {
  return (
    <section className="relative bg-white/80 backdrop-blur-sm py-20 px-6 flex flex-col items-center justify-center text-center shadow-inner">
      {/* Texto de historia */}
      <div className="max-w-3xl">
        <h2 className="text-4xl font-semibold text-[#1C2751] mb-4">
          Nuestra historia
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Dos almas nacieron con apenas 23 días de diferencia.  
          Durante años caminaron por los mismos lugares, compartieron tiempos y amistades,  
          sin imaginar que el destino los aguardaba.  
          A los 22 años sus caminos se cruzaron, y desde entonces caminan juntos  
          construyendo amor, sueños y familia.  
          Hoy, diez años después celebran ese amor al unirse ante Dios.
        </p>
      </div>

      {/* Polaroids */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-8">
        {/* Foto 1 */}
        <div className="w-48 h-56 bg-white shadow-lg rounded-md rotate-[-6deg] p-2 border border-gray-300">
          <img
            src={polaroid1}
            alt="Recuerdo 1"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        {/* Foto 2 */}
        <div className="w-48 h-56 bg-white shadow-lg rounded-md rotate-[5deg] p-2 border border-gray-300 -mt-6">
          <img
            src={polaroid2}
            alt="Recuerdo 2"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        {/* Foto 3 */}
        <div className="w-48 h-56 bg-white shadow-lg rounded-md rotate-[-3deg] p-2 border border-gray-300">
          <img
            src={polaroid3}
            alt="Recuerdo 3"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;

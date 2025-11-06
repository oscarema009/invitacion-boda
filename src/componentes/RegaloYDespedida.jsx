import { useState } from "react";
import { Copy } from "lucide-react";

export default function RegaloYDespedida() {
  const [copiado, setCopiado] = useState(false);
  const alias = "BODA.MYN.BBVA";

  const copiarAlias = () => {
    navigator.clipboard.writeText(alias);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 text-center bg-gradient-to-b from-white to-blue-50">
      {/* 🌸 Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Si desean hacernos un Obsequio
      </h2>

      {/* 💬 Frase cálida */}
      <p className="text-gray-600 max-w-md mb-8">
        Tu presencia será siempre el mejor regalo. 
        Pero si quisieras colaborar con nosotros, 
        dejamos nuestros datos bancarios con mucho cariño.
      </p>

      {/* 💳 Recuadro de datos bancarios */}
      <div className="bg-[#C9D9D1]/50 shadow-md rounded-2xl p-5 w-[350px] text-center border border-gray-100">
        <h3 className="text-2xl font-semibold text-gray-900 mb-1">
          Datos Bancarios
        </h3>
        <p className="text-xs text-gray-500 mb-4">
          Nota: Haga clic para copiar el alias de la cuenta
        </p>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 shadow-sm">
          <span className="text-sm font-semibold text-pink-600">
            Micaela y Nicolás
          </span>
          <span className="text-sm text-blue-600 font-medium">Personal Pay</span>
          <button
            onClick={copiarAlias}
            className="flex items-center gap-1 text-gray-800 hover:text-blue-600 transition"
          >
            <span className="font-semibold">{alias}</span>
            <Copy size={12} />
          </button>
        </div>
      </div>

      {/* 💙 Mensaje de confirmación al copiar */}
      {copiado && (
        <div className="mt-3 animate-fadeIn flex items-center gap-2 text-blue-600 font-medium text-sm">
          <span>Alias copiado con éxito</span>
          <span className="animate-bounce">💙</span>
        </div>
      )}

      {/* 🌿 Despedida */}
      <div className="mt-14 max-w-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Con todo nuestro cariño
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Este día representa el comienzo de una nueva etapa en nuestras vidas,
          y tenerlos con nosotros hace que sea aún más especial.  
          Gracias por acompañarnos en este momento tan importante 💫
        </p>
        <p className="text-lg font-semibold text-gray-800 mt-6">
          — Micaela & Nicolás 💍
        </p>
      </div>
    </section>
  );
}

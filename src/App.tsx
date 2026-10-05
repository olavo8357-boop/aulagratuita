/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(0); // 0: landing, 1: Q1, 2: Q2
  const [showButton, setShowButton] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentStep === 5) {
      setShowButton(false);
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 367 * 1000); // 6 minutes and 7 seconds
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  useEffect(() => {
    // Only attempt to inject if current step is 5 and the element exists
    if (currentStep === 5) {
      if (playerRef.current && !playerRef.current.querySelector('#ifr_6ac3460b857645697ba4c82f')) {
        playerRef.current.innerHTML = `
          <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js", s.async=!0,document.head.appendChild(s); </script>
          <div id="ifr_6ac3460b857645697ba4c82f_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;">
            <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_6ac3460b857645697ba4c82f_aspect">
              <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6ac3460b857645697ba4c82f" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/19a43588-4761-4cfd-9556-c2bf18931c0f/players/6ac3460b857645697ba4c82f/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe>
            </div>
          </div>
        `;
      }
    }
  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-black text-white font-sans p-6 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="relative z-10 w-full max-w-lg">
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i === 1 ? 'bg-[#FFEB00]' : 'bg-gray-800'}`}></div>
            ))}
          </div>

          <h1 className="text-3xl font-bold mb-8">
            Você já vende pela internet hoje?
          </h1>

          <div className="flex flex-col gap-4">
            {[
              "Nunca vendi",
              "Já tentei e parei",
              "Vendo, mas pouco",
              "Vendo bem e quero escalar"
            ].map((option) => (
              <button key={option} onClick={handleNext} className="w-full bg-gray-900 border border-gray-700 text-left p-6 rounded-2xl text-lg hover:border-amber-400 transition">
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="min-h-screen bg-black text-white font-sans p-6 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="relative z-10 w-full max-w-lg">
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i === 2 ? 'bg-[#FFEB00]' : 'bg-gray-800'}`}></div>
            ))}
          </div>

          <h1 className="text-3xl font-bold mb-8">
            O que mais te trava hoje?
          </h1>

          <div className="flex flex-col gap-4">
            {[
              "Não tenho fornecedor",
              "Não tenho dinheiro para estoque",
              "Não sei abrir e configurar a loja",
              "Anuncio, mas não vende"
            ].map((option) => (
              <button key={option} onClick={handleNext} className="w-full bg-gray-900 border border-gray-700 text-left p-6 rounded-2xl text-lg hover:border-amber-400 transition">
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="min-h-screen bg-black text-white font-sans p-6 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="relative z-10 w-full max-w-lg">
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i === 3 ? 'bg-[#FFEB00]' : 'bg-gray-800'}`}></div>
            ))}
          </div>

          <h1 className="text-3xl font-bold mb-8">
            Onde você quer vender?
          </h1>

          <div className="flex flex-col gap-4">
            {["Mercado Livre", "Shopee", "Nos dois"].map((option) => (
              <button key={option} onClick={handleNext} className="w-full bg-gray-900 border border-gray-700 text-left p-6 rounded-2xl text-lg hover:border-amber-400 transition">
                {option}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl flex flex-col items-center gap-4 cursor-default">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-xl">ML</div>
              <span className="font-semibold">Mercado Livre</span>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl flex flex-col items-center gap-4 cursor-default">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
              <span className="font-semibold">Shopee</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-black text-white font-sans p-6 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="relative z-10 w-full max-w-lg">
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i === 4 ? 'bg-[#FFEB00]' : 'bg-gray-800'}`}></div>
            ))}
          </div>

          <h1 className="text-3xl font-bold mb-8">
            Quanto tempo por dia você consegue dedicar?
          </h1>

          <div className="flex flex-col gap-4">
            {["Menos de 1 hora", "De 1 a 2 horas", "3 horas ou mais"].map((option) => (
              <button key={option} onClick={handleNext} className="w-full bg-gray-900 border border-gray-700 text-left p-6 rounded-2xl text-lg hover:border-amber-400 transition">
                {option}
              </button>
            ))}
          </div>
          
          <div className="mt-8 bg-gray-900 border border-gray-700 p-6 rounded-2xl flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full border-4 border-gray-700 flex items-center justify-center relative">
              <div className="w-1 h-12 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full origin-bottom rotate-45"></div>
              <div className="w-1 h-8 bg-[#FFEB00] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full origin-bottom -rotate-45"></div>
            </div>
            <p className="text-gray-400 text-sm font-semibold">Poucas horas por dia, bem usadas</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 5) {
    return (
      <div className="min-h-screen bg-black text-white font-sans p-6 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="relative z-10 w-full max-w-lg text-center">
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i === 5 ? 'bg-[#FFEB00]' : 'bg-gray-800'}`}></div>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-8">
            Como iniciar na <span className="text-white">PRÁTICA</span>,<br />
            abrir sua loja, conectar<br />
            fornecedores e começar a vender.
          </h1>

          <div 
            ref={playerRef}
            className="w-full rounded-2xl flex flex-col items-center justify-center mb-8 overflow-hidden"
          ></div>
          
          {showButton && (
            <a href="https://wa.me/5521920276257?text=Olá,%20tenho%20interesse%20em%20participar%20do%20projeto%20pra%20vender%20no%20mercado%20livre%20sem%20estoque" className="w-full bg-green-500 text-black font-bold text-lg py-4 rounded-xl transition hover:bg-green-600 block text-center">
              Falar comigo no WhatsApp
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans p-6 flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative z-10 w-full max-w-lg text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Como eu saí de um estudante quebrado para viver do <span className="text-[#FFEB00]">Mercado Livre</span>
        </h1>

        <div className="flex gap-4 w-full mb-8">
          <div className="flex-1">
            <img src="https://i.imgur.com/bF4LWLd.jpeg" alt="Antes" className="w-full h-auto rounded-lg" />
            <p className="text-gray-400 text-sm font-semibold mt-2 uppercase tracking-widest">Antes</p>
          </div>
          <div className="flex-1">
            <img src="https://i.imgur.com/Id8Lu6L.png" alt="Hoje" className="w-full h-auto rounded-lg border-2 border-[#FFEB00]" />
            <p className="text-[#FFEB00] text-sm font-semibold mt-2 uppercase tracking-widest">Hoje</p>
          </div>
        </div>

        <p className="text-lg text-gray-300 mb-10">
          Responda 4 perguntas rápidas e descubra o que falta para você fazer o mesmo.
        </p>

        <button 
          onClick={handleNext}
          className="w-full bg-[#FFEB00] text-black font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition hover:bg-[#ffe600]"
        >
          Começar o diagnóstico →
        </button>
      </div>
    </div>
  );
}

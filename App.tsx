/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { BookOpen, Scale, Compass, Award, ShieldAlert, GraduationCap, Flame, Library, Star } from "lucide-react";
import MentorBadge from "./components/MentorBadge";
import AulaMagna from "./components/AulaMagna";
import ArchivoHistorico from "./components/ArchivoHistorico";
import SalaDoctrinal from "./components/SalaDoctrinal";
import SalaOral from "./components/SalaOral";
import CamaraSolemnes from "./components/CamaraSolemnes";
import BrujulaJuridica from "./components/BrujulaJuridica";
import RadarErrores from "./components/RadarErrores";
import BaseConocimiento from "./components/BaseConocimiento";
import JuegoRolInteractivo from "./components/JuegoRolInteractivo";

export default function App() {
  const [mentorName, setMentorName] = useState("Marco Aurelio");
  const [activeRoom, setActiveRoom] = useState<
    "aula-magna" | "archivo-historico" | "sala-doctrinal" | "sala-oral" | "camara-solemnes" | "brujula-juridica" | "radar-errores" | "base-conocimiento" | "role-playing"
  >("role-playing");

  const roomsList = [
    {
      id: "role-playing",
      name: "Role Playing",
      icon: <Award className="w-4 h-4" />,
      tag: "Simulador de hasta 20 Preguntas",
      color: "border-amber-500/20 text-[#CCA352] bg-[#CCA352]/5 hover:bg-[#CCA352]/10"
    },
    {
      id: "aula-magna",
      name: "Aula Magna",
      icon: <BookOpen className="w-4 h-4" />,
      tag: "Cátedra y Explicaciones Socráticas",
      color: "border-slate-800/20 text-slate-400 hover:bg-slate-900/30"
    },
    {
      id: "brujula-juridica",
      name: "Brújula Jurídica",
      icon: <Compass className="w-4 h-4" />,
      tag: "Comprensión Lectora y Método IRIS",
      color: "border-cyan-800/20 text-cyan-400 hover:bg-cyan-950/20"
    },
    {
      id: "sala-oral",
      name: "Sala Oral",
      icon: <GraduationCap className="w-4 h-4" />,
      tag: "Interrogación adaptativa (Escala 1.0 - 7.0)",
      color: "border-red-800/20 text-red-400 hover:bg-red-950/20"
    },
    {
      id: "camara-solemnes",
      name: "Cámara de Solemnes",
      icon: <Flame className="w-4 h-4" />,
      tag: "Evaluación y Modelos de Ensayo Escrito",
      color: "border-orange-850/20 text-orange-400 hover:bg-orange-950/20"
    },
    {
      id: "radar-errores",
      name: "Radar de Errores",
      icon: <ShieldAlert className="w-4 h-4" />,
      tag: "Refinería de Imprecisiones Típicas",
      color: "border-emerald-800/20 text-emerald-400 hover:bg-emerald-950/20"
    },
    {
      id: "sala-doctrinal",
      name: "Sala Doctrinal",
      icon: <Scale className="w-4 h-4" />,
      tag: "Controversias Historiográficas",
      color: "border-purple-800/20 text-purple-400 hover:bg-purple-950/20"
    },
    {
      id: "archivo-historico",
      name: "Archivo Histórico",
      icon: <Library className="w-4 h-4" />,
      tag: "Manuales, Citas y Fuentes",
      color: "border-slate-800/20 text-slate-300 hover:bg-slate-900/30"
    },
    {
      id: "base-conocimiento",
      name: "Base de Conocimiento",
      icon: <Star className="w-4 h-4" />,
      tag: "Apuntes y Preguntas Recuperativas",
      color: "border-yellow-800/20 text-yellow-500 hover:bg-yellow-950/20"
    }
  ];

  const renderActiveRoom = () => {
    switch (activeRoom) {
      case "role-playing":
        return <JuegoRolInteractivo mentorName={mentorName} />;
      case "aula-magna":
        return <AulaMagna mentorName={mentorName} />;
      case "archivo-historico":
        return <ArchivoHistorico />;
      case "sala-doctrinal":
        return <SalaDoctrinal mentorName={mentorName} />;
      case "sala-oral":
        return <SalaOral mentorName={mentorName} />;
      case "camara-solemnes":
        return <CamaraSolemnes mentorName={mentorName} />;
      case "brujula-juridica":
        return <BrujulaJuridica mentorName={mentorName} />;
      case "radar-errores":
        return <RadarErrores mentorName={mentorName} />;
      case "base-conocimiento":
        return <BaseConocimiento mentorName={mentorName} />;
      default:
        return <JuegoRolInteractivo mentorName={mentorName} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070B11] text-slate-100 flex flex-col font-sans" id="main-application-container">
      {/* Eleganc Academic Header / Top Bar */}
      <header className="bg-[#0B0F17] border-b border-[#CCA352]/20 py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-[#CCA352]/40 rounded-full flex items-center justify-center bg-slate-950 shadow-inner">
            <span className="text-xl">⚖️</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-serif font-bold text-white tracking-wide" id="app-heading-title">
                {mentorName.toUpperCase()}
              </h1>
              <span className="text-[10px] bg-[#CCA352]/10 border border-[#CCA352]/30 text-[#CCA352] font-mono px-2 py-0.5 rounded uppercase">
                Academia Jurídica Digital
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono tracking-wider">
              MENTOR DE HISTORIA DEL DERECHO E HISTORIA CONSTITUCIONAL CHILENA
            </p>
          </div>
        </div>

        {/* Latin Motto Banner */}
        <div className="text-center md:text-right hidden sm:block">
          <p className="text-xs font-serif italic text-[#BCA374] tracking-wide" id="main-latin-lemma">
            &ldquo;Intellige Historiam, Comprehende Ius&rdquo;
          </p>
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">
            UNIVERSIDAD SAN SEBASTIÁN • CÁTEDRA 2026
          </span>
        </div>
      </header>

      {/* Main Responsive Grid Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left column: Mentor Badge CARD & Gates selection */}
        <div className="md:col-span-4 lg:col-span-3 space-y-6 flex flex-col">
          {/* Mentor Persona Interactive Card */}
          <MentorBadge mentorName={mentorName} setMentorName={setMentorName} activeRoom={activeRoom} />

          {/* Academic Gates Navigation Sidebar */}
          <div className="bg-[#11151D] border border-slate-800 rounded-xl p-4 space-y-3 flex-1 flex flex-col justify-between" id="navigation-sidebar">
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#BCA374] block px-1.5 mb-2">
                Salas de Aprendizaje USS:
              </span>
              <div className="space-y-1.5" id="rooms-nav-list">
                {roomsList.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoom(room.id as any)}
                    className={`w-full flex items-center gap-3 p-2.5 rounded-lg border text-left transition-all ${
                      activeRoom === room.id
                        ? "bg-[#CCA352]/10 border-[#CCA352] text-white shadow"
                        : "bg-slate-900/40 border-slate-900 text-slate-400 hover:text-white"
                    }`}
                    id={`nav-room-btn-${room.id}`}
                  >
                    <div className={`p-1.5 rounded-md bg-slate-950 ${activeRoom === room.id ? "text-[#CCA352]" : "text-slate-500"}`}>
                      {room.icon}
                    </div>
                    <div>
                      <span className="text-xs font-serif font-bold block">{room.name}</span>
                      <span className="text-[9px] text-slate-500 font-mono block leading-none mt-0.5">{room.tag}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* University branding in sidebar */}
            <div className="border-t border-slate-850 pt-4 mt-6 text-center text-[10px] text-slate-500 font-serif">
              🛡 Universidad San Sebastián
            </div>
          </div>
        </div>

        {/* Right column: Current Active Interactive Room (Core) */}
        <div className="md:col-span-8 lg:col-span-9" id="classroom-core-panel">
          {renderActiveRoom()}
        </div>
      </main>

      {/* Footer Block */}
      <footer className="bg-[#080B10] border-t border-slate-900 py-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between px-6 md:px-12 gap-3 mt-auto">
        <p className="font-serif italic text-slate-400 text-justify sm:text-left">
          &ldquo;Comprender antes de memorizar, argumentar antes de responder.&rdquo;
        </p>
        <p className="font-mono text-[10px] text-slate-600">
          Academia Jurídica USS • Cátedra de {mentorName} • Derechos de autor 2026.
        </p>
      </footer>
    </div>
  );
}

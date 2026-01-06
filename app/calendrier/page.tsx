"use client";

import React, { useState } from 'react';
import { journalsData, Journal } from '@/data/journalsData';
import Image from 'next/image';


export default function CalendrierPage() {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const [selectedJournal, setSelectedJournal] = useState<Journal | null>(null);

  return (
    <div className="min-h-screen py-4 md:py-8 px-2 md:px-4 relative overflow-hidden">
      {/* Image de fond */}
        <Image 
          src="/images/clair-obscur-expedition-33.jpg"
          alt="Background"
          fill
          className="opacity-20"
          priority
        />
      
      <style jsx>{`
        .scrollbar-custom {
          direction: rtl;
        }
        .scrollbar-custom > div {
          direction: ltr;
        }
        .scrollbar-custom::-webkit-scrollbar {
          width: 16px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(38, 38, 38, 0.5);
          border-radius: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(217, 119, 6, 0.5);
          border-radius: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: rgba(217, 119, 6, 0.7);
        }
      `}</style>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titre */}
        <div className="text-left mb-6 md:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-200 mb-2 md:mb-3">
            Journal d&apos;expédition
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {/* Grille régulière avec colonnes adaptatives et scroll */}
          <div className="max-h-[calc(100vh-250px)] lg:max-h-[calc(100vh-200px)] overflow-y-auto pl-1 md:pl-2 scrollbar-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 flex-shrink-0 p-4 md:p-6 lg:p-8">
              {journalsData.map((journal, index) => (
              <div
                key={index}
                className={`
                  relative aspect-square cursor-pointer
                  bg-neutral-950
                  border border-white/30
                  shadow-2xl
                  transition-all duration-300 ease-in-out
                  ${hoveredDay === index ? 'scale-110 z-10' : 'scale-100'}
                  ${selectedJournal === journal ? 'border-amber-500 border-2' : ''}
                  flex flex-col items-center justify-center gap-1
                  hover:border-white/60
                  hover:bg-neutral-900
                  p-2
                `}
                onMouseEnter={() => setHoveredDay(index)}
                onMouseLeave={() => setHoveredDay(null)}
                onClick={() => setSelectedJournal(journal)}
              >
                {/* Coins décoratifs */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-white/20" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-white/20" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-white/20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-white/20" />

                {/* Contenu du journal */}
                {journal.name ? (
                  // Journal spécial avec nom uniquement
                  <span className="text-sm md:text-lg lg:text-xl font-bold text-amber-200 text-center px-1">
                    {journal.name}
                  </span>
                ) : (
                  // Journal numéroté
                  <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-amber-200 tracking-wider">
                    {journal.number}
                  </span>
                )}

                {/* Effet de brillance au survol */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent
                  opacity-0 hover:opacity-100 transition-opacity duration-300
                `} />

                {/* Lueur au survol */}
                {hoveredDay === index && (
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 border border-white/80 animate-pulse shadow-lg shadow-white/20" />
                  </div>
                )}
              </div>
              ))}
            </div>
          </div>

          {/* Panneau d'information à droite */}
          <div className="flex-1 lg:min-w-[300px]">
            {selectedJournal ? (
              <div className="bg-neutral-950 border border-white/30 p-4 md:p-6 rounded-lg shadow-2xl lg:sticky lg:top-8">
                <div className="mb-3 md:mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-200 mb-2">
                    {selectedJournal.name ? selectedJournal.name : `Expédition ${selectedJournal.number}`}
                  </h2>
                  <div className="h-0.5 w-16 md:w-20 bg-amber-500"></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs md:text-sm font-semibold text-amber-300/70 uppercase tracking-wider mb-2 md:mb-3">
                      Emplacement
                    </h3>
                    <div className="inline-block px-2 md:px-3 py-1 md:py-1.5 bg-neutral-800/60 border border-neutral-700 rounded-md mb-2 md:mb-3">
                      <span className="text-neutral-300 text-xs md:text-sm font-medium">
                        {selectedJournal.zone}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-stone-300 leading-relaxed">
                      {selectedJournal.location}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedJournal(null)}
                  className="mt-4 md:mt-6 px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base bg-amber-800/20 border border-amber-600/30 text-amber-200 rounded hover:bg-amber-800/40 transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <div className="hidden lg:flex bg-neutral-950/50 border border-white/10 p-6 rounded-lg shadow-xl h-full items-center justify-center">
                <p className="text-stone-500 text-center">
                  Cliquez sur un journal pour afficher son emplacement
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

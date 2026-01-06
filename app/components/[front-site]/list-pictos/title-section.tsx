'use client'

import { usePictosFilter } from '@/lib/pictos-filter';

interface TitleSectionProps {
  filterData: ReturnType<typeof usePictosFilter>;
}

export default function TitleSection({ filterData }: TitleSectionProps) { 
  const {
    searchTerm,
    setSearchTerm,
    zoneFilter,
    setZoneFilter,
    zones,
    resetFilters,
    exportToExcel
  } = filterData;
    return (
      <>
        <div className="header-gradient">
          <h1 className="title-gold text-glow">🎮 Guide des Pictos</h1>
          <p className="subtitle">Tous les emplacements de Clair Obscur: Expedition 33</p>
        </div>

        <div className="controls-section">
          <div className="flex-1 min-w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="🔍 Rechercher un picto, une zone..."
              className="input-dark"
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            <select
              value={zoneFilter}
              onChange={(e) => setZoneFilter(e.target.value)}
              className="select-dark"
            >
              <option value="">Toutes les zones</option>
              {zones.map(zone => (
                <option key={zone} value={zone}>{zone}</option>
              ))}
            </select>
            <button onClick={exportToExcel} className="btn btn-gold">
              📥 Exporter
            </button>
            <button onClick={resetFilters} className="btn btn-secondary">
              🔄 Réinitialiser
            </button>
          </div>
        </div>
      </>
    );
}   
'use client';

import { useState, useMemo } from 'react';
import { Picto } from '@/types/picto';
import { pictosData } from '@/data/pictosData';

export default function PictosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [zoneFilter, setZoneFilter] = useState('');
  const [collectedPictos, setCollectedPictos] = useState<Set<number>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('collectedPictos');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    }
    return new Set();
  });
  const [sortColumn, setSortColumn] = useState<keyof Picto | null>(null);
  const [sortDirection, setSortDirection] = useState(1);

  const saveCollectedPictos = (pictos: Set<number>) => {
    localStorage.setItem('collectedPictos', JSON.stringify([...pictos]));
  };

  const togglePicto = (pictoId: number) => {
    const newCollected = new Set(collectedPictos);
    if (newCollected.has(pictoId)) {
      newCollected.delete(pictoId);
    } else {
      newCollected.add(pictoId);
    }
    setCollectedPictos(newCollected);
    saveCollectedPictos(newCollected);
  };

  const zones = useMemo(() => {
    return [...new Set(pictosData.map(p => p.zone))].sort();
  }, []);

  const filteredData = useMemo(() => {
    let filtered = pictosData.filter(picto => {
      const matchSearch = !searchTerm || 
        picto.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        picto.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        picto.emplacement.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchZone = !zoneFilter || picto.zone === zoneFilter;
      
      return matchSearch && matchZone;
    });

    if (sortColumn) {
      filtered = [...filtered].sort((a, b) => {
        let aVal = a[sortColumn];
        let bVal = b[sortColumn];

        if (sortColumn === 'niveau') {
          aVal = aVal === null ? -1 : aVal;
          bVal = bVal === null ? -1 : bVal;
        }

        if (typeof aVal === 'string' && typeof bVal === 'string') {
          return sortDirection * aVal.localeCompare(bVal);
        }
        return sortDirection * ((aVal as number) - (bVal as number));
      });
    }

    return filtered;
  }, [searchTerm, zoneFilter, sortColumn, sortDirection]);

  const handleSort = (column: keyof Picto) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection * -1);
    } else {
      setSortColumn(column);
      setSortDirection(1);
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setZoneFilter('');
    setSortColumn(null);
    setSortDirection(1);
  };

  const exportToExcel = () => {
    alert('Fonctionnalité d\'export à implémenter');
  };

  return (
    <div className="min-h-screen p-5 animate-fade-in">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden" style={{ background: 'var(--darkness-mid)', border: '1px solid var(--border-subtle)' }}>
        <div className="p-8 text-center" style={{ background: 'linear-gradient(135deg, var(--darkness-deep) 0%, var(--darkness-light) 100%)', borderBottom: '2px solid var(--light-gold)' }}>
          <h1 className="text-4xl font-bold mb-2 text-glow" style={{ color: 'var(--light-gold)' }}> Guide des Pictos</h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>Tous les emplacements</p>
        </div>
        <div className="p-6 flex flex-wrap gap-4" style={{ background: 'var(--darkness-deep)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="flex-1 min-w-64">
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder=" Rechercher..." className="w-full px-5 py-3 rounded-lg focus:outline-none transition" style={{ background: 'var(--darkness-mid)', border: '2px solid var(--border-subtle)', color: 'var(--text-primary)' }} />
          </div>
          <div className="flex gap-3 flex-wrap">
            <select value={zoneFilter} onChange={(e) => setZoneFilter(e.target.value)} className="px-5 py-3 rounded-lg cursor-pointer transition" style={{ background: 'var(--darkness-mid)', border: '2px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
              <option value="">Toutes les zones</option>
              {zones.map(zone => (<option key={zone} value={zone}>{zone}</option>))}
            </select>
            <button onClick={exportToExcel} className="px-6 py-3 font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition" style={{ background: 'var(--light-gold)', color: 'var(--darkness-deep)' }}> Exporter</button>
            <button onClick={resetFilters} className="px-6 py-3 font-semibold rounded-lg transition" style={{ background: 'var(--darkness-light)', color: 'var(--text-secondary)', border: '2px solid var(--border-subtle)' }}> Réinitialiser</button>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center flex-wrap gap-4" style={{ background: 'var(--darkness-light)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold" style={{ color: 'var(--light-gold)' }}>{pictosData.length}</span>
            <span style={{ color: 'var(--text-secondary)' }}>pictos au total</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold" style={{ color: 'var(--light-glow)' }}>{collectedPictos.size}</span>
            <span style={{ color: 'var(--text-secondary)' }}>récupérés</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold" style={{ color: 'var(--light-gold)' }}>{filteredData.length}</span>
            <span style={{ color: 'var(--text-secondary)' }}>affichés</span>
          </div>
        </div>
        <div className="p-8 overflow-x-auto">
          {filteredData.length === 0 ? (
            <div className="text-center py-16" style={{ color: 'var(--text-secondary)' }}>
              <div className="text-6xl mb-4"></div>
              <h3 className="text-2xl font-semibold mb-2">Aucun picto trouvé</h3>
              <p>Essayez de modifier vos critères</p>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="sticky top-0" style={{ background: 'linear-gradient(135deg, var(--darkness-deep) 0%, var(--darkness-light) 100%)', color: 'var(--light-gold)' }}>
                <tr>
                  <th className="p-4 text-center w-16"></th>
                  <th onClick={() => handleSort('nom')} className="p-4 text-left cursor-pointer hover:bg-white/10 transition">Nom du Picto</th>
                  <th onClick={() => handleSort('niveau')} className="p-4 text-left cursor-pointer hover:bg-white/10 transition">Niveau</th>
                  <th onClick={() => handleSort('zone')} className="p-4 text-left cursor-pointer hover:bg-white/10 transition">Zone</th>
                  <th onClick={() => handleSort('emplacement')} className="p-4 text-left cursor-pointer hover:bg-white/10 transition">Emplacement</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((picto) => {
                  const isCollected = collectedPictos.has(picto.id);
                  return (
                    <tr key={picto.id} className={`transition hover:-translate-y-0.5 ${isCollected ? 'opacity-50' : ''}`} style={{ borderBottom: '1px solid var(--border-subtle)', background: isCollected ? 'var(--darkness-light)' : 'transparent', color: 'var(--text-primary)' }}>
                      <td className="p-4 text-center"><input type="checkbox" checked={isCollected} onChange={() => togglePicto(picto.id)} className="w-5 h-5 cursor-pointer" style={{ accentColor: 'var(--light-gold)' }} /></td>
                      <td className="p-4"><strong style={{ color: isCollected ? 'var(--text-secondary)' : 'var(--light-gold)' }}>{picto.nom}</strong></td>
                      <td className="p-4">{picto.niveau !== null ? (<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--light-gold)', color: 'var(--darkness-deep)' }}>Nv.{picto.niveau}</span>) : (<span style={{ color: 'var(--text-muted)' }}>-</span>)}</td>
                      <td className="p-4"><span className="inline-block px-4 py-1.5 rounded-md font-medium text-sm" style={{ background: 'var(--darkness-deep)', color: 'var(--accent-blue)', border: '1px solid var(--border-subtle)' }}>{picto.zone}</span></td>
                      <td className="p-4" style={{ color: 'var(--text-secondary)' }}>{picto.emplacement}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

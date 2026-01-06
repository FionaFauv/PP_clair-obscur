'use client';
import { useState, useMemo } from 'react';
import { Picto } from '@/types/picto';
import { pictosData } from '@/data/pictosData';

export function usePictosFilter() {
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

  return {
    searchTerm,
    setSearchTerm,
    zoneFilter,
    setZoneFilter,
    collectedPictos,
    togglePicto,
    zones,
    filteredData,
    sortColumn,
    sortDirection,
    handleSort,
    resetFilters,
    exportToExcel
  };
}
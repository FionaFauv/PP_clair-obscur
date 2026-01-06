'use client'

import { usePictosFilter } from '@/lib/pictos-filter';
import { pictosData } from '@/data/pictosData';

interface StatSectionProps {
  filterData: ReturnType<typeof usePictosFilter>;
}

export default function StatSection({ filterData }: StatSectionProps) {
  const {
    collectedPictos,
    filteredData,
    handleSort,
    togglePicto
  } = filterData;

  return (
    <>
      <div className="stats-section">
        <div className="stat-item">
          <span className="stat-number">{pictosData.length}</span>
          <span className="stat-label">pictos au total</span>
        </div>
        <div className="stat-item">
          <span className="stat-number-glow">{collectedPictos.size}</span>
          <span className="stat-label">récupérés</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{filteredData.length}</span>
          <span className="stat-label">affichés</span>
        </div>
      </div>

      <div className="table-container">
        {filteredData.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">😕</div>
            <h3 className="text-2xl font-semibold mb-2">Aucun picto trouvé</h3>
            <p>Essayez de modifier vos critères de recherche</p>
          </div>
        ) : (
          <table className="table-dark">
            <thead>
              <tr>
                <th>✓</th>
                <th onClick={() => handleSort('nom')}>Nom du Picto</th>
                <th onClick={() => handleSort('niveau')}>Niveau</th>
                <th onClick={() => handleSort('zone')}>Zone</th>
                <th onClick={() => handleSort('emplacement')}>Emplacement / Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((picto) => {
                const isCollected = collectedPictos.has(picto.id);
                return (
                  <tr key={picto.id} className={isCollected ? 'collected' : ''}>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        checked={isCollected}
                        onChange={() => togglePicto(picto.id)}
                        className="checkbox-gold"
                      />
                    </td>
                    <td>
                      <strong className={isCollected ? 'text-secondary' : 'text-gold'}>
                        {picto.nom}
                      </strong>
                    </td>
                    <td>
                      {picto.niveau !== null ? (
                        <span className="badge-level">Nv.{picto.niveau}</span>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                    <td>
                      <span className="tag-zone">{picto.zone}</span>
                    </td>
                    <td className="text-secondary">{picto.emplacement}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

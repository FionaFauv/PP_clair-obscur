import Link from "next/link";

export default function ActionSection() {
    return (
        <>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link href="/pictos" className="action-card group">
            <div className="action-card-icon">🎮</div>
            <h3 className="action-card-title">
              Guide des Pictos
            </h3>
            <p className="action-card-description">
              Liste complète avec emplacements détaillés
            </p>
          </Link>

          <div className="action-card disabled">
            <div className="action-card-icon">🗺️</div>
            <h3 className="action-card-title text-secondary">
              Cartes Interactives
            </h3>
            <p className="text-muted">
              Bientôt disponible...
            </p>
          </div>
        </div>
        <div className="mt-16 text-center text-sm text-muted">
          <p>Guide communautaire non officiel</p>
        </div>
        </>
    );
}   
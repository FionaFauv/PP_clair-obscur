import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 animate-fade-in">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 
            className="text-6xl md:text-7xl font-bold mb-4 text-glow"
            style={{ color: 'var(--light-gold)' }}
          >
            Clair Obscur
          </h1>
          <p 
            className="text-2xl md:text-3xl mb-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            Expedition 33
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded"
            style={{ background: 'var(--light-gold)' }}
          />
        </div>

        {/* Description */}
        <div 
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          <p className="text-lg leading-relaxed">
            Bienvenue sur le guide complet de Clair Obscur: Expedition 33.
            Explorez tous les secrets du jeu et découvrez l&apos;emplacement de chaque picto.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link
            href="/pictos"
            className="group p-8 rounded-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'var(--darkness-mid)',
              border: '2px solid var(--border-subtle)',
            }}
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 
              className="text-xl font-semibold mb-2 group-hover:text-glow transition-all"
              style={{ color: 'var(--light-gold)' }}
            >
              Guide des Pictos
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Liste complète avec emplacements détaillés
            </p>
          </Link>

          <div
            className="group p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 opacity-50 cursor-not-allowed"
            style={{
              background: 'var(--darkness-mid)',
              border: '2px solid var(--border-subtle)',
            }}
          >
            <div className="text-4xl mb-4">🗺️</div>
            <h3 
              className="text-xl font-semibold mb-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              Cartes Interactives
            </h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Bientôt disponible...
            </p>
          </div>
        </div>

        {/* Stats */}
        <div 
          className="mt-16 text-center text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          <p>Guide communautaire non officiel</p>
        </div>
      </div>
    </div>
  );
}

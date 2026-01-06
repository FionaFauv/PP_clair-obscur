export default function HeroSection() {
    return (
              <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="title-hero text-glow">
            Clair Obscur
          </h1>
          <p className="subtitle-hero">
            Expedition 33
          </p>
          <div className="divider-gold" />
        </div>

        {/* Description */}
        <div className="text-center mb-12 max-w-2xl mx-auto text-secondary">
          <p className="text-lg leading-relaxed">
            Bienvenue sur le guide complet de Clair Obscur: Expedition 33.
            Explorez tous les secrets du jeu et découvrez l&apos;emplacement de chaque picto.
          </p>
        </div>
        </div>
    );
}

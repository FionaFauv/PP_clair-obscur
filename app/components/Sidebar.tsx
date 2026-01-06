'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: 'Accueil', path: '/', icon: '🏠' },
    { name: 'Guide Pictos', path: '/pictos', icon: '🎮' },
  ];

  return (
    <>
      {/* Bouton toggle mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg transition-all duration-300"
        style={{
          background: 'var(--darkness-mid)',
          border: '1px solid var(--border-subtle)',
          color: 'var(--light-gold)',
        }}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
        style={{
          width: '260px',
          background: 'var(--darkness-mid)',
          borderRight: '1px solid var(--border-subtle)',
        }}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo / Titre */}
          <div className="mb-8 animate-fade-in">
            <h1
              className="text-2xl font-bold mb-2 text-glow"
              style={{ color: 'var(--light-gold)' }}
            >
              Clair Obscur
            </h1>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Expedition 33
            </p>
          </div>

          {/* Menu */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <li
                    key={item.path}
                    className="animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive ? 'active-menu-item' : 'menu-item'
                      }`}
                      style={
                        isActive
                          ? {
                              background: 'var(--light-gold)',
                              color: 'var(--darkness-deep)',
                              fontWeight: '600',
                            }
                          : {
                              color: 'var(--text-secondary)',
                            }
                      }
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div
            className="pt-6 mt-6 text-xs text-center"
            style={{
              borderTop: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            <p>Guide non officiel</p>
            <p className="mt-1">© 2026</p>
          </div>
        </div>
      </aside>

      <style jsx>{`
        .menu-item:hover {
          background: var(--darkness-light);
          color: var(--light-gold);
          transform: translateX(4px);
        }
      `}</style>
    </>
  );
}

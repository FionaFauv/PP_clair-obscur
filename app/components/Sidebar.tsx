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
    { name: 'Calendrier', path: '/calendrier', icon: '📅' },
  ];

  return (
    <>
      {/* Bouton toggle mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar-toggle"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${!isOpen ? 'closed' : ''}`}>
        <div className="flex flex-col h-full p-6">
          {/* Logo / Titre */}
          <div className="sidebar-logo animate-fade-in">
            <h1 className="sidebar-title text-glow">
              Clair Obscur
            </h1>
            <p className="sidebar-subtitle">
              Expedition 33
            </p>
          </div>

          {/* Menu */}
          <nav className="sidebar-nav">
            <ul className="sidebar-menu">
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
                      className={isActive ? 'menu-item-active' : 'menu-item'}
                    >
                      <span className="menu-icon">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="sidebar-footer">
            <p>Guide non officiel</p>
            <p className="mt-1">© 2026</p>
          </div>
        </div>
      </aside>
    </>
  );
}

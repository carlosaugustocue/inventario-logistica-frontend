'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { obtenerSesion, limpiarSesion, logout, Usuario } from '@/lib/api';
import { IconoDaluzed } from '@/lib/icons';

const ETIQUETA_ROL: Record<string, string> = {
  administrador:         'Administrador',
  gerencia:              'Gerencia',
  jefe_produccion:       'Jefe de Producción',
  encargado_inventarios: 'Encargado de Inventarios',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cerrando, setCerrando] = useState(false);

  useEffect(() => {
    const sesion = obtenerSesion();
    if (!sesion) { router.replace('/login'); return; }
    setUsuario(sesion.usuario);
  }, [router]);

  async function handleLogout() {
    setCerrando(true);
    const sesion = obtenerSesion();
    if (sesion) await logout(sesion.token).catch(() => {});
    limpiarSesion();
    router.replace('/login');
  }

  if (!usuario) return null;

  return (
    <div className="min-h-screen" style={{ background: '#FDF6F0' }}>

      {/* Barra de navegación */}
      <nav className="shadow-lg" style={{ background: '#7A2E2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #E8D08A)' }}
              >
                <IconoDaluzed size={28} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">Daluzed</div>
                <div className="text-xs leading-tight" style={{ color: '#F4C8C0' }}>Inventario</div>
              </div>
            </div>

            {/* Usuario, rol y logout */}
            <div className="flex items-center gap-4">
              {/* Badge de rol */}
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: '#C9A84C', color: '#2C1A1A' }}
                >
                  {ETIQUETA_ROL[usuario.rol] ?? usuario.rol}
                </span>
                <span className="text-sm hidden sm:block" style={{ color: '#F4C8C0' }}>
                  {usuario.nombre}
                </span>
              </div>

              {/* Botón cerrar sesión */}
              <button
                onClick={handleLogout}
                disabled={cerrando}
                className="flex items-center gap-1.5 text-sm transition-all disabled:opacity-50"
                style={{ color: '#F4C8C0' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#F4C8C0')}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                {cerrando ? 'Saliendo...' : 'Cerrar sesión'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Franja dorada decorativa */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #C9A84C, #E8D08A, #C9A84C)' }} />

      {/* Contenido */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

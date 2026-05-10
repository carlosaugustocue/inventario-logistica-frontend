'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { login, guardarSesion, rutaPorRol } from '@/lib/api';
import { IconoDaluzed } from '@/lib/icons';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setCargando(true);
    try {
      const respuesta = await login(email, password);
      guardarSesion(respuesta.data.token, respuesta.data.usuario);
      router.push(rutaPorRol(respuesta.data.rol));
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesión');
    } finally {
      setCargando(false);
    }
  }

  const usuariosPrueba = [
    { rol: 'Administrador', email: 'admin@inventario.test',       pass: 'Admin1234!' },
    { rol: 'Gerencia',      email: 'gerencia@inventario.test',    pass: 'Gerencia1234!' },
    { rol: 'Producción',    email: 'produccion@inventario.test',  pass: 'Prod1234!' },
    { rol: 'Inventarios',   email: 'inventarios@inventario.test', pass: 'Inv1234!' },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: 'linear-gradient(135deg, #7A2E2E 0%, #5C1F1F 60%, #2C1010 100%)' }}
    >
      <div className="w-full max-w-md">

        {/* Cabecera — logo Daluzed */}
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #E8D08A)' }}
          >
            <IconoDaluzed size={44} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wide">Daluzed</h1>
          <p className="mt-1 text-sm" style={{ color: '#F4C8C0' }}>
            Sistema de Inventario — Pastelería
          </p>
        </div>

        {/* Tarjeta del formulario */}
        <div className="rounded-2xl shadow-2xl p-8" style={{ background: '#FDF6F0' }}>
          <h2 className="text-xl font-semibold mb-6" style={{ color: '#7A2E2E' }}>
            Iniciar sesión
          </h2>

          {/* Error */}
          {error && (
            <div
              className="border rounded-lg p-3 mb-5 text-sm flex items-start gap-2"
              style={{ background: '#FBE8E4', borderColor: '#F4C8C0', color: '#7A2E2E' }}
            >
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#5C1F1F' }}>
                Correo electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="usuario@daluzed.com"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                style={{
                  border: '1.5px solid #F4C8C0',
                  background: '#FFFAF8',
                  color: '#2C1A1A',
                }}
                onFocus={e => (e.target.style.borderColor = '#7A2E2E')}
                onBlur={e  => (e.target.style.borderColor = '#F4C8C0')}
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#5C1F1F' }}>
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                style={{
                  border: '1.5px solid #F4C8C0',
                  background: '#FFFAF8',
                  color: '#2C1A1A',
                }}
                onFocus={e => (e.target.style.borderColor = '#7A2E2E')}
                onBlur={e  => (e.target.style.borderColor = '#F4C8C0')}
              />
            </div>

            {/* Botón ingresar */}
            <button
              type="submit"
              disabled={cargando}
              className="w-full font-semibold py-2.5 rounded-lg text-sm transition-all flex items-center justify-center gap-2 text-white shadow-md"
              style={{
                background: cargando
                  ? '#A84040'
                  : 'linear-gradient(135deg, #7A2E2E, #A84040)',
              }}
            >
              {cargando ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Verificando...
                </>
              ) : 'Ingresar'}
            </button>
          </form>

          {/* Divisor */}
          <div className="mt-6 border-t pt-5" style={{ borderColor: '#F0E6DC' }}>
            <p className="text-xs font-medium mb-3" style={{ color: '#A84040' }}>
              Acceso rápido — usuarios de prueba:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {usuariosPrueba.map(u => (
                <button
                  key={u.rol}
                  type="button"
                  onClick={() => { setEmail(u.email); setPassword(u.pass); setError(''); }}
                  className="text-left px-3 py-2 rounded-lg border text-xs font-medium transition-all hover:shadow-sm"
                  style={{
                    background: '#FBE8E4',
                    borderColor: '#F4C8C0',
                    color: '#7A2E2E',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#F4C8C0')}
                >
                  <div className="font-semibold">{u.rol}</div>
                  <div className="opacity-70 truncate">{u.email}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs mt-6" style={{ color: '#F4C8C0', opacity: 0.6 }}>
          Daluzed Pastelería · Sistema de Inventario Logística · CUE
        </p>
      </div>
    </div>
  );
}

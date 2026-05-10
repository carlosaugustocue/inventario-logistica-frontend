'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { obtenerSesion, rutaPorRol } from '@/lib/api';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const sesion = obtenerSesion();
    if (sesion) {
      router.replace(rutaPorRol(sesion.usuario.rol));
    } else {
      router.replace('/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-slate-400 text-sm">Cargando...</div>
    </div>
  );
}

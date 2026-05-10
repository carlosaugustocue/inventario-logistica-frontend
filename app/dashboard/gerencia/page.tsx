'use client';

import { obtenerSesion } from '@/lib/api';
import {
  IconoFinanciero, IconoReporte, IconoAlerta, IconoBascula,
  IconoChefHat, IconoConfig, IconoPastel,
} from '@/lib/icons';

const tarjetas = [
  { titulo: 'Ventas del mes',       valor: '—', Icono: IconoFinanciero, desc: 'Próximo módulo' },
  { titulo: 'Eficiencia logística', valor: '—', Icono: IconoReporte,    desc: 'Próximo módulo' },
  { titulo: 'Pedidos pendientes',   valor: '—', Icono: IconoPastel,     desc: 'Próximo módulo' },
  { titulo: 'Alertas críticas',     valor: '—', Icono: IconoAlerta,     desc: 'Próximo módulo' },
];

const modulos = [
  { nombre: 'Reportes de Inventario', desc: 'Niveles de stock y rotación de productos', Icono: IconoBascula   },
  { nombre: 'Reportes de Producción', desc: 'Indicadores de eficiencia productiva',     Icono: IconoChefHat   },
  { nombre: 'Dashboard Financiero',   desc: 'Costos, márgenes y proyecciones',          Icono: IconoFinanciero },
  { nombre: 'Configuración General',  desc: 'Parámetros de negocio y umbrales',         Icono: IconoConfig    },
];

export default function DashboardGerencia() {
  const sesion = obtenerSesion();

  return (
    <div className="space-y-6">

      <div className="rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7A2E2E 0%, #9B3D3D 100%)' }}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20"
          style={{ background: '#C9A84C' }} />
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
            style={{ background: 'rgba(201,168,76,0.25)', border: '1.5px solid rgba(201,168,76,0.5)' }}>
            <IconoFinanciero size={30} className="text-yellow-300" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Panel de Gerencia</h1>
            <p className="text-sm mt-0.5" style={{ color: '#F4C8C0' }}>
              Bienvenido, <strong>{sesion?.usuario.nombre}</strong>. Visualización y configuración de parámetros.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {tarjetas.map(({ titulo, valor, Icono, desc }) => (
          <div key={titulo} className="rounded-xl shadow-sm p-5 flex items-start gap-4 border"
            style={{ background: '#FFFAF8', borderColor: '#F4C8C0' }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: '#FBE8E4' }}>
              <Icono size={22} style={{ color: '#7A2E2E' }} />
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#7A2E2E' }}>{valor}</div>
              <div className="text-xs font-medium" style={{ color: '#5C1F1F' }}>{titulo}</div>
              <div className="text-xs" style={{ color: '#A84040' }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl shadow-sm p-6 border"
        style={{ background: '#FFFAF8', borderColor: '#F0E6DC' }}>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-5 rounded-full" style={{ background: '#C9A84C' }} />
          <h2 className="text-lg font-semibold" style={{ color: '#5C1F1F' }}>Módulos disponibles</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {modulos.map(({ nombre, desc, Icono }) => (
            <div key={nombre}
              className="rounded-xl p-4 flex items-start gap-3 border opacity-50 cursor-not-allowed"
              style={{ background: '#F5F0EC', borderColor: '#E0D5CE' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(0,0,0,0.06)' }}>
                <Icono size={20} style={{ color: '#9C8B85' }} />
              </div>
              <div>
                <div className="font-medium text-sm flex items-center gap-2" style={{ color: '#5C1F1F' }}>
                  {nombre}
                  <span className="text-xs px-1.5 py-0.5 rounded font-normal"
                    style={{ background: '#F0E6DC', color: '#A84040' }}>Próximamente</span>
                </div>
                <div className="text-xs mt-0.5" style={{ color: '#A84040' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl p-4 text-sm border"
        style={{ background: '#FBE8E4', borderColor: '#F4C8C0', color: '#5C1F1F' }}>
        <strong>Rol: Gerencia</strong> — Acceso a reportes y configuración de parámetros.
        No puede crear ni administrar usuarios del sistema.
      </div>
    </div>
  );
}

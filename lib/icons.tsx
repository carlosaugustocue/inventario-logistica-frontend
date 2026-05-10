// Librería de íconos SVG temáticos para Daluzed Pastelería
// Cada ícono acepta className y size para flexibilidad de uso

interface IconProps {
  className?: string;
  size?: number;
}

// ── Productos / Inventario ───────────────────────────────────────────────────

export function IconoPastel({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Base del pastel */}
      <rect x="3" y="14" width="18" height="7" rx="2" />
      {/* Capa del medio */}
      <rect x="5" y="10" width="14" height="4" rx="1" />
      {/* Capa superior */}
      <rect x="7" y="7" width="10" height="3" rx="1" />
      {/* Velitas */}
      <line x1="9"  y1="7" x2="9"  y2="4" />
      <line x1="12" y1="7" x2="12" y2="3" />
      <line x1="15" y1="7" x2="15" y2="4" />
      {/* Llamas */}
      <circle cx="9"  cy="3.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="2.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="3.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoCupcake({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Crema ondulada */}
      <path d="M7 11 C7 8 9 6 12 6 C15 6 17 8 17 11" />
      <path d="M9 8.5 C9 7 10 6 12 6 C14 6 15 7 15 8.5" />
      {/* Bolita de crema superior */}
      <circle cx="12" cy="5.5" r="1.5" />
      {/* Piruleta/decoración */}
      <line x1="12" y1="4" x2="12" y2="2" />
      <circle cx="12" cy="1.5" r="0.7" fill="currentColor" stroke="none" />
      {/* Cápsula */}
      <path d="M7 11 L6 18 Q6 19 7 19 L17 19 Q18 19 18 18 L17 11 Z" />
      {/* Líneas de la cápsula */}
      <line x1="9"  y1="11" x2="8.5" y2="19" strokeDasharray="1 1.5" />
      <line x1="12" y1="11" x2="12"  y2="19" strokeDasharray="1 1.5" />
      <line x1="15" y1="11" x2="15.5" y2="19" strokeDasharray="1 1.5" />
    </svg>
  );
}

export function IconoMangaPastelera({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Cuerpo de la manga */}
      <path d="M4 4 L16 8 L13 20 L4 4Z" />
      {/* Boquilla */}
      <path d="M13 20 L15 22 L17 20 L15 16 Z" />
      {/* Cremallera / cierre superior */}
      <line x1="4" y1="4" x2="16" y2="8" />
      <path d="M8 5.5 C10 3 14 4 16 8" fill="none" />
      {/* Crema saliendo */}
      <path d="M15 22 Q17 23 18 21" strokeDasharray="1 1" />
    </svg>
  );
}

export function IconoHorno({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Cuerpo del horno */}
      <rect x="2" y="6" width="20" height="16" rx="2" />
      {/* Panel superior con perillas */}
      <rect x="2" y="2" width="20" height="4" rx="1" />
      <circle cx="7"  cy="4" r="1" />
      <circle cx="12" cy="4" r="1" />
      <circle cx="17" cy="4" r="1" />
      {/* Ventana del horno */}
      <rect x="5" y="9" width="14" height="9" rx="1.5" />
      {/* Rejilla interior */}
      <line x1="5" y1="13.5" x2="19" y2="13.5" strokeDasharray="2 1" />
      {/* Manija */}
      <line x1="9" y1="22" x2="15" y2="22" strokeWidth={2.5} />
    </svg>
  );
}

export function IconoHarina({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Saco de harina */}
      <path d="M6 4 Q6 2 12 2 Q18 2 18 4 L19 18 Q19 21 12 21 Q5 21 5 18 Z" />
      {/* Amarre superior */}
      <path d="M9 4 Q12 6 15 4" />
      {/* Texto/etiqueta simulada */}
      <line x1="8"  y1="10" x2="16" y2="10" />
      <line x1="9"  y1="13" x2="15" y2="13" />
      <line x1="10" y1="16" x2="14" y2="16" />
    </svg>
  );
}

export function IconoBascula({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Base */}
      <rect x="3" y="19" width="18" height="2" rx="1" />
      {/* Pedestal */}
      <rect x="10" y="15" width="4" height="4" />
      {/* Plato */}
      <ellipse cx="12" cy="14" rx="8" ry="2" />
      {/* Pantalla / display */}
      <rect x="8" y="8" width="8" height="5" rx="1" />
      {/* Línea de aguja */}
      <line x1="12" y1="9" x2="14" y2="10.5" />
      <circle cx="12" cy="9" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoChefHat({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Gorro */}
      <path d="M6 14 C6 14 4 13 4 10 C4 7.5 6 6 8 6.5 C8.5 4.5 10 3 12 3 C14 3 15.5 4.5 16 6.5 C18 6 20 7.5 20 10 C20 13 18 14 18 14 Z" />
      {/* Banda del gorro */}
      <rect x="6" y="14" width="12" height="3" rx="0.5" />
      {/* Dobladillo */}
      <rect x="7" y="17" width="10" height="2" rx="0.5" />
    </svg>
  );
}

export function IconoDespacho({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Cuerpo del camión */}
      <rect x="1" y="8" width="14" height="10" rx="1" />
      {/* Cabina */}
      <path d="M15 12 L19 10 L22 12 L22 18 L15 18 Z" />
      {/* Ventana cabina */}
      <path d="M16 12 L19 10.5 L21 12 L21 14 L16 14 Z" fill="currentColor" fillOpacity="0.15" />
      {/* Ruedas */}
      <circle cx="5"  cy="18" r="2" />
      <circle cx="12" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      {/* Caja de producto (pastelería) */}
      <rect x="4" y="11" width="7" height="5" rx="0.5" />
      <line x1="7.5" y1="11" x2="7.5" y2="16" />
      <line x1="4"   y1="13.5" x2="11" y2="13.5" />
    </svg>
  );
}

export function IconoIngredientes({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Frasco/tarro */}
      <path d="M8 3 L16 3 L16 5 Q18 5 18 8 L18 19 Q18 21 12 21 Q6 21 6 19 L6 8 Q6 5 8 5 Z" />
      {/* Tapa */}
      <rect x="7" y="2" width="10" height="2" rx="1" />
      {/* Contenido (burbuja de líquido o polvo) */}
      <ellipse cx="12" cy="15" rx="4" ry="3" strokeDasharray="1 0.8" />
      <circle cx="10" cy="11" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13" cy="10" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="14" cy="12" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconoAlerta({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9"  x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth={2} />
    </svg>
  );
}

export function IconoEntrada({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M3 12 L21 12 M15 6 L21 12 L15 18" />
      <rect x="3" y="4" width="6" height="16" rx="1" />
    </svg>
  );
}

export function IconoSalida({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M21 12 L3 12 M9 6 L3 12 L9 18" />
      <rect x="15" y="4" width="6" height="16" rx="1" />
    </svg>
  );
}

export function IconoReporte({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <rect x="3" y="2" width="18" height="20" rx="2" />
      <line x1="7" y1="7"  x2="17" y2="7"  />
      <line x1="7" y1="11" x2="17" y2="11" />
      <line x1="7" y1="15" x2="13" y2="15" />
      {/* Mini gráfico de barras */}
      <rect x="13" y="13" width="2" height="4" fill="currentColor" fillOpacity="0.4" stroke="none" />
      <rect x="16" y="12" width="2" height="5" fill="currentColor" fillOpacity="0.4" stroke="none" />
    </svg>
  );
}

export function IconoUsuario({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20 C4 16 7.6 13 12 13 C16.4 13 20 16 20 20" />
    </svg>
  );
}

export function IconoUsuarios({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 20 C2 16.5 5 14 9 14 C13 14 16 16.5 16 20" />
      <circle cx="17" cy="8" r="3" />
      <path d="M17 14 C19.5 14 22 15.5 22 18" />
    </svg>
  );
}

export function IconoConfig({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function IconoBitacora({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M4 4 Q4 2 6 2 L18 2 Q20 2 20 4 L20 20 Q20 22 18 22 L6 22 Q4 22 4 20 Z" />
      {/* Espiral de libreta */}
      <line x1="4" y1="5"  x2="2" y2="5"  />
      <line x1="4" y1="9"  x2="2" y2="9"  />
      <line x1="4" y1="13" x2="2" y2="13" />
      <line x1="4" y1="17" x2="2" y2="17" />
      {/* Líneas de texto */}
      <line x1="8" y1="7"  x2="16" y2="7"  />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="16" x2="13" y2="16" />
      {/* Check mark */}
      <path d="M13 17 L15 19 L19 15" strokeWidth={2} />
    </svg>
  );
}

export function IconoCandado({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <rect x="5" y="11" width="14" height="11" rx="2" />
      <path d="M8 11 V7 A4 4 0 0 1 16 7 V11" />
      <circle cx="12" cy="16" r="1.5" />
      <line x1="12" y1="17.5" x2="12" y2="19.5" />
    </svg>
  );
}

export function IconoFinanciero({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Moneda */}
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7 L12 8.5 M12 15.5 L12 17" />
      <path d="M9.5 9.5 C9.5 8.5 10.5 8 12 8 C13.5 8 14.5 8.7 14.5 9.8 C14.5 11 13 11.5 12 12 C11 12.5 9.5 13 9.5 14.2 C9.5 15.4 10.5 16 12 16 C13.5 16 14.5 15.5 14.5 14.5" />
    </svg>
  );
}

export function IconoTurno({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  );
}

export function IconoConteo({ className = '', size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Portapapeles */}
      <rect x="4" y="4" width="16" height="18" rx="2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      {/* Checks de conteo */}
      <path d="M8 11 L10 13 L14 9" />
      <path d="M8 16 L10 18 L14 14" />
      <line x1="16" y1="11" x2="16" y2="11" strokeWidth={3} strokeLinecap="round" />
      <line x1="16" y1="16" x2="16" y2="16" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}

// ── Ícono principal de la marca (navbar / login) ────────────────────────────
export function IconoDaluzed({ className = '', size = 36 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none"
      stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      {/* Pastel de 2 pisos */}
      <rect x="5"  y="22" width="26" height="9"  rx="2.5" />
      <rect x="9"  y="16" width="18" height="6"  rx="2" />
      <rect x="12" y="12" width="12" height="4"  rx="1.5" />
      {/* Decoración ondulada en capa superior */}
      <path d="M12 14 Q15 12.5 18 14 Q21 15.5 24 14" strokeWidth={1} />
      {/* Velitas */}
      <line x1="16" y1="12" x2="16" y2="8" />
      <line x1="20" y1="12" x2="20" y2="7" />
      {/* Llamas */}
      <path d="M15.2 8 Q16 6.5 16.8 8 Q16 9 15.2 8Z" fill="currentColor" stroke="none" />
      <path d="M19.2 7 Q20 5.5 20.8 7 Q20 8 19.2 7Z" fill="currentColor" stroke="none" />
      {/* Corazón pequeño decorativo */}
      <path d="M17 27 C17 26 18 25.5 18 25.5 C18 25.5 19 26 19 27 C19 28 18 28.5 18 28.5 C18 28.5 17 28 17 27Z" fill="currentColor" strokeWidth={0.8} />
    </svg>
  );
}

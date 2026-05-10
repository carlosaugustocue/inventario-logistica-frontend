const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8001/api/v1';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
  rol: string;
  creado_en: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    usuario: Usuario;
    token: string;
    rol: string;
  };
}

// Guardar sesión en localStorage
export function guardarSesion(token: string, usuario: Usuario) {
  localStorage.setItem('token', token);
  localStorage.setItem('usuario', JSON.stringify(usuario));
}

// Obtener sesión guardada
export function obtenerSesion(): { token: string; usuario: Usuario } | null {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem('token');
  const usuario = localStorage.getItem('usuario');
  if (!token || !usuario) return null;
  return { token, usuario: JSON.parse(usuario) };
}

// Cerrar sesión
export function limpiarSesion() {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
}

// Login
export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Error al iniciar sesión');
  return data;
}

// Logout
export async function logout(token: string): Promise<void> {
  await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

// Ruta de dashboard según el rol
export function rutaPorRol(rol: string): string {
  const rutas: Record<string, string> = {
    administrador:         '/dashboard/administrador',
    gerencia:              '/dashboard/gerencia',
    jefe_produccion:       '/dashboard/jefe-produccion',
    encargado_inventarios: '/dashboard/encargado-inventarios',
  };
  return rutas[rol] ?? '/login';
}

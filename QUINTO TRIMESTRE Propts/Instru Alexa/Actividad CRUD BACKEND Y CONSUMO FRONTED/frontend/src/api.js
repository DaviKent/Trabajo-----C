export const API = 'http://localhost:3000/api';

export const limpiarNulos = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([clave, valor]) => [clave, valor ?? '']));

export const hoy = () => new Date().toISOString().slice(0, 10);

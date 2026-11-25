// Muestra un mensaje de confirmación (ok) o de error
export default function Mensaje({ mensaje }) {
  if (!mensaje) return null;
  return (
    <div className={`mensaje ${mensaje.tipo}`} role="status">
      {mensaje.texto}
    </div>
  );
}


import '../css/componentes.css'

export const saludar = (nombre) => {
  console.log('Creando etiqueta desde JS');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  h1.innerText = `Hola, ${nombre}`;
  h2.innerText = `${new Date()}`;
  document.body.append(h1);
  document.body.append(h2);
}
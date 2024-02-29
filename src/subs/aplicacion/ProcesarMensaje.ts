import { Mensaje } from '../dominio/Mensaje';

export class ProcesarMensaje {
  constructor() {}

  public async ejecutar(mensaje: Mensaje): Promise<void> {
    console.log('Procesando mensaje:', mensaje.contenido);
    const respuesta = await fetch('https://hexagonalapi2.onrender.com/api/animals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "name": "Animal Name",
        "weight": 100.5,
        "age": 5,
        "type": "Mammal"
      }),
    });


  }
}

import { ProcesarMensaje } from '../../aplicacion/procesarmensaje';
import { Mensaje } from '../../dominio/Mensaje';

export class MensajeControlador {
  constructor(private procesarMensaje: ProcesarMensaje) {}

  public async recibirMensaje(contenido: string): Promise<void> {
    await this.procesarMensaje.ejecutar(new Mensaje(contenido));
  }
}

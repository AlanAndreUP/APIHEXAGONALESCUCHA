import { ProcesarMensaje } from '../../aplicacion/ProcesarMensaje';
import { Mensaje } from '../../dominio/Mensaje';

export class MensajeControlador {
  constructor(private procesarMensaje: ProcesarMensaje) {}

  public async recibirMensaje(contenido: string): Promise<void> {
    await this.procesarMensaje.ejecutar(new Mensaje(contenido));
  }
}

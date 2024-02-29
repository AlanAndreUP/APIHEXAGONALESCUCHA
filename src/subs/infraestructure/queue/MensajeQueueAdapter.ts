import { connect, Channel, ConsumeMessage } from 'amqplib';
import { MensajeControlador } from '../controller/MensajeControlador';

export class MensajeQueueAdapter {
    private channel: Channel | null = null; 
  private queue: string = 'test'; 

  constructor(private mensajeControlador: MensajeControlador) {
    this.conectarYEscuchar();
  }

  private async conectarYEscuchar(): Promise<void> {
    try {
      const conn = await connect('amqp://papu:123456@34.195.235.24'); 
      this.channel = await conn.createChannel();
      await this.channel.assertQueue(this.queue, { durable: true });
      this.channel.consume(this.queue, (msg) => this.onMessage(msg), { noAck: true });
    } catch (error) {
      console.error('Error al conectar con RabbitMQ:', error);
    }
  }

  private onMessage(msg: ConsumeMessage | null): void {
    if (msg) {
      const contenido = msg.content.toString();
      console.log("Mensaje recibido de la cola:", contenido);
      this.mensajeControlador.recibirMensaje(contenido);
    }
  }
}

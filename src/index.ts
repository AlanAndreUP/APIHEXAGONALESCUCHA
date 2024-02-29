import express from 'express'
import { MensajeControlador } from './subs/infraestructure/controller/MensajeControlador';
import { ProcesarMensaje } from './subs/aplicacion/procesarmensaje';
import { MensajeQueueAdapter } from './subs/infraestructure/queue/MensajeQueueAdapter';
const app = express();
app.disable("x-powered-by");



const port = process.env.PORT || 4001
app.use(express.json())

const procesarMensaje = new ProcesarMensaje();
const mensajeControlador = new MensajeControlador(procesarMensaje);

const mensajeQueueAdapter = new MensajeQueueAdapter(mensajeControlador);

app.listen(port, () => {
    console.log('Server Servido en la puerta ' + port)
})

import { Controller, Get } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('escuela')
export class EscuelaController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: '127.0.0.1', port: 8879 }, // puerto del microservicio ms_escuela
    });
  }

  @Get('grupos')
  async getGrupos() {
    return await firstValueFrom(this.client.send({ cmd: 'get-grupos' }, {}));
  }

  @Get('materias')
  async getMaterias() {
    return await firstValueFrom(this.client.send({ cmd: 'get-materias' }, {}));
  }

  @Get('grupo-materia')
  async getGrupoMateria() {
    return await firstValueFrom(this.client.send({ cmd: 'get-grupo-materia' }, {}));
  }
}

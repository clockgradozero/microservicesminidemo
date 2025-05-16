import { Controller, Get, Query } from '@nestjs/common';
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

  @Get('get-grupo-by-id')
  async getGrupoByID() {
    return await firstValueFrom(this.client.send({ cmd: 'get-grupo-by-id' }, {}));
  }

  @Get('get-alumno-by-grupo')
  async getAlumnoByGrupo(@Query('id') id: number): Promise<number> {
    const result = this.client.send<number>({ cmd: 'get-alumno-by-grupo' }, Number(id));
    return await firstValueFrom(result); // esperar y obtener el resultado
  }

}

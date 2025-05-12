import { Controller, Get, Param } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('core')
export class CoreController {
  private clientCore: ClientProxy;
  private clientEscuela: ClientProxy;

  constructor() {
    this.clientCore = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: '127.0.0.1', port: 8878 }, // puerto del microservicio ms_core
    });
    
    this.clientEscuela = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: '127.0.0.1', port: 8879 }, // puerto del microservicio ms_core
    });
  }

  @Get('getRoles')
  async getRoles() {
    return await firstValueFrom(this.clientCore.send({ cmd: 'get-roles' }, {}));
  }

  @Get('getPersonas')
  async getPersonas() {
    return await firstValueFrom(this.clientCore.send({ cmd: 'get-personas' }, {}));
  }
  
  @Get('getAlumnos')
  async getAlumnos() {
    return await firstValueFrom(this.clientCore.send({ cmd: 'get-alumnos' }, {}));
  }

  @Get('alumno/:id')
  async getAlumnoConGrupo(@Param('id') id: number) {
    const alumno = await firstValueFrom(
      this.clientCore.send({ cmd: 'get-alumno-by-id' }, id),
    );

    const grupo = alumno.id_grupo
      ? await firstValueFrom(this.clientEscuela.send({ cmd: 'get-grupo-by-id' }, alumno.id_grupo))
      : null;

    return {
      ...alumno,
      grupo,
    };
  }

}

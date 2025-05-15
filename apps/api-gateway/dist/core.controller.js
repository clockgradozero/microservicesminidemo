"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let CoreController = class CoreController {
    constructor() {
        this.clientCore = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.TCP,
            options: { host: '127.0.0.1', port: 8878 }, // puerto del microservicio ms_core
        });
        this.clientEscuela = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.TCP,
            options: { host: '127.0.0.1', port: 8879 }, // puerto del microservicio ms_core
        });
    }
    async getRoles() {
        return await (0, rxjs_1.firstValueFrom)(this.clientCore.send({ cmd: 'get-roles' }, {}));
    }
    async getPersonas() {
        return await (0, rxjs_1.firstValueFrom)(this.clientCore.send({ cmd: 'get-personas' }, {}));
    }
    async getAlumnos() {
        return await (0, rxjs_1.firstValueFrom)(this.clientCore.send({ cmd: 'get-alumnos' }, {}));
    }
    async getAlumnoConGrupo(id) {
        const alumno = await (0, rxjs_1.firstValueFrom)(this.clientCore.send({ cmd: 'get-alumno-by-id' }, id));
        if (!alumno) {
            return { error: `Alumno con id ${id} no encontrado` };
        }
        const grupo = alumno.id_grupo
            ? await (0, rxjs_1.firstValueFrom)(this.clientEscuela.send({ cmd: 'get-grupo-by-id' }, alumno.id_grupo))
            : null;
        return Object.assign(Object.assign({}, alumno), { grupo });
    }
};
exports.CoreController = CoreController;
__decorate([
    (0, common_1.Get)('getRoles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "getRoles", null);
__decorate([
    (0, common_1.Get)('getPersonas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "getPersonas", null);
__decorate([
    (0, common_1.Get)('getAlumnos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "getAlumnos", null);
__decorate([
    (0, common_1.Get)('alumno/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CoreController.prototype, "getAlumnoConGrupo", null);
exports.CoreController = CoreController = __decorate([
    (0, common_1.Controller)('core'),
    __metadata("design:paramtypes", [])
], CoreController);
//# sourceMappingURL=core.controller.js.map
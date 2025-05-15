"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rol_entity_1 = require("./rol/rol.entity");
const persona_entity_1 = require("./persona/persona.entity");
const alumno_entity_1 = require("./alumno/alumno.entity");
const rol_controller_1 = require("./rol/rol.controller");
const persona_controller_1 = require("./persona/persona.controller");
const alumno_controller_1 = require("./alumno/alumno.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [rol_controller_1.RolController, persona_controller_1.PersonaController, alumno_controller_1.AlumnoController],
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '212.227.239.166',
                port: 5432,
                username: 'demonest',
                password: 'D3m0N3st',
                database: 'ms_core',
                schema: 'cor',
                synchronize: false,
                autoLoadEntities: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([rol_entity_1.Rol, persona_entity_1.Persona, alumno_entity_1.Alumno]),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
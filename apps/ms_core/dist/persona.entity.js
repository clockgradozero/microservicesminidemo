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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const typeorm_1 = require("typeorm");
const rol_entity_1 = require("./rol.entity");
let Persona = class Persona {
};
exports.Persona = Persona;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Persona.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Persona.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => rol_entity_1.Rol, rol => rol.idRol),
    __metadata("design:type", Array)
], Persona.prototype, "roles", void 0);
exports.Persona = Persona = __decorate([
    (0, typeorm_1.Entity)({ schema: 'cor', name: 'persona' }) // 👈 nombre real de la tabla
], Persona);
//# sourceMappingURL=persona.entity.js.map
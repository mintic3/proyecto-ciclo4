"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sucursal = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const empresa_model_1 = require("./empresa.model");
const empleado_model_1 = require("./empleado.model");
const cliente_model_1 = require("./cliente.model");
let Sucursal = class Sucursal extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "id_sucursal", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "direcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Sucursal.prototype, "telefono", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "adminstrador", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "user", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "empresaId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasOne)(() => empresa_model_1.Empresa),
    tslib_1.__metadata("design:type", empresa_model_1.Empresa)
], Sucursal.prototype, "empresa", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => empleado_model_1.Empleado),
    tslib_1.__metadata("design:type", Array)
], Sucursal.prototype, "empleados", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "empleadoId", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => cliente_model_1.Cliente),
    tslib_1.__metadata("design:type", Array)
], Sucursal.prototype, "clientes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Sucursal.prototype, "clienteId", void 0);
Sucursal = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Sucursal);
exports.Sucursal = Sucursal;
//# sourceMappingURL=sucursal.model.js.map
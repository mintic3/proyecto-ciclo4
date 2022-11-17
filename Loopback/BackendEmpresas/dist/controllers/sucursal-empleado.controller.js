"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalEmpleadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SucursalEmpleadoController = class SucursalEmpleadoController {
    constructor(sucursalRepository) {
        this.sucursalRepository = sucursalRepository;
    }
    async find(id, filter) {
        return this.sucursalRepository.empleados(id).find(filter);
    }
    async create(id, empleado) {
        return this.sucursalRepository.empleados(id).create(empleado);
    }
    async patch(id, empleado, where) {
        return this.sucursalRepository.empleados(id).patch(empleado, where);
    }
    async delete(id, where) {
        return this.sucursalRepository.empleados(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/sucursals/{id}/empleados', {
        responses: {
            '200': {
                description: 'Array of Sucursal has many Empleado',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Empleado) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalEmpleadoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/sucursals/{id}/empleados', {
        responses: {
            '200': {
                description: 'Sucursal model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, {
                    title: 'NewEmpleadoInSucursal',
                    exclude: ['id_empleado'],
                    optional: ['sucursalId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalEmpleadoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sucursals/{id}/empleados', {
        responses: {
            '200': {
                description: 'Sucursal.Empleado PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Empleado))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalEmpleadoController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sucursals/{id}/empleados', {
        responses: {
            '200': {
                description: 'Sucursal.Empleado DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Empleado))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalEmpleadoController.prototype, "delete", null);
SucursalEmpleadoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SucursalRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SucursalRepository])
], SucursalEmpleadoController);
exports.SucursalEmpleadoController = SucursalEmpleadoController;
//# sourceMappingURL=sucursal-empleado.controller.js.map
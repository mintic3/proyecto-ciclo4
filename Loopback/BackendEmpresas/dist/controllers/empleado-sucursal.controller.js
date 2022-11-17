"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoSucursalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpleadoSucursalController = class EmpleadoSucursalController {
    constructor(empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }
    async get(id, filter) {
        return this.empleadoRepository.sucursal(id).get(filter);
    }
    async create(id, sucursal) {
        return this.empleadoRepository.sucursal(id).create(sucursal);
    }
    async patch(id, sucursal, where) {
        return this.empleadoRepository.sucursal(id).patch(sucursal, where);
    }
    async delete(id, where) {
        return this.empleadoRepository.sucursal(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/empleados/{id}/sucursal', {
        responses: {
            '200': {
                description: 'Empleado has one Sucursal',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal),
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
], EmpleadoSucursalController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/empleados/{id}/sucursal', {
        responses: {
            '200': {
                description: 'Empleado model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal, {
                    title: 'NewSucursalInEmpleado',
                    exclude: ['id_sucursal'],
                    optional: ['empleadoId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoSucursalController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empleados/{id}/sucursal', {
        responses: {
            '200': {
                description: 'Empleado.Sucursal PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Sucursal))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoSucursalController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/empleados/{id}/sucursal', {
        responses: {
            '200': {
                description: 'Empleado.Sucursal DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Sucursal))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoSucursalController.prototype, "delete", null);
EmpleadoSucursalController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EmpleadoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmpleadoRepository])
], EmpleadoSucursalController);
exports.EmpleadoSucursalController = EmpleadoSucursalController;
//# sourceMappingURL=empleado-sucursal.controller.js.map
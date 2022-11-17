"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SucursalClienteController = class SucursalClienteController {
    constructor(sucursalRepository) {
        this.sucursalRepository = sucursalRepository;
    }
    async find(id, filter) {
        return this.sucursalRepository.clientes(id).find(filter);
    }
    async create(id, cliente) {
        return this.sucursalRepository.clientes(id).create(cliente);
    }
    async patch(id, cliente, where) {
        return this.sucursalRepository.clientes(id).patch(cliente, where);
    }
    async delete(id, where) {
        return this.sucursalRepository.clientes(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/sucursals/{id}/clientes', {
        responses: {
            '200': {
                description: 'Array of Sucursal has many Cliente',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Cliente) },
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
], SucursalClienteController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/sucursals/{id}/clientes', {
        responses: {
            '200': {
                description: 'Sucursal model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, {
                    title: 'NewClienteInSucursal',
                    exclude: ['id_cliente'],
                    optional: ['sucursalId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalClienteController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sucursals/{id}/clientes', {
        responses: {
            '200': {
                description: 'Sucursal.Cliente PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cliente, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Cliente))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalClienteController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sucursals/{id}/clientes', {
        responses: {
            '200': {
                description: 'Sucursal.Cliente DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Cliente))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalClienteController.prototype, "delete", null);
SucursalClienteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SucursalRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SucursalRepository])
], SucursalClienteController);
exports.SucursalClienteController = SucursalClienteController;
//# sourceMappingURL=sucursal-cliente.controller.js.map
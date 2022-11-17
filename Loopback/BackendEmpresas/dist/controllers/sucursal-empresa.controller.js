"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalEmpresaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SucursalEmpresaController = class SucursalEmpresaController {
    constructor(sucursalRepository) {
        this.sucursalRepository = sucursalRepository;
    }
    async get(id, filter) {
        return this.sucursalRepository.empresa(id).get(filter);
    }
    async create(id, empresa) {
        return this.sucursalRepository.empresa(id).create(empresa);
    }
    async patch(id, empresa, where) {
        return this.sucursalRepository.empresa(id).patch(empresa, where);
    }
    async delete(id, where) {
        return this.sucursalRepository.empresa(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/sucursals/{id}/empresa', {
        responses: {
            '200': {
                description: 'Sucursal has one Empresa',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa),
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
], SucursalEmpresaController.prototype, "get", null);
tslib_1.__decorate([
    (0, rest_1.post)('/sucursals/{id}/empresa', {
        responses: {
            '200': {
                description: 'Sucursal model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, {
                    title: 'NewEmpresaInSucursal',
                    exclude: ['id_empresa'],
                    optional: ['sucursalId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalEmpresaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sucursals/{id}/empresa', {
        responses: {
            '200': {
                description: 'Sucursal.Empresa PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Empresa))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalEmpresaController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sucursals/{id}/empresa', {
        responses: {
            '200': {
                description: 'Sucursal.Empresa DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Empresa))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalEmpresaController.prototype, "delete", null);
SucursalEmpresaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SucursalRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SucursalRepository])
], SucursalEmpresaController);
exports.SucursalEmpresaController = SucursalEmpresaController;
//# sourceMappingURL=sucursal-empresa.controller.js.map
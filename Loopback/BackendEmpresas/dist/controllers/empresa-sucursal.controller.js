"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaSucursalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpresaSucursalController = class EmpresaSucursalController {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async find(id, filter) {
        return this.empresaRepository.sucursals(id).find(filter);
    }
    async create(id, sucursal) {
        return this.empresaRepository.sucursals(id).create(sucursal);
    }
    async patch(id, sucursal, where) {
        return this.empresaRepository.sucursals(id).patch(sucursal, where);
    }
    async delete(id, where) {
        return this.empresaRepository.sucursals(id).delete(where);
    }
};
tslib_1.__decorate([
    (0, rest_1.get)('/empresas/{id}/sucursals', {
        responses: {
            '200': {
                description: 'Array of Empresa has many Sucursal',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Sucursal) },
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
], EmpresaSucursalController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.post)('/empresas/{id}/sucursals', {
        responses: {
            '200': {
                description: 'Empresa model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal, {
                    title: 'NewSucursalInEmpresa',
                    exclude: ['id_sucursal'],
                    optional: ['empresaId']
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaSucursalController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empresas/{id}/sucursals', {
        responses: {
            '200': {
                description: 'Empresa.Sucursal PATCH success count',
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
], EmpresaSucursalController.prototype, "patch", null);
tslib_1.__decorate([
    (0, rest_1.del)('/empresas/{id}/sucursals', {
        responses: {
            '200': {
                description: 'Empresa.Sucursal DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Sucursal))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaSucursalController.prototype, "delete", null);
EmpresaSucursalController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EmpresaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmpresaRepository])
], EmpresaSucursalController);
exports.EmpresaSucursalController = EmpresaSucursalController;
//# sourceMappingURL=empresa-sucursal.controller.js.map
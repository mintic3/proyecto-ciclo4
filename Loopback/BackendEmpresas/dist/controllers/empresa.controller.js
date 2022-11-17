"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpresaController = class EmpresaController {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async create(empresa) {
        return this.empresaRepository.create(empresa);
    }
    async count(where) {
        return this.empresaRepository.count(where);
    }
    async find(filter) {
        return this.empresaRepository.find(filter);
    }
    async updateAll(empresa, where) {
        return this.empresaRepository.updateAll(empresa, where);
    }
    async findById(id, filter) {
        return this.empresaRepository.findById(id, filter);
    }
    async updateById(id, empresa) {
        await this.empresaRepository.updateById(id, empresa);
    }
    async replaceById(id, empresa) {
        await this.empresaRepository.replaceById(id, empresa);
    }
    async deleteById(id) {
        await this.empresaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Empresa model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, {
                    title: 'NewEmpresa',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empresas/count'),
    (0, rest_1.response)(200, {
        description: 'Empresa model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Empresa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Array of Empresa model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Empresa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empresas'),
    (0, rest_1.response)(200, {
        description: 'Empresa PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Empresa)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Empresa, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empresas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Empresa model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Empresa, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empresa, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Empresa]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Empresa]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/empresas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empresa DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpresaController.prototype, "deleteById", null);
EmpresaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EmpresaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmpresaRepository])
], EmpresaController);
exports.EmpresaController = EmpresaController;
//# sourceMappingURL=empresa.controller.js.map
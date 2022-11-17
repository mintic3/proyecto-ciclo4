"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SucursalController = class SucursalController {
    constructor(sucursalRepository) {
        this.sucursalRepository = sucursalRepository;
    }
    async create(sucursal) {
        return this.sucursalRepository.create(sucursal);
    }
    async count(where) {
        return this.sucursalRepository.count(where);
    }
    async find(filter) {
        return this.sucursalRepository.find(filter);
    }
    async updateAll(sucursal, where) {
        return this.sucursalRepository.updateAll(sucursal, where);
    }
    async findById(id, filter) {
        return this.sucursalRepository.findById(id, filter);
    }
    async updateById(id, sucursal) {
        await this.sucursalRepository.updateById(id, sucursal);
    }
    async replaceById(id, sucursal) {
        await this.sucursalRepository.replaceById(id, sucursal);
    }
    async deleteById(id) {
        await this.sucursalRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/sucursals'),
    (0, rest_1.response)(200, {
        description: 'Sucursal model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal, {
                    title: 'NewSucursal',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sucursals/count'),
    (0, rest_1.response)(200, {
        description: 'Sucursal model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Sucursal)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sucursals'),
    (0, rest_1.response)(200, {
        description: 'Array of Sucursal model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Sucursal, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Sucursal)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sucursals'),
    (0, rest_1.response)(200, {
        description: 'Sucursal PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Sucursal)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Sucursal, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/sucursals/{id}'),
    (0, rest_1.response)(200, {
        description: 'Sucursal model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Sucursal, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/sucursals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sucursal PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Sucursal, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Sucursal]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/sucursals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sucursal PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Sucursal]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/sucursals/{id}'),
    (0, rest_1.response)(204, {
        description: 'Sucursal DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SucursalController.prototype, "deleteById", null);
SucursalController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SucursalRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SucursalRepository])
], SucursalController);
exports.SucursalController = SucursalController;
//# sourceMappingURL=sucursal.controller.js.map
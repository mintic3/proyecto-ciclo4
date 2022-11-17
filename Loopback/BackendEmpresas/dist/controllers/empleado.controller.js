"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpleadoController = class EmpleadoController {
    constructor(empleadoRepository) {
        this.empleadoRepository = empleadoRepository;
    }
    async create(empleado) {
        return this.empleadoRepository.create(empleado);
    }
    async count(where) {
        return this.empleadoRepository.count(where);
    }
    async find(filter) {
        return this.empleadoRepository.find(filter);
    }
    async updateAll(empleado, where) {
        return this.empleadoRepository.updateAll(empleado, where);
    }
    async findById(id, filter) {
        return this.empleadoRepository.findById(id, filter);
    }
    async updateById(id, empleado) {
        await this.empleadoRepository.updateById(id, empleado);
    }
    async replaceById(id, empleado) {
        await this.empleadoRepository.replaceById(id, empleado);
    }
    async deleteById(id) {
        await this.empleadoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/empleados'),
    (0, rest_1.response)(200, {
        description: 'Empleado model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, {
                    title: 'NewEmpleado',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empleados/count'),
    (0, rest_1.response)(200, {
        description: 'Empleado model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Empleado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empleados'),
    (0, rest_1.response)(200, {
        description: 'Array of Empleado model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Empleado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empleados'),
    (0, rest_1.response)(200, {
        description: 'Empleado PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Empleado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Empleado, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empleados/{id}'),
    (0, rest_1.response)(200, {
        description: 'Empleado model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Empleado, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empleados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleado PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleado, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Empleado]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/empleados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleado PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Empleado]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/empleados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleado DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleadoController.prototype, "deleteById", null);
EmpleadoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EmpleadoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmpleadoRepository])
], EmpleadoController);
exports.EmpleadoController = EmpleadoController;
//# sourceMappingURL=empleado.controller.js.map
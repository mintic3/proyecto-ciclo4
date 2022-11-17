"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SucursalRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let SucursalRepository = class SucursalRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, empresaRepositoryGetter, empleadoRepositoryGetter, clienteRepositoryGetter) {
        super(models_1.Sucursal, dataSource);
        this.empresaRepositoryGetter = empresaRepositoryGetter;
        this.empleadoRepositoryGetter = empleadoRepositoryGetter;
        this.clienteRepositoryGetter = clienteRepositoryGetter;
        this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter);
        this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
        this.empleados = this.createHasManyRepositoryFactoryFor('empleados', empleadoRepositoryGetter);
        this.registerInclusionResolver('empleados', this.empleados.inclusionResolver);
        this.empresa = this.createHasOneRepositoryFactoryFor('empresa', empresaRepositoryGetter);
        this.registerInclusionResolver('empresa', this.empresa.inclusionResolver);
    }
};
SucursalRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongoconexion')),
    tslib_1.__param(1, repository_1.repository.getter('EmpresaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('EmpleadoRepository')),
    tslib_1.__param(3, repository_1.repository.getter('ClienteRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoconexionDataSource, Function, Function, Function])
], SucursalRepository);
exports.SucursalRepository = SucursalRepository;
//# sourceMappingURL=sucursal.repository.js.map
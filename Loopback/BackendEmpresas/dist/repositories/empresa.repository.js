"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EmpresaRepository = class EmpresaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, sucursalRepositoryGetter) {
        super(models_1.Empresa, dataSource);
        this.sucursalRepositoryGetter = sucursalRepositoryGetter;
        this.sucursals = this.createHasManyRepositoryFactoryFor('sucursals', sucursalRepositoryGetter);
        this.registerInclusionResolver('sucursals', this.sucursals.inclusionResolver);
    }
};
EmpresaRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.mongoconexion')),
    tslib_1.__param(1, repository_1.repository.getter('SucursalRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MongoconexionDataSource, Function])
], EmpresaRepository);
exports.EmpresaRepository = EmpresaRepository;
//# sourceMappingURL=empresa.repository.js.map
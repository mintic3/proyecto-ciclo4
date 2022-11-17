"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoconexionDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mongoconexion',
    connector: 'mongodb',
    url: 'mongodb+srv://ADMIN:ADMIN@clusterproyecfinal4.ccx8cgd.mongodb.net/ClusterProyecFinal4',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: '',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongoconexionDataSource = class MongoconexionDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongoconexionDataSource.dataSourceName = 'mongoconexion';
MongoconexionDataSource.defaultConfig = config;
MongoconexionDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.mongoconexion', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongoconexionDataSource);
exports.MongoconexionDataSource = MongoconexionDataSource;
//# sourceMappingURL=mongoconexion.datasource.js.map
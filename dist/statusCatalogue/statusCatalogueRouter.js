"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catalogueRouter = void 0;
const hono_1 = require("hono");
const statusCatalogueController_1 = require("./statusCatalogueController");
exports.catalogueRouter = new hono_1.Hono();
exports.catalogueRouter.get('/catalogue', statusCatalogueController_1.getCatalogues);
exports.catalogueRouter.get('/catalogue/:id', statusCatalogueController_1.getCatalogue);
exports.catalogueRouter.post('/catalogue', statusCatalogueController_1.createCatalogue);
exports.catalogueRouter.post('/catalogue/:id', statusCatalogueController_1.updateCatalogue);
exports.catalogueRouter.delete('/catalogue', statusCatalogueController_1.deleteCatalogue);

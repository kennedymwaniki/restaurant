"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
// import { listCities } from "./cityController";
const cityController_1 = require("./cityController");
exports.cityRouter = new hono_1.Hono();
exports.cityRouter.get("/cities", cityController_1.listCities);
exports.cityRouter.get("/cities/:id", cityController_1.getCity);
exports.cityRouter.post("/cities", cityController_1.createCity);
exports.cityRouter.delete("/cities/:id", cityController_1.deleteCity);
// cityRouter.get("/cities/:id", listCities);
exports.cityRouter.put("/cities/:id", cityController_1.updateCity);

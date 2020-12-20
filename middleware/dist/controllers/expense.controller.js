"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseController = void 0;
const common_1 = require("@nestjs/common");
const expense_entity_1 = require("../entities/expense.entity");
const expense_service_1 = require("../services/expense.service");
let ExpenseController = class ExpenseController {
    constructor(expenseService) {
        this.expenseService = expenseService;
    }
    getAll() {
        return this.expenseService.getAll();
    }
    getByDate(requestDate) {
        return this.expenseService.getByDate(requestDate);
    }
};
__decorate([
    common_1.Get("/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExpenseController.prototype, "getAll", null);
__decorate([
    common_1.Get("/date"),
    __param(0, common_1.Param('requestDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getByDate", null);
ExpenseController = __decorate([
    common_1.Controller("/expenses"),
    __metadata("design:paramtypes", [expense_service_1.ExpenseService])
], ExpenseController);
exports.ExpenseController = ExpenseController;
//# sourceMappingURL=expense.controller.js.map
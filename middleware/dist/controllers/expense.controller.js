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
        return this.expenseService.getByDate(requestDate).getMany();
    }
    getByMinAmount(minAmount) {
        return this.expenseService.getByLeastAmount(minAmount).getMany();
    }
    getByDescription(description) {
        return this.expenseService.getByDescription(description).getMany();
    }
    addNewExpense(expenseEntity) {
        return this.addNewExpense(expenseEntity);
    }
};
__decorate([
    common_1.Get("/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExpenseController.prototype, "getAll", null);
__decorate([
    common_1.Get("/date/:requestDate"),
    __param(0, common_1.Param('requestDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getByDate", null);
__decorate([
    common_1.Get("/min/amount/:minAmount"),
    __param(0, common_1.Param('minAmount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getByMinAmount", null);
__decorate([
    common_1.Get("/description/:description"),
    __param(0, common_1.Param("description")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "getByDescription", null);
__decorate([
    common_1.Post("add_expense"),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expense_entity_1.ExpenseEntity]),
    __metadata("design:returntype", void 0)
], ExpenseController.prototype, "addNewExpense", null);
ExpenseController = __decorate([
    common_1.Controller("/expenses"),
    __metadata("design:paramtypes", [expense_service_1.ExpenseService])
], ExpenseController);
exports.ExpenseController = ExpenseController;
//# sourceMappingURL=expense.controller.js.map
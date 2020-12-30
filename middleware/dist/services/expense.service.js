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
exports.ExpenseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const expense_entity_1 = require("../entities/expense.entity");
const expensetype_entity_1 = require("../entities/expensetype.entity");
const typeorm_2 = require("typeorm");
let ExpenseService = class ExpenseService {
    constructor(expenseRepository, expenseTypeRepository) {
        this.expenseRepository = expenseRepository;
        this.expenseTypeRepository = expenseTypeRepository;
    }
    getAll() {
        return this.expenseRepository.find();
    }
    getByDate(requestDate) {
        return this.expenseRepository.createQueryBuilder()
            .where("expense.date = :date", { date: requestDate });
    }
    getByIdSingle(id) {
        return this.expenseRepository.findOne(id);
    }
    getById(id) {
        return this.expenseRepository.findByIds(id);
    }
    getByLeastAmount(minAmount) {
        return this.expenseRepository.createQueryBuilder()
            .where("expense_amount >= :minAmount", { minAmount: minAmount });
    }
    getByDescription(description) {
        return this.expenseRepository.createQueryBuilder()
            .where("expense_description = :description", { description: description });
    }
    addExpenseObject(expenseEntity) {
        this.expenseRepository.save(expenseEntity);
    }
    async deleteExpenseObjekt(expenseEntity) {
        console.log("service called");
        await this.expenseRepository.delete(expenseEntity.getExpenseId);
    }
    getAlltypes() {
        return this.expenseTypeRepository.find();
    }
    getTypeById(id) {
        return this.expenseTypeRepository.findByIds(id);
    }
    addExpenseType(expenseTypeEntity) {
        this.expenseTypeRepository.save(expenseTypeEntity);
    }
};
ExpenseService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(expense_entity_1.ExpenseEntity)),
    __param(1, typeorm_1.InjectRepository(expensetype_entity_1.ExpenseTypeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ExpenseService);
exports.ExpenseService = ExpenseService;
//# sourceMappingURL=expense.service.js.map
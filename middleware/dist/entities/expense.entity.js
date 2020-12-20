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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseEntity = void 0;
const typeorm_1 = require("typeorm");
let ExpenseEntity = class ExpenseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", String)
], ExpenseEntity.prototype, "expenseId", void 0);
__decorate([
    typeorm_1.Column({ name: "expense_amount" }),
    __metadata("design:type", Number)
], ExpenseEntity.prototype, "expenseAmount", void 0);
__decorate([
    typeorm_1.Column({ name: "expense_description" }),
    __metadata("design:type", String)
], ExpenseEntity.prototype, "expenseDescription", void 0);
__decorate([
    typeorm_1.Column({ name: "expense_date", type: "date" }),
    __metadata("design:type", Date)
], ExpenseEntity.prototype, "expenseDate", void 0);
ExpenseEntity = __decorate([
    typeorm_1.Entity("expense")
], ExpenseEntity);
exports.ExpenseEntity = ExpenseEntity;
//# sourceMappingURL=expense.entity.js.map
export declare class ExpenseEntity {
    private expenseId;
    private expenseAmount;
    private expenseDescription;
    private expenseDate;
    private expenseTypeEntity;
    private expenseTypeId;
    set setExpenseDescription(description: string);
    set setExpenseAmount(amount: number);
    set setExpenseDate(date: Date);
    get getExpenseId(): string;
}

// --- DRIZZLE TYPES ---
export type Expense = {
  id: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  amount: number;
  category_id: string;
  day_id: string;
};
export type ExpenseCategory = {
  name: string;
  id: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  color:
    | "rose"
    | "pink"
    | "fuchsia"
    | "purple"
    | "violet"
    | "indigo"
    | "blue"
    | "sky"
    | "cyan"
    | "teal"
    | "emerald"
    | "green"
    | "lime"
    | "yellow"
    | "amber"
    | "orange"
    | "red"
    | "slate";
};
export type Day = {
  day: number;
  id: string;
  user_id: string;
  created_at: Date;
  month: number;
  year: number;
};
// ---

export type ExpenseCategoryWithBaseColor = ExpenseCategory;
export type ExpenseCategoryWithExpenses = ExpenseCategoryWithBaseColor & {
  expenses: Array<Expense>;
};

export type DayWithExpenses = Day & { expenses: Array<Expense> };
export type GetExpensesOverDateRangeRet = {
  days: Array<DayWithExpenses>;
  expense_categories: Array<ExpenseCategoryWithBaseColor>;
};

import { ReactNode } from "react";
import { ICurrencyOption, IExpense } from "../../types/types";

export interface IChildrenContext {
  children: ReactNode;
}

export interface IExpenseContext {
  expenses: IExpense[];
  setNewExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}

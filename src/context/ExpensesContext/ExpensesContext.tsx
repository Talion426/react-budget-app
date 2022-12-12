import { useState, createContext, useContext } from "react";
import { IChildrenContext, IExpenseContext } from "../";

const ExpensesContext = createContext<IExpenseContext>({} as IExpenseContext);

export const useExpensesContext = () => useContext(ExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpenseContext>(() => ({
    expenses: [],
    setNewExpense: (expense) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, expense],
      }));
    },
    deleteExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesContext;
};
export const ExpensesContextProvider = ({ children }: IChildrenContext) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};

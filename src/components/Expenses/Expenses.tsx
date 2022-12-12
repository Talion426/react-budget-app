import { useEffect, useState } from "react";
import { useDebounce, useInput } from "../../hooks";
import { useExpensesContext } from "../../context";
import { IExpense } from "../../types/types";
import { Search } from "../Search/Search";
import { Title } from "../Title/Title";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>(expenses);
  const debounceValue = useDebounce<string>(search.value, 700);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((exp) => exp.name.toLowerCase().includes(debounceValue.toLowerCase())),
    );
  }, [debounceValue, expenses]);

  return (
    <StyledExpenses>
      <Title label="expenses" />
      <Search {...search} />
      <ExpensesList expenseList={filteredExpenses} />
    </StyledExpenses>
  );
};

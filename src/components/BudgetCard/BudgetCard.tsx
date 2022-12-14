import { useEffect, useState } from "react";
import { useBudgetContext, useCurrencyContext } from "../../context";
import { useInput, useToggle } from "../../hooks";
import { StyledBudgetCard, StyledButton, StyledInput, StyledText } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";

export const BudgetCard = () => {
  const { setBudget, budget } = useBudgetContext();
  const { currentCurrency } = useCurrencyContext();
  const inputBudget = useInput();
  const [isBudgetActive, toogleBudgetActive] = useToggle();
  const [isDisableSave, setDisableSave] = useState<boolean>(true);

  const handleSave = () => {
    setBudget(+inputBudget.value);
    toogleBudgetActive();
  };

  const handleEdit = () => toogleBudgetActive();

  const debounceBudget = useDebounce(inputBudget.value, 500);

  useEffect(
    () => (debounceBudget && +debounceBudget > 0 ? setDisableSave(false) : setDisableSave(true)),
    [debounceBudget],
  );

  return (
    <StyledBudgetCard>
      {!isBudgetActive ? (
        <>
          <StyledInput {...inputBudget} placeholder="Enter Budget ..." type="number" />
          <StyledButton onClick={handleSave} disabled={isDisableSave}>
            Save
          </StyledButton>
        </>
      ) : (
        <>
          <StyledText>
            Budget: {currentCurrency.value}
            {budget}
          </StyledText>
          <StyledButton onClick={handleEdit}>Edit</StyledButton>
        </>
      )}
    </StyledBudgetCard>
  );
};

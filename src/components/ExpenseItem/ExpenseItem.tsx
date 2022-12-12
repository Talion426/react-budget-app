import { ReactComponent as DeleteIcon } from "../../assets/icons/deleteIcon.svg";
import { useCurrencyContext, useExpensesContext } from "../../context";
import { StyledItemBadge, StyledDeleteButton, StyledItemText, StyledListItem } from "./styles";

interface IProps {
  name: string;
  price: number;
  id: string;
}

export const ExpenseItem = ({ name, price, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { deleteExpense } = useExpensesContext();
  const handleDelete = () => {
    deleteExpense(id);
  };

  return (
    <StyledListItem>
      <StyledItemText>{name}</StyledItemText>
      <StyledItemBadge>
        {currentCurrency.value}
        {price}
      </StyledItemBadge>
      <StyledDeleteButton>
        <DeleteIcon onClick={handleDelete} />
      </StyledDeleteButton>
    </StyledListItem>
  );
};

import { Wrapper } from "./wrapper";
import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";

export const App = () => {
  return (
    <Wrapper>
      <Budget />
      <Expenses />
    </Wrapper>
  );
};

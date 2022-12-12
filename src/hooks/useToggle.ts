import { useState } from "react";

export const useToggle = (initValue: boolean = false): [value: boolean, toggle: () => void] => {
  const [value, setValue] = useState<boolean>(initValue);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
};

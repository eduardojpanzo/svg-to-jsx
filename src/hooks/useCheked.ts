import { useState } from "react";

export default function useCheked() {
  const [checkedItems, setCheckedItems] = useState({
    memo: false,
    typescript: false,
    singleQuote: false,
    semi: true,
  });

  const allChecked = Object.values(checkedItems).every(Boolean);
  const isIndeterminate =
    Object.values(checkedItems).some(Boolean) && !allChecked;

  return {
    checkedItems,
    setCheckedItems,
    allChecked,
    isIndeterminate,
  };
}

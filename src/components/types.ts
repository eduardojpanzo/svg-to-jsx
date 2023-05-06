import React, { ReactNode, InputHTMLAttributes } from "react";

type InputChexkBoxType = InputHTMLAttributes<HTMLInputElement>;

export type CheckBoxProps = {
  children?: ReactNode;
  isIndeterminate?: boolean;
} & InputChexkBoxType;

export interface SidebarProps {
  checkedItems: {
    memo: boolean;
    typescript: boolean;
    singleQuote: boolean;
    semi: boolean;
  };

  setCheckedItems: React.Dispatch<
    React.SetStateAction<{
      memo: boolean;
      typescript: boolean;
      singleQuote: boolean;
      semi: boolean;
    }>
  >;

  allChecked: boolean;
  isIndeterminate: boolean;
}

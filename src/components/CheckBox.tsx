import React, { useEffect, useRef } from "react";
import { CheckBoxProps } from "./types";

export function CheckBox({
  isIndeterminate,
  children,
  ...rest
}: CheckBoxProps) {
  const checkbox = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate!;
    }
  }, [isIndeterminate]);

  return (
    <div className="flex items-center gap-2 min-h-[1.5rem] my-1">
      <input
        className="relative h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] indeterminate:after:absolute indeterminate:after:ml-[0.2rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] indeterminate:after:border-[0.05rem] indeterminate:after:border-solid indeterminate:after:border-white hover:cursor-pointer"
        type="checkbox"
        ref={checkbox}
        {...rest}
      />
      <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer"
        htmlFor="id"
      >
        {children}
      </label>
    </div>
  );
}

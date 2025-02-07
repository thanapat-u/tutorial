import { forwardRef } from "react";

export type CheckboxProps = {
  name: string;
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, name, onChange }: CheckboxProps, ref) => {
    return (
      <label htmlFor={name} className="flex gap-2 w-fit text-sm">
        <input type="checkbox" id={name} name={name} ref={ref} onChange={onChange} />
        {label}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

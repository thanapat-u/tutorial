"use client";

import { forwardRef } from "react";

export type TextfieldProps = {
  className?: string;
  placeholder?: string;
  label: string;
  error?: string;
  name: string;
  onChange?: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
};

export const Textfield = forwardRef<HTMLInputElement, TextfieldProps>(
  ({ className, placeholder = "", label, error, onChange, onBlur, name }, ref) => (
    <div className="flex flex-col text-gray-500 text-sm">
      <label>{label}</label>
      <input
        ref={ref}
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        className={`${className ?? ""} border ${error ? "border-red-500" : "border-gray-400 focus:border-gray-600 hover:border-gray-600"} text-base rounded-lg py-1 px-2 focus:outline-none placeholder:text-gray-400`}
        placeholder={placeholder}
      />
      <div className="text-red-500">{error}</div>
    </div>
  )
);

Textfield.displayName = "Textfield";

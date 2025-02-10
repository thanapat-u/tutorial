"use client";

import React from "react";

export type Variant = "primary" | "secondary";

export type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
};

const styles: { [key in Variant]: string } = {
  primary: "bg-ci-green text-white border-transparent",
  secondary: "bg-white text-ci-green border-ci-green",
};

export const Button = ({
  className,
  children,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${className ?? ""} px-2 py-1 rounded-lg border ${styles[variant]} ${disabled ? "bg-opacity-50" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

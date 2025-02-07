import React from "react";

export type SectionProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export const Section = ({ title, children, className }: SectionProps) => {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <div className={className}>{children}</div>
    </div>
  );
};

import type React from "react";
import type { ReactNode } from "react";
type ColumnProps = {
  title: string;
  children: ReactNode;
};
function Column({ title, children }: ColumnProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export default Column;

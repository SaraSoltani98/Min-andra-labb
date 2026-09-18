export type NewTask = {
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: "Låg" | "Medium" | "Hög";
};

export type Task = {
  id: number;
  title: string;
  description: string;
  assignee: string;
  category: string;
  priority: "Låg" | "Medium" | "Hög";
  status: "todo" | "doing" | "done";
};

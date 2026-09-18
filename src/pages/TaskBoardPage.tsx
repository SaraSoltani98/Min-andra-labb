import type { Task } from "../types/Task";
import Column from "../components/Column";
import TaskCard from "../components/TaskCard";
type TaskBoardPageProps = {
  tasks: Task[];
  searchTerm: string;
  onSearchChange: (value: string) => void;
};
function TaskBoardPage({
  tasks,
  searchTerm,
  onSearchChange,
}: TaskBoardPageProps) {
  const filteredTasks = tasks.filter((task) => {
    const search = searchTerm.toLowerCase();

    return (
      task.title.toLowerCase().includes(search) ||
      task.description.toLowerCase().includes(search) ||
      task.category.toLowerCase().includes(search) ||
      task.assignee.toLowerCase().includes(search) ||
      task.priority.toLowerCase().includes(search)
    );
  });
  const todoTasks = filteredTasks.filter((task) => task.status === "todo");
  const doingTasks = filteredTasks.filter((task) => task.status === "doing");
  const doneTasks = filteredTasks.filter((task) => task.status === "done");
  return (
    <div>
      <h2>Task Board</h2>
      <input
        type="text"
        placeholder="Sök uppgift"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
      <Column title="Todo">
        {todoTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            assignee={task.assignee}
            category={task.category}
            priority={task.priority}
          />
        ))}
      </Column>
      <Column title="Doing">
        {doingTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            assignee={task.assignee}
            category={task.category}
            priority={task.priority}
          />
        ))}
      </Column>
      <Column title="Done">
        {doneTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            assignee={task.assignee}
            category={task.category}
            priority={task.priority}
          />
        ))}
      </Column>
    </div>
  );
}

export default TaskBoardPage;

import type { NewTask } from "../types/NewTask";
import NewTaskForm from "./NewTaskForm";

type TaskBoardProps = {
  onAddTask: (newTask: NewTask) => void;
};
function TaskBoard({ onAddTask }: TaskBoardProps) {
  return (
    <div>
      <NewTaskForm onAddTask={onAddTask} />
    </div>
  );
}
export default TaskBoard;

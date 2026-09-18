import NewTaskForm from "../components/NewTaskForm";
import type { NewTask } from "../types/NewTask";

type CreateTaskPageProps = {
  onAddTask: (newTask: NewTask) => void;
};
function CreateTaskPage({ onAddTask }: CreateTaskPageProps) {
  return (
    <div>
      <h2>Skapa uppgift</h2>
      <NewTaskForm onAddTask={onAddTask} />
    </div>
  );
}

export default CreateTaskPage;

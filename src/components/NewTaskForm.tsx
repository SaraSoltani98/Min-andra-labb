import { useState } from "react";
import type { NewTask } from "../types/NewTask";

type NewTaskFormProps = {
  onAddTask: (newTask: NewTask) => void;
};

function NewTaskForm({ onAddTask }: NewTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState<NewTask["priority"]>("Medium");

  const handelSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask: NewTask = {
      title,
      description,
      assignee,
      category,
      priority,
    };
    onAddTask(newTask);
  };

  return (
    <form onSubmit={handelSubmit}>
      <h2>Ny uppgift</h2>

      <label>
        Titel:
        <input
          type="text"
          value={title}
          required
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label>
        Beskrivning:
        <textarea
          value={description}
          required
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>

      <label>
        Ansvarig:
        <input
          type="text"
          value={assignee}
          onChange={(event) => setAssignee(event.target.value)}
        />
      </label>

      <label>
        Kategori:
        <input
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </label>

      <label>
        Prioritet:
        <select
          value={priority}
          onChange={(event) =>
            setPriority(event.target.value as NewTask["priority"])
          }
        >
          <option value="Låg">Låg</option>
          <option value="Medium">Medium</option>
          <option value="Hög">Hög</option>
        </select>
      </label>

      <button type="submit">Lägg till uppgift</button>
    </form>
  );
}

export default NewTaskForm;

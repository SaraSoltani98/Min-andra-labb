import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import Column from "./components/Column";
import type { Task } from "./types/Task";
import "./App.css";
import { useEffect, useState } from "react";
import type { NewTask } from "./types/NewTask";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

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

  const handleAddTask = (newTask: NewTask) => {
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newTask,
        status: "todo",
      }),
    })
      .then((response) => response.json())
      .then((createdTask) => {
        setTasks([...tasks, createdTask]);
      });
  };

  return (
    <>
      <Header />
      <input
        type="text"
        placeholder="Sök uppgift"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <TaskBoard onAddTask={handleAddTask} />

      <div className="board">
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

      <Footer />
    </>
  );
}

export default App;

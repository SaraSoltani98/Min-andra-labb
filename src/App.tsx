import type { Task } from "./types/Task";
import "./App.css";
import { useEffect, useState } from "react";
import type { NewTask } from "./types/NewTask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskBoardPage from "./pages/TaskBoardPage";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TaskBoardPage
              tasks={tasks}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          }
        />
        <Route
          path="/create"
          element={<CreateTaskPage onAddTask={handleAddTask} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Task from "./Task";
import { useState } from "react";
import TaskForm from "./TaskForm";
import { TaskInterface } from "./types";

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function addTask(name: string) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <div className="app">
      <TaskForm onAdd={addTask} />
      {tasks.map((task, i) => (
        <Task name={task.name} done={task.done} key={task.name + i} />
      ))}
    </div>
  );
}

export default App;

import Task from "./Task";
import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { TaskInterface } from "./types";

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  console.log(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(name: string) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function handleDone(index: number) {
    setTasks((prevTasks) => {
      // Create a new array with the updated 'done' property for the task at the specified index
      return prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, done: !task.done };
        }
        return task; // For other tasks, return them as they are
      });
    });
  }

  return (
    <div className="app">
      <TaskForm onAdd={addTask} />
      {tasks.map((task, i) => (
        <Task
          name={task.name}
          done={task.done}
          key={task.name + i}
          onToggle={() => handleDone(i)}
          index={i}
        />
      ))}
    </div>
  );
}

export default App;

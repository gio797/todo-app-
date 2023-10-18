import Task from "./Task";
import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { TaskInterface } from "./types";

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  // console.log(tasks);
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

  function handleDelete(index: number) {
    setTasks((prevTasks) => {
      return prevTasks.filter((_, i) => i !== index);
    });
  }

  const numberComplete = tasks.filter((task) => task.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;

    if (percentage === 0) {
      return "Try to do at least one task! 🙏🏻";
    } else if (percentage < 99) {
      return "Keep it going! 💪🏼";
    } else if (percentage === 100) {
      return "Nice Job! 🤘🏼";
    }
  }

  return (
    <div className="app">
      <div className="task-amount">
        <h1>
          {numberComplete}/{numberTotal} Complete
        </h1>
        <h2>{getMessage()}</h2>
      </div>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, i) => (
        <Task
          name={task.name}
          done={task.done}
          key={task.name + i}
          onToggle={() => handleDone(i)}
          index={i}
          onDelete={() => handleDelete(i)}
        />
      ))}
    </div>
  );
}

export default App;

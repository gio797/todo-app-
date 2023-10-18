import { useState } from "react";

type Props = {
  onAdd: (name: string) => void;
};

function TaskForm({ onAdd }: Props) {
  const [taskName, setTaskName] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>Add</button>
      <input
        type="text"
        value={taskName}
        placeholder="New Task"
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}

export default TaskForm;

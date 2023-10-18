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
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
            fill="#1f1f1f"
          />
        </svg>
      </button>

      <input
        required
        type="text"
        value={taskName}
        placeholder="New Task"
        name="taskName"
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}

export default TaskForm;

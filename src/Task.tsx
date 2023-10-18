import Checkbox from "./Checkbox";
import { TaskInterface } from "./types";

function Task({ name, done, onToggle, index }: TaskInterface) {
  return (
    <div className={`task ${done && "done"}`}>
      <Checkbox checked={done} onClick={() => onToggle!(index!)} />
      <p>{name}</p>
    </div>
  );
}

export default Task;

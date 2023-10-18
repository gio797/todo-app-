import Checkbox from "./Checkbox";
import { TaskInterface } from "./types";

function Task({ name, done }: TaskInterface) {
  return (
    <div className="task">
      <Checkbox defaultChecked={done} />
      <p>{name}</p>
    </div>
  );
}

export default Task;

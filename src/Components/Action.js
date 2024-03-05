import React from "react";

const Action = ({
  level,
  selectedTask,
  handleEditTask,
  handleDeleteTask,
  handleChangePrority,
}) => {
  return (
    <div className="flex justify-center items-center gap-2 text-center mb-2">
      <button
        className="px-5 py-2 rounded bg-gray-600 text-white hover:bg-orange-400"
        onClick={() => handleEditTask(prompt("Edit Task:", selectedTask.text))}
      >
        Edit
      </button>
      <button
        className="px-5 py-2 rounded bg-gray-600 text-white hover:bg-yellow-400"
        onClick={() =>
          handleChangePrority(
            prompt("Change Task Prority:", selectedTask.proirity)
          )
        }
      >
        ChangeProirity
      </button>
      <button
        className="px-5 py-2 rounded bg-gray-600 text-white duration-400 hover:bg-red-400"
        onClick={() => {
          window.alert(`do you wanna delte thes ${level} proprity task`);
          handleDeleteTask();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Action;

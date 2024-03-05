import React, { useState } from "react";
import Action from "./Action";

const Layout = ({
  level,
  getTaskByPriority,
  selectedTask,
  setSelectedTask,
  handleEditTask,
  handleDeleteTask,
  handleChangePrority,
}) => {
  return (
    <div className="m-5 bg-green-600 w-96 text-center">
      <h2 className="text-2xl font-semibold  font-primary text-white">
        {level}
      </h2>
      {getTaskByPriority(level).map((item, index) => (
        <div className="bg-gray p-2" key={index}>
          {/* <div onClick={setShow(!show)}> */}
          <p className="text-lg cursor-pointer" onClick={setSelectedTask(item)}>
            --{item.text}
          </p>
          {/* </div> */}
          {selectedTask === item && (
            <Action
              level={level}
              selectedTask={selectedTask}
              handleEditTask={handleEditTask}
              handleChangePrority={handleChangePrority}
              handleDeleteTask={handleDeleteTask}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Layout;

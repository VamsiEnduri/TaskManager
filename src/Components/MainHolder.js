import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const MainHolder = () => {
  const [task, setTasks] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [selectPriority, setSelectPriority] = useState("High");
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const handleTextInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const handlePriorityChnage = (e) => {
    setSelectPriority(e.target.value);
  };

  const submitTask = () => {
    if (textInput.trim() === "") {
      return;
    }
    const newTask = {
      text: textInput,
      proirity: selectPriority,
    };
    setTasks([...task, newTask]);
    setTextInput("");
    setSelectPriority("High");
  };

  const getTaskByPriority = (proirity) => {
    return task.filter((task) => task.proirity === proirity);
  };

  const handleEditTask = (editedText) => {
    //
    const updatedTasks = task.map((task) =>
      task === selectedTask ? { ...task, text: editedText } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleDeleteTask = () => {
    const updatedTasks = task.filter((task) => task != selectedTask);
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleChangePrority = (newProirity) => {
    const updatedTasks = task.map((task) =>
      task === selectedTask ? { ...task, proirity: newProirity } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };
  return (
    <>
      <div className="m-5 flex gap-5">
        <input
          type="text"
          placeholder="Enter Task Here"
          className="pl-4 lg:w-96 text-gray-700 font-bold border rounded"
          value={textInput}
          onChange={handleTextInputChange}
        />
        <div>
          <select
            className="text-gray-700 font-bold border rounded p-2 cursor-pointer"
            value={selectPriority}
            onChange={handlePriorityChnage}
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
        <button
          className="px-10 py-2 bg-blue-500 text-white font-bold rounded"
          onClick={submitTask}
        >
          Add Task
        </button>
      </div>
      <div className="mt-8 space-y-4 text-black">
        <div className="flex flex-wrap">
          <Layout
            level="High"
            getTaskByPriority={getTaskByPriority}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
            handleChangePrority={handleChangePrority}
          />
          <Layout
            level="Medium"
            getTaskByPriority={getTaskByPriority}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            handleEditTask={handleEditTask}
            handleChangePrority={handleChangePrority}
            handleDeleteTask={handleDeleteTask}
          />
          <Layout
            level="Low"
            getTaskByPriority={getTaskByPriority}
            selectedTask={selectedTask}
            setSelectedTask={setSelectedTask}
            handleEditTask={handleEditTask}
            handleChangePrority={handleChangePrority}
            handleDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </>
  );
};

export default MainHolder;

import { useState } from "react";

import style from "./App.module.css";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { CiCirclePlus } from "react-icons/ci";
import Item from "./components/Item";
import { ListHeader } from "./components/ListHeader";
import { Button } from "./components/Button";
import Empyt from "./components/Empyt";

interface taskProps {
  id: number;
  text: string;
  isChecked: boolean;
}
function App() {
  const [task, setTask] = useState<taskProps[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleSetTask() {
    if (!inputValue) return;

    const newTask: taskProps = {
      id: Math.random(),
      text: inputValue,
      isChecked: false,
    };

    setTask([...task, newTask]);
    setInputValue("");
  }

  function handleDeleteTask(id: number) {
    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    setTask((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id: number, checked: boolean) {
    // console.log(id)
    setTask((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isChecked: checked };
        }
        return { ...task };
      })
    );
  }

  return (
    <main>
      <Header></Header>
      <section className={style.toDoForm}>
        <div className={style.inputDiv}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleSetTask}>
            Criar
            <CiCirclePlus size={16} color="#f2f2f2" />
          </Button>
        </div>
        <div className={style.toDoList}>
          <ListHeader
            taskAmount={task.length ?? 0}
            taskDone={
              task.filter((item) => item.isChecked === true).length ?? 0
            }
          />
          {task.length > 0 ? (
            <div>
              {task.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  isChecked={item.isChecked}
                  deleteTask={handleDeleteTask}
                  toggleTask={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empyt></Empyt>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;

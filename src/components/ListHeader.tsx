import style from "./ListHeader.module.css";

interface ListHeaderProps {
  taskDone: number;
  taskAmount: number;
}
export function ListHeader({ taskDone, taskAmount }: ListHeaderProps) {
  return (
    <header className={style.information}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{taskAmount}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>
          {taskDone > 0 ? ` ${taskDone} de ${taskAmount}` : `${taskDone}`}
        </span>
      </aside>
    </header>
  );
}

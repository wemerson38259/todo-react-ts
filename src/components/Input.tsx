import { ComponentProps } from "react";
import style from "./Input.module.css";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      type="text"
      className={style.input}
      placeholder="Adicione uma nova tarefa"
      {...props}
    />
  );
}

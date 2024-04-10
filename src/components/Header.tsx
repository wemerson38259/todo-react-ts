import toDoLogo from '../assets/todo-logo.svg'
import style  from './Header.module.css'

export  function Header() {
  return (
    <header className={style.header}>
        <img className={style.image} src={toDoLogo}></img>
    </header>
  )
}

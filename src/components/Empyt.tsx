import clipBoard from '../assets/clip-board.svg'
import style from './Empyt.module.css'

function Empyt() {
  return (
    <div>
        <div className={style.empyt}>
            <img src={clipBoard} title='Clip Board' />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    </div>
  )
}

export default Empyt

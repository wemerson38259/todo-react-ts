import style from './Item.module.css'
import { BiCheck, BiTrash } from 'react-icons/bi'

interface ItensProps {
    id: number
    text: string
    isChecked: boolean
    deleteTask: (id: number) => void
    toggleTask: (id: number) => void
}

function Itens({id,text,isChecked, deleteTask, toggleTask}: ItensProps) {
    const checkboxCheckedClassname = isChecked
    ? style['checkbox-checked']
    : style['checkbox-unchecked']
    const paragraphCheckedClassname = isChecked
    ? style['paragraph-checked']
    : ''

    function handleRemove(){
        deleteTask(id)
    }

    function handletoggle(){
        toggleTask(id)
    }

    return (
        <div className={style.container}>
          <div>
            <label htmlFor="checkbox">
              <input readOnly type="checkbox" checked={isChecked} />
              <span 
                onClick={handletoggle}
                className={`${style.checkbox} ${checkboxCheckedClassname}`}
              >
                {isChecked && <BiCheck size={12} />}
              </span>
    
              <p className={`${style.paragraph} ${paragraphCheckedClassname}`}>
                {text}
              </p>
            </label>
          </div>
    
          <button onClick={handleRemove}>
            <BiTrash size={16} color="#808080" />
          </button>
        </div>
      )
//   return (
//     <div className={style.container}>
//         <div>
//             <label htmlFor="checkbox">
//                 <input readOnly type="checkbox"  />
//                 <span className={`${style.checkbox} ${checkboxCheckedClassname}`}>
//                     {isChecked && <BiCheck size={12} />}
//                 </span>

//                 <p className={`${style.paragraph} ${paragraphCheckedClassname}`}>
//                     {text}
//                 </p>
//             </label>
//         </div>
//         <button >
//             <BiTrash size={16} color="#808080" />
//         </button>
//     </div>
//   )
}

export default Itens

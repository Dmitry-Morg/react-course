import styles from "./TodoItem.module.css"
import CheckBox from "../UI/CheckBox"
import {MdDone} from "react-icons/md"
import {RiCloseFill} from "react-icons/ri"
import CheckBoxCircle from "../UI/CheckBoxCircle"
import {BiSquareRounded} from "react-icons/bi"
import {BsFillPlayFill} from "react-icons/bs"
function TodoItem({todos,todo, removeTodo, handlerProgress, handlerDone}) {
 
return (
    <div className={styles.todoItemContainer}>

       <CheckBox onClick={() => handlerDone(todo.id)}>
        {todo.status === "DONE" ? <MdDone /> : ''}
      </CheckBox>
      <span className={todo.status === "DONE" ? `${styles.todoItemTextDone}` : `${styles.todoItemText}`}>{todo.text}</span>
      {todo.status === "DONE" 
        ? 
       ''
      :
      <CheckBoxCircle
      onClick={() => handlerProgress(todo.id)}
      className={styles.checkBox}>
      {todo.status === "IN_PROGRESS" ? <BiSquareRounded /> : <BsFillPlayFill />}
    </CheckBoxCircle> 
      }
      <CheckBox onClick={() => removeTodo(todo.id)}>
        <RiCloseFill/>
      </CheckBox>
      {/* <StatusDone
     todo={todo}
     todos={todos}
     removeTodo={removeTodo}
     handlerDone={handlerDone}
     handlerProgress={handlerProgress}
   />  */}
    </div>
)



}
export default TodoItem
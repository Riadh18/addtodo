import { useDispatch } from "react-redux"
import { handleDelete, handleDone } from "../Redux/Actions"

const CardTask=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
            <h3 className={el.isDone && "line"}>{el.text}</h3>
            <button onClick={()=>dispatch(handleDelete(el.id))}>Delete</button>
            <button onClick={()=> dispatch(handleDone(el.id))} >{el.isDone ?  "Undone" : "Done" }</button>
        </div>
    )
}

export default CardTask
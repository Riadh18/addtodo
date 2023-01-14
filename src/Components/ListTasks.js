import { useState } from "react"
import { useSelector } from "react-redux"
import CardTask from "./CardTask"
import Button from 'react-bootstrap/Button';

const ListTasks=()=>{
    const [test,setTest] = useState("ALL")
    const tasks = useSelector(state=> state.tasks)
 
    return(
        <div>
            <div className="btn" >
            <button  onClick={()=>setTest("ALL")}>All</button>
            <button onClick={()=>setTest("DONE")}>Done</button>
            <button  onClick={()=>{setTest("UNDONE")}}>Undone</button>
            </div>
           

            {
                test == "ALL" ?
                tasks.map(el=> <CardTask el={el}/>)
                :
                test == "DONE" ?
                tasks.filter(el=> el.isDone ==true).map(el=> <CardTask el={el}/>)
                :
                tasks.filter(el=> el.isDone == false).map(el=> <CardTask el={el}/>)
            }
        </div>
    )
}

export default ListTasks
import { useState } from "react"
import "./input.css"




interface PropsType {
    type?: string,
    name?: string,
    id?: string,

}

const Input = (props: PropsType)=> {
    const [isError, setIsError] = useState(false)



    const handlChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        if(e.target.value.length < 3){
            setIsError(true)
        }else {
            setIsError(false)
        }
    }

    return(
        <div className="input-cnt">
            <label htmlFor={props.id}>{props.name}</label>
            <span className={isError? "span-red": "none"}>wrong</span>
            <input onChange={handlChange} className={isError? "red": "black"} type={props.type} />
        </div>
    )
}

export default Input;
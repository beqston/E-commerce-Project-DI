import { useState } from "react"
import "./input.css"




interface PropsType {
    type?: string,
    name?: string,
    id?: string,
    placeholder?: string,

}

const Input = (props: PropsType)=> {
    const [isError, setIsError] = useState(false)



    const handlChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
if(props.type === "text"){
    if(e.target.value.length < 3){
        setIsError(true)
    }else {
        setIsError(false)
    }
    return
}
    }

    if(props.type === "text"|| "email" || "number" ){
        return(
            <div className="input-cnt">
                <label className={isError? "label-error error": "label-text"} htmlFor={props.id}>{props.name}</label>
                <span className={isError? "span-red error": "none"}>wrong</span>
                <input
                    onChange={handlChange} 
                    className={isError? "red-input": "text-input"} 
                    placeholder={props.placeholder} 
                    id={props.id}
                />
            </div>
        )
    }
    return(
        <div className="radio-input-cnt">

            <input 
                onChange={handlChange} 
                className="radio-input" 
                type="radio"
                placeholder={props.placeholder}
                id={props.id} 
            />

            <label className="radio-label" htmlFor={props.id}>{props.name}</label>
        </div>
    )


}

export default Input;
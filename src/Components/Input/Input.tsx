import { useState } from "react"
import "./input.css"




interface PropsType {
    type?: string,
    name?: string,
    id?: string,
    placeholder?: string,
    radioName?: string,
    checked?: boolean
    onChange?: ()=> void
}

const Input = (props: PropsType)=> {
    const [isError, setIsError] = useState(false);


    const handlChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        if(props.type === "text"){
            if(e.target.value.length < 3){
                setIsError(true)
            }else {
                setIsError(false)
            }
            
        }
    }


    if(props.type === "radio"){
        return(
            <div className="radio-input-cnt">
    
                <input 
                    className="radio-input" 
                    type="radio"
                    placeholder={props.placeholder}
                    id={props.id}
                    name={props.name}                     
                    {...props}
                />
    
                <label className="radio-label" htmlFor={props.id}>{props.radioName}</label>
            </div>
        )
    }

    else{
        return(
            <div className="input-cnt">
                <label className={isError? "label-error error": "label-text"} htmlFor={props.id}>{props.name}</label>
                <span className={isError? "span-red error": "none"}>wrong</span>
                <input
                    onChange={handlChange} 
                    className={isError? "red-input": "text-input"} 
                    placeholder={props.placeholder} 
                    id={props.id}
                    {...props}
                />
            </div>
        )
    }




}

export default Input;
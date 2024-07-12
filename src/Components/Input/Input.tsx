import { ForwardedRef, forwardRef, HTMLAttributes, useState } from "react"
import "./input.css"




export type PropsType = {
    // onChange?: ()=> void
    type?: string,
    name?: string,
    id?: string,
    placeholder?: string,
    radioName?: string,
    checked?: boolean,
    title?: string,
    isError?: boolean
    
} & HTMLAttributes<HTMLInputElement>

const Input = forwardRef((props: PropsType, ref: ForwardedRef<HTMLInputElement>)=> {

    const [isError, setIsError] = useState(false);


    const handlChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        if(props.type === "text"){
            if(e.target.value.length > 1 && e.target.value.length < 3){
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
                <label className={props.isError? "label-error error": "label-text"} htmlFor={props.id}>{props.title}</label>
                <span className={props.isError? "span-red error": "none"}>wrong</span>
                <input
                    // onChange={handlChange}
                    className={props.isError? "red-input": "text-input"} 
                    placeholder={props.placeholder} 
                    id={props.id}
                    ref={ref}
                    
                    {...props}
                />
            </div>
        )
    }




});

export default Input;
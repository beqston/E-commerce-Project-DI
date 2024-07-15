import { ForwardedRef, forwardRef, HTMLAttributes } from "react"
import "./input.css"




export type PropsType = {
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
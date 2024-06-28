import { useState } from "react";
import "./style.scss"
const CountInput = ()=> {
    const [count, setCount] = useState<number>(1);


    const handlClickMinus = ()=> {
        if(count === 0){
            setCount(0)
        }
        else{
            setCount(count - 1)
        }
    }
    const handlClickPlus = ()=> {
        setCount(count + 1)
    }

    return(
        <div className="countinput-cnt">
            <span className="decrease"  onClick={handlClickMinus}>-</span>
            <span className="count">{count}</span>
            <span className="increase" onClick={handlClickPlus}>+</span>
        </div>
    )
}

export default CountInput;
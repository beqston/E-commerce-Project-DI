import { useState } from "react";
import "./style.scss"


const CountInput = ()=> {

    const [num, setNum] = useState<number>(1);
    
    const handlClickMinus = ()=> {
        if(num === 0){
            setNum(0);
            
        }
        else{
            setNum(num - 1)
        }
    }
    const handlClickPlus = ()=> {
        setNum(num + 1)
    }

    return(
        <div className="countinput-cnt">
            <span className="decrease"  onClick={handlClickMinus}>-</span>
            <span className="count">{num}</span>
            <span className="increase" onClick={handlClickPlus}>+</span>
        </div>
    )
}

export default CountInput;
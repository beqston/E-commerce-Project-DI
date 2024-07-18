// import { ContextType, useContext } from "react";
import "./style.scss"
// import { CartContext } from "../../Context/Context";
import { Dispatch } from "react";

type Props = {
    num: number;
    setNum: Dispatch<React.SetStateAction<number>>
}


const CountInput = ({num, setNum} : Props)=> {


    // const {num, setNum} = useContext(Cartcontext) as ContextType;
    
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
            <button className="decrease"  onClick={handlClickMinus}>-</button>
            <p className="count">{num}</p>
            <button className="increase" onClick={handlClickPlus}>+</button>
        </div>
    )
}

export default CountInput;
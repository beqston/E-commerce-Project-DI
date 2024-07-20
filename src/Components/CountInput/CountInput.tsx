import "./style.scss"
import { Dispatch } from "react";

type Props = {
    num: number;
    setNum: Dispatch<React.SetStateAction<number>> | ((num: number) => void);
  };


const CountInput = ({num, setNum} : Props)=> {

    
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
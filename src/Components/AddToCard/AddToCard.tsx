import { ButtonHTMLAttributes, ReactNode, useContext } from "react";
import "./style.scss"
// import { Cartcontext, ContextType } from "../../Context/Context";

type Props = {
    // price: number;
    // name: string
    // children: ReactNode;
    onClick?: ()=> void
}  & ButtonHTMLAttributes<HTMLButtonElement>;

const AddToCard = (props :Props)=> {
    // const {prodArray, setProdArray, num} = useContext(Cartcontext) as ContextType;

    // const handlClick = ()=> {
    //     setProdArray([...prodArray, {name: props.name, price: props.price * num, quantiti: num}])
    // }
    return(
        <button onClick={props.onClick} className="btn-addtocard">
            ADD TO CART
        </button>
    )
}

export default AddToCard;
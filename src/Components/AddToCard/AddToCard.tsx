import { useContext } from "react";
import "./style.scss"
import { Cartcontext, ContextType } from "../../Context/Context";

interface Props{
    price: number;
    name: string
}

const AddToCard = (props: Props)=> {
    const {prodArray, setProdArray, num} = useContext(Cartcontext) as ContextType;

    const handlClick = ()=> {
        setProdArray([...prodArray, {name: props.name, price: props.price * num, quantiti: num}])
    }
    return(
        <button className="btn-addtocard">
            ADD TO CART
        </button>
    )
}

export default AddToCard;
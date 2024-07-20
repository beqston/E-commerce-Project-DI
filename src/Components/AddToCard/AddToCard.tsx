import { ButtonHTMLAttributes } from "react";
import "./style.scss"

type Props = {
    onClick?: ()=> void
}  & ButtonHTMLAttributes<HTMLButtonElement>;

const AddToCard = (props :Props)=> {

    return(
        <button {...props} onClick={props.onClick} className="btn-addtocard">
            ADD TO CART
        </button>
    )
}

export default AddToCard;
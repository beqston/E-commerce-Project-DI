import { useContext } from "react";
import "./style.scss"
import { Cartcontext } from "../../Context/Context";

interface Props{
    price: number;
    name: string
}

const AddToCard = (props: Props)=> {
    const {prodArray, setProdArray, num, setNum} = useContext(Cartcontext);

    const handlClick = ()=> {
        if(prodArray){

        }
        setProdArray([...prodArray, {name: props.name, price: props.price * num, quantiti: num}]);
        setNum(1)
    }
    return(
        <button onClick={handlClick} className="btn-addtocard">
            ADD TO CART
        </button>
    )
}

export default AddToCard;
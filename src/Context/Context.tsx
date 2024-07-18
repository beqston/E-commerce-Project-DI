import { createContext, ReactNode, useState } from "react";
import { ProductsType } from "../Types/ProductsTypes";

// export interface ContextType{
//     num: number;
//     setNum: React.Dispatch<React.SetStateAction<number>>;
//     prodArray: {}[]
//     setProdArray:React.Dispatch<React.SetStateAction<[]>>;
// }

type CartItem = {
    product: ProductsType,
    amount: number,
}

export type CartContextType = {
    cart: CartItem[]
    updateCart: (num: number, prod: ProductsType) => void
}


export const CartContext = createContext<null | CartContextType>(null);

const CartContextProvider = ({children}: {children: ReactNode})=> {

    const [cart, setCart] = useState<CartItem[]>([]);

    const updateCart = (num: number, prod: ProductsType)=> {

        // if(num === 0){
        //    const newCart = cart.filter(currentItem => currentItem.product.id !== prod.id)
        //    setCart(newCart)
        // }

        // if(num === 1){
        //     const item = cart.find(currentItem => currentItem.product.id === prod.id);

        //     if(item){
        //         const newCart = cart.map(currentItem => currentItem.product.id !== prod.id ? currentItem: {...currentItem, amount: 1})

        //         setCart(newCart)
        //     }else{
        //         setCart([...cart, {amount: 1, product: prod}])
        //     }
        // }

        // if(num > 1){
        //     const newCart = cart.map(currentItem => currentItem.product.id !== prod.id ? currentItem: {...currentItem, amount: num})

        //     setCart(newCart)
        // }

        if(num === 0){
            const newCart = cart.filter(currentItem => currentItem.product.id !== prod.id );
            setCart(newCart);
            return
        }

        const item = cart.find(currentItem => currentItem.product.id === prod.id);
        
        if(item){
            const newCart = cart.map(currentItem => currentItem.product.id !== prod.id? currentItem: {...currentItem, amount: num});
            setCart(newCart)
        }else{
            setCart([...cart, {amount: 1, product: prod} ])
        }

    }


    // const [prodArray, setProdArray] = useState([]);
    // const [num, setNum] = useState<number>(1);

    return(
        <CartContext.Provider value={{cart, updateCart }}>
            {children}
        </CartContext.Provider>
    )
}



export default CartContextProvider;
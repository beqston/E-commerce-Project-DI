import { createContext, ReactNode, useState } from "react";
import { ProductsType } from "../Types/ProductsTypes";

export type CartItemType = {
    product: ProductsType,
    amount: number,
}

export type CartContextType = {
    cart: CartItemType[]
    updateCart: (num: number, prod: ProductsType) => void
}


export const CartContext = createContext<null | CartContextType>(null);

const CartContextProvider = ({children}: {children: ReactNode})=> {

    const [cart, setCart] = useState<CartItemType[]>([]);

    const updateCart = (num: number, prod: ProductsType)=> {

        if (num > 0) {
            const item = cart.find((currItem) => currItem.product.id === prod.id);
      
            if (item) {
              const newCart = cart.map((currItem) =>
                currItem.product.id !== prod.id
                  ? currItem
                  : { ...currItem, amount: num }
              );
              setCart(newCart);
            } else {
              setCart([...cart, { amount: num, product: prod }]);
            }
          }
        };
      

    return(
        <CartContext.Provider value={{cart, updateCart }}>
            {children}
        </CartContext.Provider>
    )
}



export default CartContextProvider;
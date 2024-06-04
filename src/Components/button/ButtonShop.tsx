import classname from "./style.module.scss"

const ButtonShop = ()=> {
    return(
        <button className={classname['btn-shop']}>
            Shop
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
            <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/>
            </svg>
            
        </button>
    )
}

export default ButtonShop;
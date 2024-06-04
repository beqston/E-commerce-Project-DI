import classname from "./style.module.scss"
// import img1D from "../../../public/assets/shared/desktop/image-best-gear.jpg"
// import img1T from "../../../public/assets/shared/tablet/image-best-gear.jpg"
import img1D from "../../assets/Photos/MainBottomImg/Bitmap.png"

const MainBottom = () => {

    return(
        <section>
            <div className={classname['main-btm-cnt']}>
                <div className={classname['main-botttom1']}>
                    <h3>
                    Bringing you the <span>best</span> audio gear
                    </h3>

                    <p>
                        Located at the heart of New York City, 
                        Audiophile is the premier store for high end 
                        headphones, earphones, speakers, and audio accessories. 
                        We have a large showroom and luxury demonstration rooms 
                        available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place 
                        to buy your portable audio equipment.
                    </p>
                </div>

                <div className={classname['main-botttom2']}>
                    <img src={img1D} />
                </div>
            </div>
        </section>
    )
}

export default MainBottom;
import {Header} from './header'
import {Footer} from './footer'
import ProductsJS from "./Products";
export const Home=()=>{
    return(
    <div className="bg-dark">
        <Header/>
        <ProductsJS/>
        <Footer/>
    </div>
    )
}
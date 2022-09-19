import Nav from "../components/Nav"
import Slider from "../components/Slider"
import Features from "../components/Features"
import Categories from "../components/Categories"
import BestSellers from "../components/BestSellers"


const Home = () => {
    return (
        <>
            <div>
            <Nav /> 
                <Slider />
                <Features />
                <Categories />
                <BestSellers/>
                
        
        
            </div>
        </>
    )
}
export default Home
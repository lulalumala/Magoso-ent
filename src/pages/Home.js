import Nav from "../components/Nav"
import Slider from "../components/Slider"
import Features from "../components/Features"
import Categories from "../components/Categories"
import BestSellers from "../components/BestSellers"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/footer"

const Home = () => {
    return (
        <>
            <div>
            <Nav /> 
                <Slider />
                <Features />
                <Categories />
                <BestSellers />
                <NewsLetter />
                <Footer/>
                
        
        
            </div>
        </>
    )
}
export default Home
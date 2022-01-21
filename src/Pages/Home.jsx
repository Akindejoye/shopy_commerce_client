import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Slider from "../Components/Slider";
import Product from './../Components/Product';
import Footer from './../Components/Footer';

const Home = () => {
    return ( 
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Product />
            <Newsletter />
            <Footer />
        </div>
     );
}
 
export default Home;
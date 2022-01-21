import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Product from './../Components/Product';

const Home = () => {
    return ( 
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Product />
        </div>
     );
}
 
export default Home;
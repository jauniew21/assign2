import placeholder from '../assets/shop-placeholder.png';
import { Link } from 'react-router-dom';
import AddItemButton from './AddItemButton';

const HomeView = (props) => {
    
    // DaisyUI carousel: https://daisyui.com/components/carousel/?lang=en#slide1
    return(<div className='pt-16'>

        <div className="w-full h-28 overflow-hidden pb-10">
            <img
                src={placeholder}
                alt="placeholder"
                className="w-full h-full object-cover"
            />
        </div>

        <div className="carousel w-120">

            <div id="slide1" className="carousel-item relative w-full group">
                <img src={placeholder} className="w-full" />
                <Link to="/product/Mules with Block Heel"
                className="absolute inset-0 flex items-center justify-center bg-black/60
                            text-white text-2xl font-semibold opacity-0 group-hover:opacity-100
                            transition-opacity duration-300">
                Featured Product: Mules with Block Heel
                </Link>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full group">
                <img src={placeholder} className="w-full" />
                <Link to="/product/Statement Earrings" className="absolute inset-0 flex items-center justify-center bg-black/60
                            text-white text-2xl font-semibold opacity-0 group-hover:opacity-100
                            transition-opacity duration-300">
                Most Popular: Statement Earrings
                </Link>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full group">
                <img src={placeholder} className="w-full" />
                <Link to="/product/Platform Sneakers" className="absolute inset-0 flex items-center justify-center bg-black/60
                            text-white text-2xl font-semibold opacity-0 group-hover:opacity-100
                            transition-opacity duration-300">
                Best Selling: Platform Sneakers
                </Link>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>

    </div>)
}

export default HomeView;
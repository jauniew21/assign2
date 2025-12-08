import placeholder from '../assets/shop-placeholder.png';

const HomeView = (props) => {
    
    // DaisyUI carousel: https://daisyui.com/components/carousel/?lang=en#slide1
    return(<div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full group">
            <img
            src={placeholder}
            className="w-full" />

            <div className="
                absolute inset-0
                flex items-center justify-center
                bg-black/60
                text-white text-2xl font-semibold
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
            ">
                Featured Product: 
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full group">
            <img
            src={placeholder}
            className="w-full" />

            <div className="
                absolute inset-0
                flex items-center justify-center
                bg-black/60
                text-white text-2xl font-semibold
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
            ">
                Most Popular: 
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full group">
            <img
            src={placeholder}
            className="w-full" />

            <div className="
                absolute inset-0
                flex items-center justify-center
                bg-black/60
                text-white text-2xl font-semibold
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
            ">
                Best Selling: 
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>)
}

export default HomeView;
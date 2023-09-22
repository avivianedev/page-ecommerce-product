import "./CarouselComponent.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function CarouselComponent() {

    return (
        <section className="carousel-container">
            <Carousel
                autoFocus={false}
                stopOnHover
                infiniteLoop
                showStatus={false}
                thumbWidth={130}


            >
                <div className="carousel-item"><img src="/assets/images/image-product-1.jpg" alt="Product image" /></div>
                <div className="carousel-item"><img src="/assets/images/image-product-2.jpg" alt="Product image" /></div>
                <div className="carousel-item"><img src="/assets/images/image-product-3.jpg" alt="Product image" /></div>
                <div className="carousel-item"><img src="/assets/images/image-product-4.jpg" alt="Product image" /></div>
            </Carousel>
        </section>
    )

};





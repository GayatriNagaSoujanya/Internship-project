import <Carousel from "react-multi-carousel"

const responsive = {
    desktop: {
        breakpoint: {max:3000,min:1024},
        items=5
    }
    desktop: {
        breakpoint: {max:1024,min:464},
        items=2
    }
    desktop: {
        breakpoint: {max:3000,min:0}
        items=1
    }
}

const Slide= ({products}) => {
    return (
        <Carousel
            responsive={responsive}
        >
            {
                products.map(products =>(
                    <img src={products.url} alt="product" />
                ))
            }

        </Carousel>
    )
}

export default Slide;

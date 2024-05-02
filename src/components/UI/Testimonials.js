import {useState} from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap"
import clientImg from '../../assets/img/testimonials.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
    {
        id: 1,
        name: "Ivan Ivanov",
        date: "2023.01.01",
        text: "Lorem ipsum dolor sit amet consectetur. Odio elit cras senectus posuere varius ullamcorper pulvinar nec. Cursus adipiscing arcu diam platea volutpat viverra sollicitudin nulla. Et eget quam imperdiet at eget...",
        rating: 3,
        imageUrl: {clientImg}
    },

];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = testimonials.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <div className="row g-0 align-items-center">
                    <div className="col-md-4">
                        <img src={item.imageUrl} alt={item.name} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8 p-4">
                        <h3>{item.name}</h3>
                        <p className="text-muted">{item.date}</p>
                        <p>{item.text}</p>
                        <p>{"★".repeat(item.rating) + "☆".repeat(5 - item.rating)}</p>
                    </div>
                </div>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={testimonials} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}


export default Testimonials
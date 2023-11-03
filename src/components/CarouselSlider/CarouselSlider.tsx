import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
interface CarouselSliderProps { }
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3 // optional, default to 1.
	},

	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
		slidesToSlide: 1 // optional, default to 1.
	}
};
export const CarouselSlider: FC<CarouselSliderProps> = () => {
	const products: Array<String> = ['bag', 'dress', 'phone', 'sneakers', 'sunscreeen', 'mouse', 'keyboard', 'display'];


	return (
		<div>
			<Carousel
				responsive={responsive}
				ssr={true}
				arrows={false}
				containerClass="carousel-container-with-scrollbar"
				itemClass="carousel-item-padding-40-px px-2"
			>
				{products.map((item, i) => <div className='bg-green-400  aspect-[3/5] md:aspect-[10/11] rounded-xl' key={i}>{item}</div>)}

			</Carousel>
		
		</div>
	);
};

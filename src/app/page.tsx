'use client'
import { CarouselSlider } from 'components/CarouselSlider/CarouselSlider';
import { BaseLayout } from 'components/Layout/BaseLayout';
import { HeroSection } from 'components/Section/HeroSection';
let categories: Array<String> = ['Furniture', 'Handbag', 'Books', 'Tech', 'Sneakers', 'Travel'];
export default function Index() {
	const categoryElements = categories.map((item, i) => (<div className='bg-blue-500 text-center	aspect-[8/10] rounded-xl ' key={i}>{item}</div>));
	return (
		<div>
			<HeroSection />
			<div className='container mt-24'>
				<div className="text-2xl font-bold">Shop Our Top Categories</div>

				<div className='grid grid-cols-2 md:grid-cols-6 mt-6 md:gap-5 gap-3' >
					{categoryElements}
				</div>
			</div>
			<div className='container mt-24'>
				<div className="text-2xl mb-5 font-bold">Todays Best Deals For You!</div>
				<CarouselSlider />
			</div>
		</div>
	)
}
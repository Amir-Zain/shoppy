import { FC } from 'react'
interface HeroSectionProps {

}

export const HeroSection: FC<HeroSectionProps> = () => {

	return <div className="flex flex-col items-center justify-center w-full bg-red-200 h-[87vh] md:justify-start md:flex-row">
		<div className='container'>
			<div className='flex flex-col w-full gap-5 md:w-1/2'>
				<div className='text-4xl font-extrabold  md:text-5xl line-clamp-2'>Shopping And Department Store.</div>
				<div className='text-base font-medium  md:text-lg'>Shopping is bit relaxing hobby for me, which is sometimes troubling for bank balance</div>
				<a href="" className='px-4 py-2 text-white bg-green-800 rounded-full hover:bg-green-700 w-fit '  >Learn More</a>
			</div>
		</div>
	</div>
}
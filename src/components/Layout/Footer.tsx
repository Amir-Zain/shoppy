import { FC } from 'react'

import Image from 'next/image'
interface FooterProps { }

export const Footer: FC<FooterProps> = () => {
	return (
		<section className='container flex flex-col pb-6'>
			<hr className="h-px my-8 bg-gray-300 border-0 shadow-sm " />
			<div className="flex flex-col justify-around w-full mt-5 md:flex-row">
				<div className="flex flex-col item-center basis-2/5 ">
					<p>logo</p>
					<p className='pr-10 mt-6 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam excepturi quidem quia eaas</p>

					<div className='mt-8 text-lg font-semibold'>Accepted Payments</div>
					<div>
						<div className="flex gap-4 mt-5">
							<Image src="/img/stripe.png" className='w-20 p-2  bg-white border border-gray-200 rounded-sm h-11' alt='visa' height={50} width={60} />
							<Image src="/img/visa.png" className='w-20 p-2  bg-white border border-gray-200 rounded-sm h-11' alt='visa' height={70} width={70} />
							<Image src="/img/card.png" className='w-20  p-2 bg-white border border-gray-200 rounded-sm h-11' alt='visa' height={70} width={70} />
						</div>
						<div className='flex gap-4 mt-4 '>
							<Image src="/img/paypal.png" className='w-20  p-2 bg-white border border-gray-200 rounded-sm h-11' alt='visa' height={70} width={70} />
							<Image src="/img/apple-pay.png" className='w-20 p-2  bg-white border border-gray-200 rounded-sm h-11' alt='visa' height={70} width={70} />
							<Image src="/img/UPI.png" className='w-20 p-2 bg-white border border-gray-200 rounded-sm h-11' alt='visa' height={70} width={70} />
						</div>
					</div>
				</div>
				<div className='flex flex-wrap  gap-5 mt-10 basis-3/5 md:gap-10 md:mt-0'>
					<div className="flex flex-col ">
						<p className='font-semibold'>Department</p>
						<div className='flex flex-col gap-1 mt-5'>
							<p className='text-sm '>Fashion</p>
							<p className='text-sm '>Education Product</p>
							<p className='text-sm '>Frozen Food</p>
							<p className='text-sm '>Beverages</p>
							<p className='text-sm '>Organic Supplies</p>
							<p className='text-sm '>Organic Supplies</p>
							<p className='text-sm '>Beauty Products</p>
							<p className='text-sm '>Books</p>
							<p className='text-sm '>Electronics & Gadget</p>
							<p className='text-sm '>Travel Accessories</p>
							<p className='text-sm '>Fitness</p>
							<p className='text-sm '>Sneakers</p>
							<p className='text-sm '>Toys</p>
							<p className='text-sm '>Furniture</p>
						</div>
					</div>
					<div className="flex flex-col ">
						<p className='font-semibold'>About Us</p>
						<div className='flex flex-col gap-1 mt-5'>
							<p className='text-sm '>About Shoppy</p>
							<p className='text-sm '>Careers</p>
							<p className='text-sm '>News & Blog</p>
							<p className='text-sm '>Help</p>
							<p className='text-sm '>Press Center</p>
							<p className='text-sm '>Shop By Location</p>
							<p className='text-sm '>Shoppy Brands</p>
							<p className='text-sm '>Affiliate & Partners</p>
							<p className='text-sm '>Ideas & Guides</p>
						</div>
					</div>
					<div className="flex flex-col ">
						<p className='font-semibold'>Services</p>
						<div className='flex flex-col gap-1 mt-5'>
							<p className='text-sm '>Gift Card</p>
							<p className='text-sm '>Mobile App</p>
							<p className='text-sm '>Shipping & Delivery</p>
							<p className='text-sm '>Order Pickup</p>
							<p className='text-sm '>Account Signup</p>
						</div>
					</div>
					<div className="flex flex-col ">
						<p className='font-semibold'>Help</p>
						<div className='flex flex-col gap-1 mt-5'>
							<p className='text-sm '>Shoppy Help</p>
							<p className='text-sm '>Returns</p>
							<p className='text-sm '>Track Orders</p>
							<p className='text-sm '>Contact Us</p>
							<p className='text-sm '>Feedback</p>
							<p className='text-sm '>Security & Fraud</p>
						</div>
					</div>
				</div>

			</div>

			<hr className="flex h-px my-8 bg-gray-300 border-0 shadow-sm " />
			<div className="flex flex-col gap-2.5 justify-between  md:gap-0 md:flex-row">
				<div className="flex gap-10">
					<span className='flex gap-1.5 text-xs font-medium text-gray-800 items-center'><Image src='/icons/suitcase.svg' alt='hello' height={20} width={20} /> Become Seller</span>
					<span className='flex gap-1.5 text-xs font-medium text-gray-800 items-center'><Image src='/icons/gift.svg' alt='hello' height={20} width={20} /> Gift Cards</span>
					<span className='flex gap-1.5 text-xs font-medium text-gray-800 items-center'><Image src='/icons/help.svg' alt='hello' height={20} width={20} /> Help Center</span>

				</div>
				<div className="flex gap-10 mt-2 md:mt-0">
					<p className='text-xs font-medium text-gray-800'>Terms of Service</p>
					<p className='text-xs font-medium text-gray-800'>Privacy & Policy</p>
				</div>
				<div className="flex">
					<p className='text-xs font-medium text-gray-800'>© All Rights Reserved 2023</p>
				</div>
			</div>
		</section>
	)
}
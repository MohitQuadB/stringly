import React, { useState } from 'react'
import JoinPage from '../components/JoinPage';
import TestimonialGrid from '../components/TestimonialGrid';

function About() {
	const [hovered, setHovered] = useState([false, false, false]);

	const handleHover = (index) => {
		if (!hovered[index]) {
			const newHovered = [...hovered];
			newHovered[index] = true;
			setHovered(newHovered);
		}
	};

	return (
		<>
			<section>
				<div className='relative w-full'>
					<img src="./about/heroImg.png" alt="Premium Features" className='w-full h-screen object-cover sm:h-screen md:h-auto' />
					<div className='flex items-center flex-col justify-center absolute top-80 text-center left-4 md:top-[35%] lg:top-[35%] lg:left-[30%] p-4 text-white lg:w-[560px] lg:h-[254px]'>
						<h1 className='font-bold font-roboto leading-[48px] lg:leading-[67px] text-[40px] lg:text-[56px]'>
							Discover Our Story</h1>

						<p className='mt-4 text-lg text-center font-roboto font-regular leading-[27px]'>
							Explore the vision behind Stringly and our commitment to redefining connections in a luxurious way.
						</p>
						<div class="flex space-x-4 my-10">
							<button class="px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100">
								Join Us
							</button>
							<button class="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</section>
			<section>
				{/* first card */}
				<div
					className={`ppp p-4 my-16 py-8 lg:p-0 lg:flex relative items-center justify-between pt-24 ${hovered[0] ? 'hovered' : ''}`}
					onMouseEnter={() => handleHover(0)}
				>
					<div className={`child hidden lg:block w-[616px] ml-[100px] m-auto opacity-0`}>
						<p className='font-roboto font-bold text-[40px] leading-[48px] py-8'>
							Our Journey: Crafting Meaningful Connections Through Luxury
						</p>
						<p className='text-[18px] font-roboto font-regular leading-[27px]'>
							At Stringly, we believe in transforming the way people connect. Our mission is to blend luxury with technology, creating a unique platform for both dating and networking.
						</p>
						<div className='flex items-center justify-evenly'>
							<div className='flex flex-col w-[296px]'>
								<p className='text-[20px] font-roboto my-4 font-bold leading-[28px]'>
									Our Inspiration
								</p>
								<p className='font-roboto font-regular my-4 text-[16px] leading-[24px]'>
									Driven by a passion for meaningful connections and user empowerment, we innovate continuously.
								</p>
							</div>
							<div className='w-[296px]'>
								<p className='text-[20px] my-4 font-roboto font-bold leading-[28px] my-4'>
									Founding Team
								</p>
								<p className='my-4 mx-4'>
									Our diverse team combines expertise in technology, design, and relationship-building for your benefit.
								</p>
							</div>
						</div>
					</div>
					<div className='lg:w-auto z-20'>
						<img src="./about/PageImage1.png" alt="" className='h-screen lg:h-auto object-cover' />
					</div>
				</div>
				{/* second card */}
				<div className={`ppp p-4 py-8 lg:p-0 lg:flex items-center justify-between ${hovered[1] ? 'hovered' : ''}`} onMouseEnter={() => handleHover(1)}>
					<div className='z-20'>
						<img src="./about/PageImage2.png" alt="" className='h-screen lg:h-auto object-cover' />
					</div>
					<div className='child-2 hidden lg:block w-[756px] w-[616px] ml-[100px] m-auto  '>
						<div>
							<p className='font-roboto font-bold text-[40px] leading-[48px]'>
								Our Commitment to Innovation and Privacy
							</p>
							<p className='font-roboto font-regular text-[18px] leading-[27px] py-8'>
								At Stringly, we prioritize innovation and user privacy in every aspect of our platform. Our mission is to empower users to forge meaningful connections in a secure environment.
							</p>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
							<div>
								<h2 class="text-6xl font-bold text-blue-900 mb-2">100%</h2>
								<p class="text-lg text-gray-700">Innovation drives us to create exceptional user experiences.</p>
							</div>
							<div>
								<h2 class="text-6xl font-bold text-blue-900 mb-2">100%</h2>
								<p class="text-lg text-gray-700">Privacy ensures your connections are secure and confidential.</p>
							</div>
						</div>
						<div class="flex space-x-4">
							<button class="px-8 py-4 border-2 border-black text-black text-lg rounded-xl hover:bg-black hover:text-white transition-colors">
								Learn More
							</button>
							<button class="px-8 py-4 text-black text-xl flex items-center space-x-2 hover:underline">
								<span>Join Us</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>
			<main>
				<div className="max-w-6xl mx-auto text-center my-16">
					<h1 className='text-3xl font-bold text-black mb-4'>Our Team</h1>
					<p className='text-gray-600 text-lg mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div class="w-full p-4 md:p-8">
					<div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
						<div class="flex flex-col">
							<div class="aspect-[4/3] mb-4 overflow-hidden">
								<img src="./about/Defualt.png" alt="Erika Fisher" class="w-full h-full object-cover" />
							</div>
							<h3 class="text-pink-500 font-bold text-lg md:text-xl">Erika Fisher</h3>
							<p class="text-gray-600 text-sm">Lorem Ipsum</p>
						</div>
						<div class="flex flex-col">
							<div class="aspect-[4/3] mb-4 overflow-hidden">
								<img src="./about/Default2.png" alt="Michaela" class="w-full h-full object-cover" />
							</div>
							<h3 class="text-pink-500 font-bold text-lg md:text-xl">Michaela</h3>
							<p class="text-gray-600 text-sm">Lorem Ipsum</p>
						</div>
						<div class="flex flex-col">
							<div class="aspect-[4/3] mb-4 overflow-hidden">
								<img src="/api/placeholder/400/300" alt="Benstone Cobb" class="w-full h-full object-cover" />
							</div>
							<h3 class="text-pink-500 font-bold text-lg md:text-xl">Benstone Cobb</h3>
							<p class="text-gray-600 text-sm">Lorem Ipsum</p>
						</div>
					</div>
				</div>
			</main>
			<section>
				<div className='relative w-full'>
					<img src="./about/Frame42.png" alt="Premium Features" className='w-full h-screen object-cover sm:h-screen md:h-auto' />
				</div>
			</section>
			<TestimonialGrid />
			<section>
				<div className="h-screen py-12 px-6">
					<div className="max-w-6xl mx-auto text-center">
						<h1 className="text-3xl font-bold text-black mb-4">Our Journey</h1>
						<p className="text-gray-600 text-lg mb-10">
							Explore the milestones and culture that define Stringly.
						</p>
						<div className="flex gap-8">
							<div className="relative w-full h-96">
								<img src="./about/Placeholder-Image-1.png" alt="Journey Image 1" className="w-full object-cover" />
							</div>
							<div className="relative w-full h-96">
								<img src="./about/Placeholder-Image-2.png" alt="Journey Image 2" className="w-full object-cover" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<JoinPage />
		</>
	)
}

export default About


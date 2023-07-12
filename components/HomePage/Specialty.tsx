import Image from 'next/image';
import { FC } from 'react';

import img1 from '@/public/Exhaust.svg';
import img2 from '@/public/Accesories.svg';
import img3 from '@/public/Speed-impv.svg';
import Slider from 'react-slick';

export const Specialty: FC = () => {
	return (
		<>
			<div className="px-6 py-6 bg-blue-400">
				<div className="px-6 py-6 bg-white">
					<h2 className="text-2xl font-bold text-sky-500">OUR SPECIALTY</h2>
					<div className="mt-4">
						<p className="text-sm font-normal text-neutral-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor,
							in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
						</p>
					</div>
					<div className="my-8">
						<Slider>
							<div className="flex items-center justify-center text-center">
								<Image src={img3} alt="Speed-impv" className="mx-auto" />
								<h3 className="mt-4 text-lg font-semibold text-neutral-500">Speed-impv</h3>
							</div>
							<div className="flex items-center justify-center text-center">
								<Image src={img1} alt="Exhaust" className="mx-auto" />
								<h3 className="mt-4 text-lg font-semibold text-neutral-500">Exhaust</h3>
							</div>
							<div className="flex items-center justify-center text-center">
								<Image src={img2} alt="Accesories" className="mx-auto" />
								<h3 className="mt-4 text-lg font-semibold text-neutral-500">Accesories</h3>
							</div>
						</Slider>
					</div>
					<div className="my-4">
						<p className="text-sm font-light text-center text-neutral-400">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor,
							in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

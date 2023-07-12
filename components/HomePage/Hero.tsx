import Image from 'next/image';
import { FC } from 'react';

import HeroImage from '@/public/bg-hero.png';

export const Hero: FC = () => {
	return (
		<>
			<Image src={HeroImage} alt="Hero Image" className="object-cover w-full h-full" priority />
			<div className="px-10 py-6 bg-blue-500">
				<h1 className="text-4xl font-bold text-white">
					Discover
					<br />
					Your Wonder
				</h1>
				<p className="my-4 text-lg text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam.
				</p>
			</div>
		</>
	);
};

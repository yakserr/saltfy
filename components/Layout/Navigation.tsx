import { FC } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

import LogoImage from '@/public/Frame.svg';
import Image from 'next/image';

export const Navigation: FC = () => {
	return (
		<nav className="flex items-center justify-between px-8 py-2 lg:h-24">
			<Image src={LogoImage} alt="Logo" />
			<Bars3Icon className="w-7 h-7 lg:hidden" />
			<ul className="hidden lg:flex lg:items-center lg:space-x-8">
				<li className="text-sm font-medium text-gray-500 uppercase hover:text-gray-900">Home</li>
				<li className="text-sm font-medium text-gray-500 uppercase hover:text-gray-900">About</li>
				<li className="text-sm font-medium text-gray-500 uppercase hover:text-gray-900">Contact</li>
			</ul>
		</nav>
	);
};

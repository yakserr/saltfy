import { FC } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

import LogoImage from '@/public/Frame.svg';
import Image from 'next/image';

export const Navigation: FC = () => {
	return (
		<nav className="flex justify-between px-8 py-2">
			<Image src={LogoImage} alt="Logo" />
			<Bars3Icon className="w-7 h-7" />
		</nav>
	);
};

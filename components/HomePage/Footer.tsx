import { FC } from 'react';

import LogoImageWhite from '@/public/Frame-white.svg';
import Image from 'next/image';

export const Footer: FC = () => {
	return (
		<>
			<footer className="px-10 py-6 bg-blue-900 lg:px-36 lg:py-20">
				<Image src={LogoImageWhite} alt="Logo" />
				<div className="p-4 mt-6 bg-white">
					<div className="relative inline-block w-64 mb-4">
						<select className="block w-full px-4 py-2 pr-8 leading-tight text-blue-800 bg-white border border-gray-400 rounded shadow appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline">
							<option>Technology Department</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
							<svg
								className="w-4 h-4 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20">
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
					<div className="box-content w-36 lg:w-48">
						<p className="text-sm text-blue-500 lg:text-lg ">
							Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat
						</p>
					</div>
				</div>
				<div className="mt-6">
					<p className="mb-1 text-lg font-normal text-white lg:text-xl">Who We Are</p>
					<p className="mb-1 text-lg font-normal text-white lg:text-xl">Our Values</p>
					<p className="mb-1 text-lg font-normal text-white lg:text-xl">The Perks</p>
				</div>
			</footer>
		</>
	);
};

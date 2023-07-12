import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { profileItems } from '@/lib/const';

export const Profile: FC = () => {
	const settings = {
		arrows: false,
	};
	return (
		<>
			<div className="px-10 py-6 bg-white lg:px-36 lg:py-20">
				<h2 className="text-4xl font-semibold text-sky-500">Who we are</h2>
				<Slider {...settings}>
					{profileItems.map((item) => (
						<div className="mt-3" key={item.key}>
							<h3 className="text-lg font-normal text-neutral-900 lg:text-xl">{item.title}</h3>
							<p className="mt-2 text-sm font-normal text-neutral-500 lg:text-lg">{item.desc}</p>
						</div>
					))}
				</Slider>
				<div className="box-content mt-6">
					<div className="flex items-center justify-between lg:justify-around">
						<div>
							<span className="text-2xl font-medium ext-zinc-800">01</span>
							<span className="mx-1 text-2xl font-medium text-stone-300 leading">/</span>
							<span className="font-medium leading-3 text-stone-300">04</span>
						</div>
						<div className="flex">
							<div className="box-border p-1 bg-zinc-200">
								<ArrowLeftIcon className="w-6 h-6 text-stone-500" />
							</div>
							<div className="box-border p-1 bg-sky-500">
								<ArrowRightIcon className="w-6 h-6 text-white" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

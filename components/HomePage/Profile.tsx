import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

export const Profile: FC = () => {
	return (
		<>
			<div className="px-10 py-6 bg-white">
				<h2 className="text-4xl font-semibold text-sky-500">Who we are</h2>
				<div className="mt-2">
					<h3 className="text-lg font-normal text-black">Technology Company</h3>
					<p className="text-sm font-normal text-neutral-500">
						Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium,
						totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo.
					</p>
				</div>
				<div className="box-content mt-6">
					<div className="flex items-center justify-between">
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

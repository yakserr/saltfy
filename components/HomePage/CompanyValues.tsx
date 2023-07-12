import { MinusIcon } from '@heroicons/react/24/solid';
import { FC } from 'react';

import { companyValues } from '@/lib/const';

export const CompanyValues: FC = () => {
	return (
		<>
			<div className="px-10 py-6 bg-stone-100">
				<h2 className="text-4xl font-semibold text-center text-sky-500">Our Core Values</h2>
				<div className="mt-4">
					<p className="text-sm font-normal text-neutral-500">
						Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam
						eget egestas. Aliquet odio et lectus etiam sit.
					</p>
					<p className="mt-4 text-sm font-normal text-neutral-500">
						In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
					</p>
				</div>
				{companyValues.map((item) => (
					<div className="mt-8" key={item.key}>
						<div className="flex items-center">
							<MinusIcon className="w-6 h-6 mr-4 text-neutral-500" />
							<span className="text-2xl font-normal text-black">{item.title}</span>
						</div>
						<p className="mt-2 text-sm font-normal leading-normal text-neutral-500">{item.desc}</p>
					</div>
				))}
			</div>
		</>
	);
};

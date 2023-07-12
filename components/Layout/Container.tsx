import { FC, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
	return (
		<main className="h-16">
			<div className="px-8 py-2">{children}</div>
			<h2>Discover</h2>
			<h2>Your Wonder</h2>
		</main>
	);
};

import { CompanyValues } from '@/components/HomePage/CompanyValues';
import { Hero } from '@/components/HomePage/Hero';
import { Profile } from '@/components/HomePage/Profile';
import { Navigation } from '@/components/Layout/Navigation';

export default function Home() {
	return (
		<main>
			<Navigation />
			<Hero />
			<Profile />
			<CompanyValues />
		</main>
	);
}

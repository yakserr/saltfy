import { CompanyValues } from '@/components/HomePage/CompanyValues';
import { Footer } from '@/components/HomePage/Footer';
import { Hero } from '@/components/HomePage/Hero';
import { Profile } from '@/components/HomePage/Profile';
import { Specialty } from '@/components/HomePage/Specialty';
import { Navigation } from '@/components/Layout/Navigation';

export default function Home() {
	return (
		<main>
			<Navigation />
			<Hero />
			<Profile />
			<CompanyValues />
			<Specialty />
			<Footer />
		</main>
	);
}

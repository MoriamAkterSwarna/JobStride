
import { Outlet, ScrollRestoration } from 'react-router';
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import CTASection from '../components/CTASection';
import Board from '../components/Board';
const Home = () => {
 return (
 <>
 <ScrollRestoration />
    <HeroSection />

    <Board />
    <Feature />

    <Pricing />
    <CTASection />

 </>
 )
};

export default Home;
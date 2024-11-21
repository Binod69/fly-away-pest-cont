import Banner from './components/Banner/index';
import Features from './components/Work/index';
// import Cook from './components/Cook/index';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Faq from './components/Faq/Faq';

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Pricing />
      <Services />
      {/* <Cook /> */}
      <Reviews />
      <Faq />
    </main>
  );
}

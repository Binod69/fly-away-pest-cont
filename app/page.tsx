import Banner from './components/Banner/index';
import About from './components/About/index';
// import Cook from './components/Cook/index';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Faq from './components/Faq/Faq';

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Pricing />
      <Services />
      {/* <Cook /> */}
      <Reviews />
      <Faq />
    </main>
  );
}

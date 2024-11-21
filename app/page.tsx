import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Expert/index';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Pricing />
      <Services />
      <Cook />
      <Expert />
      {/* <Services /> */}
    </main>
  );
}

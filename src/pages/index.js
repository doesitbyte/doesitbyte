import Header from '@/components/header';
import Hero from '@/components/hero';
import Products from '@/components/products';

const Home = () => {
  return (
    <main className='w-full sm:max-w-xl pl-4 pr-4 m-auto'>
      <Header />
      <Hero />
      <Products />
    </main>
  )
}

export default Home;

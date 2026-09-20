import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Tentang from './components/Tentang';
import Galeri from './components/Galeri';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Beranda />
      <Tentang />
      <Galeri />
      <Kontak />
      <Footer />
    </>
  );
}

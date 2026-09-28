import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Tentang from './components/Tentang';
import Galeri from './components/Galeri';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import './style.css';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Beranda />
      <Tentang />
      <Galeri />
      <Kontak />
      <Footer />
    </div>
  );
};

export default App;

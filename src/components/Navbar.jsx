const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#beranda">Dev.</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#beranda">Beranda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tentang">Tentang Saya</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#galeri">Galeri Foto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kontak">Kontak</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

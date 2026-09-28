const Tentang = () => {
  return (
    <section id="tentang" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Tentang Saya</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body text-center p-4">
                <img
                  src="/foto/hijab.jpeg"
                  alt="Foto Profil"
                  className="foto-profil rounded-circle border border-dark border-4 mb-3"
                />

                <h3 className="card-title">Devinna Trisna</h3>
                <p className="card-text">
                  Seorang mahasiswa Pendidikan Ilmu Komputer yang memiliki ketertarikan
                  pada teknologi dan berbagai aktivitas di luar perkuliahan.
                  Di waktu luang, saya senang <i>travelling</i> dan menjelajahi
                  tempat-tempat bernuansa alam, mengabadikan momen melalui fotografi,
                  serta bermain <i>billiard</i>. Saya juga merupakan seorang{' '}
                  <i>cat lover</i> yang selalu senang menghabiskan waktu bersama kucing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;

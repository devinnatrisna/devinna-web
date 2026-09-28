const Kontak = () => {
  return (
    <section id="kontak" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Kontak</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <p>Email: <a href="mailto:vinnatrisna13@gmail.com">vinnatrisna13@gmail.com</a></p>
                <p>WhatsApp: 0812-2438-5242</p>
                <p>Instagram: <a href="https://www.instagram.com/dv_xzyn" target="_blank" rel="noreferrer">@dv.xzyn</a></p>
                <p className="mb-0">Alamat: Bandung, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;

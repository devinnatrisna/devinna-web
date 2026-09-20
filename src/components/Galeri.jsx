const foto = [
  { src: '/foto/billiard.jpeg', alt: 'Foto 1' },
  { src: '/foto/cafe.jpeg', alt: 'Foto 2' },
  { src: '/foto/game.jpeg', alt: 'Foto 3' },
  { src: '/foto/konvoi.jpeg', alt: 'Foto 4' },
  { src: '/foto/kucing.jpeg', alt: 'Foto 5' },
  { src: '/foto/renang.jpeg', alt: 'Foto 6' },
];

export default function Galeri() {
  return (
    <section id="galeri">
      <h2>Galeri Foto</h2>

      <div className="galeri-container">
        {foto.map((item) => (
          <img key={item.src} src={item.src} alt={item.alt} />
        ))}
      </div>
    </section>
  );
}

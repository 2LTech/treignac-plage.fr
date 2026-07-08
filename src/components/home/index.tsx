import Image from "next/image";
import Footer from "../assets/footer";
import Header from "../assets/header";

const googleMapsUrl =
  "https://www.google.fr/maps/place/Treignac+Plage+Restaurant/@45.5601224,1.814686,17z/data=!4m6!3m5!1s0x47f8ff18461683e7:0x309b3107c09ceb0c!8m2!3d45.5601224!4d1.814686!16s%2Fg%2F11zglw6r6y";
const facebookUrl = "https://www.facebook.com/profile.php?id=61591464093241";

const menuHighlights = ["Restaurant", "Bar", "Snack", "Glacier"];

const moments = [
  {
    title: "Déjeuner les pieds légers",
    text: "Une table simple après la baignade, la plage à quelques pas et le lac toujours dans le regard.",
  },
  {
    title: "Verre frais face à l'eau",
    text: "On s'installe pour un moment doux : une boisson, une planche de charcuterie, un rayon de soleil.",
  },
  {
    title: "Pause goûter et glaces",
    text: "Après le sable, les jeux ou la balade, le glacier remet tout le monde d'accord.",
  },
];

const Home = () => (
  <main>
    <Header inHome />

    <section className="hero" aria-label="Accueil" id="top">
      <div className="heroContent">
        <div className="heroRow">
          <div className="heroLogo">
            <p className="eyebrow">Restaurant de plage · Lac des Bariousses</p>
            <Image
              src="https://2ltech.github.io/treignac-plage.fr/logo-nobackground.png"
              alt=""
              width={1392}
              height={1392}
              sizes="100%"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
          <p className="lead">
            Restaurant, bar, snack et glacier au bord de l'eau : une adresse
            lumineuse pour manger, trinquer et prolonger les belles journées au
            lac.
          </p>
        </div>
        <div className="actions" aria-label="Actions principales">
          <a className="button primary" href="#venir">
            Voir l'itinéraire
          </a>
          <a className="button secondary" href="#carte">
            Découvrir l'ambiance
          </a>
        </div>
      </div>
    </section>

    <section className="intro" aria-label="Presentation">
      <div>
        <p className="sectionKicker">Au bord de l'eau</p>
        <h2>Une pause claire, simple, au rythme de la plage.</h2>
      </div>
      <p>
        Installé à Treignac, le restaurant vit avec le lac des Bariousses :
        sable clair, baignade, activités nautiques et grands arbres tout autour.
        On y vient naturellement, pour une assiette, une glace, un café ou un
        moment en terrasse entre deux baignades.
      </p>
    </section>

    <section className="menuBand" id="carte" aria-label="Carte">
      <div className="menuCopy">
        <p className="sectionKicker">Carte d'été</p>
        <h2>Restaurant - bar - snack - glacier.</h2>
        <p>
          L'esprit reprend celui du logo : noir, blanc, rose poudré, parasol et
          vacances. La carte reste accessible, fraîche et facile à partager
          autour d'une grande table.
        </p>
      </div>
      <div className="menuGrid">
        {menuHighlights.map((item) => (
          <article key={item} className="tile">
            <span aria-hidden="true" />
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>

    <section className="moments" aria-label="Moments">
      {moments.map((moment) => (
        <article key={moment.title}>
          <h3>{moment.title}</h3>
          <p>{moment.text}</p>
        </article>
      ))}
    </section>

    <section className="lake" id="lac" aria-label="Lac des Bariousses">
      <div className="lakeImage">
        <Image
          src="https://2ltech.github.io/treignac-plage.fr/lac-bariousses.jpg"
          alt="Plage du lac des Bariousses à Treignac"
          width={1200}
          height={786}
        />
      </div>
      <div className="lakeText">
        <p className="sectionKicker">Treignac · Corrèze</p>
        <h2>Le lac tout près, la terrasse juste là.</h2>
        <p>
          Le lac des Bariousses est connu pour sa plage ombragée, sa baignade
          surveillée en juillet-août et ses activités de plein air. Le
          restaurant accompagne cette ambiance douce : on arrive à pied depuis
          la plage, on s'attarde, puis on repart quand la lumière baisse.
        </p>
        <dl>
          <div>
            <dt>Adresse</dt>
            <dd>Lac des Bariousses, 36 route de Guéret, 19260 Treignac</dd>
          </div>
          <div>
            <dt>Ambiance</dt>
            <dd>Terrasse, plage, famille, groupes d'amis</dd>
          </div>
        </dl>
      </div>
    </section>

    <section className="visit" id="venir" aria-label="Venir au restaurant">
      <div>
        <p className="sectionKicker">Acces</p>
        <h2>Direction la plage de Treignac.</h2>
        <p>
          Le restaurant est situé au Lac des Bariousses, sur la rive. Le plus
          simple est de lancer l'itinéraire et de se laisser guider jusqu'au
          parking de la plage.
        </p>
      </div>
      <div className="liens">
        <a
          className="button primary"
          href={googleMapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Ouvrir dans Google Maps
        </a>
        <a
          className="button secondary"
          href="https://www.openstreetmap.org/?mlat=45.560058&mlon=1.814788#map=19/45.560058/1.814788"
          target="_blank"
          rel="noreferrer"
        >
          Ouvrir dans OpenStreetMap
        </a>
      </div>
    </section>
    <section className="social" aria-label="Réseaux sociaux">
      <div className="liens">
        <a
          className="button secondary"
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
        >
          Suivez-nous sur Facebook
        </a>
      </div>
    </section>
    <Footer />
  </main>
);

export default Home;

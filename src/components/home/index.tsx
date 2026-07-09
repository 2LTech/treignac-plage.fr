import Image from 'next/image'

import Footer from '../assets/footer'
import Header from '../assets/header'
import Button from '../assets/button'
import Carousel from '../carousel'
import Section from '../assets/section'

import './index.css'

// Data
const googleMapsUrl =
  'https://www.google.fr/maps/place/Treignac+Plage+Restaurant/@45.5601224,1.814686,17z/data=!4m6!3m5!1s0x47f8ff18461683e7:0x309b3107c09ceb0c!8m2!3d45.5601224!4d1.814686!16s%2Fg%2F11zglw6r6y'
const openStreetMapUrl =
  'https://www.openstreetmap.org/?mlat=45.560058&mlon=1.814788#map=19/45.560058/1.814788'
const facebookUrl = 'https://www.facebook.com/profile.php?id=61591464093241'

const menuHighlights = ['Restaurant', 'Bar', 'Snack', 'Glacier']

const moments = [
  {
    title: 'Déjeuner les pieds légers',
    text: 'Une table simple après la baignade, la plage à quelques pas et le lac toujours dans le regard.'
  },
  {
    title: "Verre frais face à l'eau",
    text: "On s'installe pour un moment doux : une boisson, une planche de charcuterie, un rayon de soleil."
  },
  {
    title: 'Pause goûter et glaces',
    text: "Après le sable, les jeux ou la balade, le glacier remet tout le monde d'accord."
  }
]

/**
 * Home
 * @returns Home
 */
const Home = () => (
  <main>
    <Header inHome />

    <Section
      className="hero"
      classNames={{ children: 'heroContent' }}
      title={{
        kicker: 'Restaurant de plage · Lac des Bariousses',
        label: (
          <Image
            src="/logo-nobackground.png"
            alt=""
            width={1392}
            height={1392}
            sizes="100%"
            style={{
              width: '100%',
              height: 'auto'
            }}
            loading="eager"
          />
        ),
        extra: (
          <div className="heroActions" aria-label="Actions principales">
            <Button
              type="primary"
              href="https://bookings.zenchef.com/results?rid=386486&pid=1001"
              dark
              external
            >
              Réservez maintenant
            </Button>
            <Button type="primary" href="#venir" dark>
              Voir l&apos;itinéraire
            </Button>
            <Button type="secondary" href="#ambiance">
              Découvrir l&apos;ambiance
            </Button>
          </div>
        )
      }}
      aria-label="Accueil"
      id="top"
    >
      <h1>
        Restaurant, bar, snack et glacier au bord de l&apos;eau : une adresse
        lumineuse pour manger, trinquer et prolonger les belles journées au lac.
      </h1>
    </Section>

    <Section
      id="ambiance"
      title={{
        kicker: "Au bord de l'eau",
        label: 'Une pause claire, simple, au rythme de la plage.'
      }}
      aria-label="Presentation"
    >
      <p>
        Installé à Treignac, le restaurant vit avec le lac des Bariousses :
        sable clair, baignade, activités nautiques et grands arbres tout autour.
        On y vient naturellement, pour une assiette, une glace, un café ou un
        moment en terrasse entre deux baignades.
      </p>
    </Section>

    <Section
      background="pink"
      id="carte"
      title={{
        kicker: "Carte d'été",
        label: 'Restaurant - bar - snack - glacier.',
        subLabel:
          " L'esprit reprend celui du logo : noir, blanc, rose poudré, parasol et vacances. La carte reste accessible, fraîche et facile à partager autour d'une grande table."
      }}
      aria-label="Carte"
    >
      <div className="menuGrid">
        {menuHighlights.map((item) => (
          <article key={item} className="tile">
            <span aria-hidden="true" />
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </Section>

    <Section
      className="moments"
      classNames={{ children: 'momentsChildren' }}
      background="pink"
      noPadding
      aria-label="Moments"
    >
      {moments.map((moment) => (
        <article key={moment.title}>
          <h3>{moment.title}</h3>
          <p>{moment.text}</p>
        </article>
      ))}
    </Section>

    <Section
      id="galerie"
      title={{
        kicker: 'Galerie photo',
        label: 'Quelques images avant de venir.'
      }}
      aria-label="Galerie photo"
    >
      <Carousel />
    </Section>

    <Section
      id="lac"
      classNames={{ children: 'terraceImage' }}
      title={{
        kicker: 'Treignac · Corrèze',
        label: 'Le lac tout près, la terrasse juste là.',
        subLabel:
          "Le lac des Bariousses est connu pour sa plage ombragée, sa baignade surveillée en juillet-août et ses activités de plein air. Le restaurant accompagne cette ambiance douce : on arrive à pied depuis la plage, on s'attarde, puis on repart quand la lumière baisse.",
        extra: (
          <dl>
            <div>
              <dt>Adresse</dt>
              <dd>Lac des Bariousses, 36 route de Guéret, 19260 Treignac</dd>
            </div>
            <div>
              <dt>Ambiance</dt>
              <dd>Terrasse, plage, famille, groupes d&apos;amis</dd>
            </div>
            <div />
          </dl>
        )
      }}
      invert
      aria-label="Lac des Bariousses"
    >
      <Image
        src="/galerie/terrasse.jpg"
        alt="Plage du lac des Bariousses à Treignac"
        width={1200}
        height={786}
      />
    </Section>

    <Section
      id="venir"
      background="black"
      classNames={{
        children: 'liens'
      }}
      title={{
        kicker: 'Accès',
        label: 'Direction la plage de Treignac.',
        subLabel:
          "Le restaurant est situé au Lac des Bariousses, sur la rive. Le plus simple est de lancer l'itinéraire et de se laisser guider jusqu'au parking de la plage."
      }}
      aria-label="Venir au restaurant"
    >
      <Button
        type="primary"
        href="https://bookings.zenchef.com/results?rid=386486&pid=1001"
        external
      >
        Réservez maintenant
      </Button>
      <Button type="primary" href={googleMapsUrl} external>
        Ouvrir dans Google Maps
      </Button>
      <Button type="primary" href={openStreetMapUrl} external>
        Ouvrir dans OpenStreetMap
      </Button>
    </Section>

    <Section
      classNames={{
        children: 'liens'
      }}
      invert
      title={{ kicker: 'Réseaux sociaux', label: 'Suivons-nous' }}
      aria-label="Réseaux sociaux"
    >
      <Button type="primary" href={facebookUrl} external dark>
        Suivez-nous sur Facebook
      </Button>
    </Section>
    <Footer />
  </main>
)

export default Home

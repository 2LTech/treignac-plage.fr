import Image from 'next/image'

import './index.css'
import Section from '../assets/section'

export interface Photo {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

const photos: Photo[] = [
  {
    src: '/galerie/plat_1.jpg',
    alt: 'Assiette servie au restaurant Treignac Plage',
    width: 803,
    height: 1024
  },
  {
    src: '/galerie/plat_2.jpg',
    alt: 'Plat du restaurant Treignac Plage',
    width: 768,
    height: 1024
  },
  {
    src: '/galerie/plat_3.jpg',
    alt: 'Plat estival servi à Treignac Plage',
    width: 768,
    height: 1024
  },
  {
    src: '/galerie/cuisine.jpg',
    alt: 'Cuisine du restaurant Treignac Plage',
    width: 768,
    height: 1024
  }
]

const Gallery = () => (
  <div className="gallery">
    {photos.map((photo) => (
      <figure
        className={`galleryPhoto ${photo.className ?? ''}`}
        key={photo.src}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
      </figure>
    ))}
  </div>
)

export default Gallery

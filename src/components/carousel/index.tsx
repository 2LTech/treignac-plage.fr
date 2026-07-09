'use client'

import Image from 'next/image'
import { useState } from 'react'

import './index.css'

// Interface
export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

// Photos
const photos: Photo[] = [
  {
    src: '/galerie/terrasse.jpg',
    alt: 'Terrasse du restaurant Treignac Plage au bord du lac',
    width: 2048,
    height: 1536
  },
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

/**
 * Carousel
 * @returns Carousel
 */
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1
    )
  }

  const goToNext = () => {
    setActiveIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1
    )
  }

  return (
    <div className="carousel">
      <div className="carouselViewport">
        <div
          className="carouselTrack"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <figure
              className="carouselSlide"
              key={photo.src}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority={index === 0}
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="carouselControls">
        <button
          className="carouselArrow"
          type="button"
          onClick={goToPrevious}
          aria-label="Photo précédente"
        >
          <span aria-hidden="true">&lt;</span>
        </button>

        <div className="carouselDots" aria-label="Choisir une photo">
          {photos.map((photo, index) => (
            <button
              className={`carouselDot ${index === activeIndex ? 'active' : ''}`}
              type="button"
              key={photo.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`Voir la photo ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>

        <button
          className="carouselArrow"
          type="button"
          onClick={goToNext}
          aria-label="Photo suivante"
        >
          <span aria-hidden="true">&gt;</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel

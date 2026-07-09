import Image from 'next/image'

import Button from '../button'

import './index.css'

// Interfaces
export interface Props {
  inHome?: boolean
}

/**
 * Header
 * @param props Props
 * @returns Header
 */
const Header = ({ inHome }: Props) => {
  return (
    <header className="nav">
      <Button
        className="brand"
        href={inHome ? '#top' : '/#top'}
        noAnimate
        aria-label="Treignac Plage Restaurant"
      >
        <Image
          src="https://2ltech.github.io/treignac-plage.fr/logo.jpg"
          alt=""
          width={44}
          height={44}
        />
        <span>Treignac </span>
        <span className="beach">Plage</span>
      </Button>
      {inHome ? (
        <nav aria-label="Navigation principale">
          <Button className="navButton" type="primary" href="#carte" noAnimate>
            Carte
          </Button>
          <Button className="navButton" type="primary" href="#lac" noAnimate>
            Le Lac
          </Button>
          <Button className="navButton" type="primary" href="#venir" noAnimate>
            Venir
          </Button>
        </nav>
      ) : null}
    </header>
  )
}

export default Header

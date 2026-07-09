import Image from 'next/image'

import Button from '../button'

import './index.css'

// Props
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
        <Image src="/logo.jpg" alt="" width={44} height={44} />
        <span className="broadway">Treignac </span>
        <span className="beach">Plage</span>
      </Button>
      {inHome ? (
        <nav aria-label="Navigation principale">
          <Button className="navButton" type="primary" href="#carte" noAnimate>
            Carte
          </Button>
          <Button
            className="navButton gallery"
            type="primary"
            href="#galerie"
            noAnimate
          >
            Galerie
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

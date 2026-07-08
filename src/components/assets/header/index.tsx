import Image from "next/image";

export interface Props {
  inHome?: boolean;
}

const Header = ({ inHome }: Props) => {
  return (
    <header className="nav">
      <a
        className="brand"
        href={inHome ? "#top" : "/#top"}
        aria-label="Treignac Plage Restaurant"
      >
        <Image
          src="https://2ltech.github.io/treignac-plage.fr/logo.jpg"
          alt=""
          width={44}
          height={44}
        />
        <span>Treignac Plage</span>
      </a>
      {inHome ? (
        <nav aria-label="Navigation principale">
          <a href="#carte">Carte</a>
          <a href="#lac">Le lac</a>
          <a href="#venir">Venir</a>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;

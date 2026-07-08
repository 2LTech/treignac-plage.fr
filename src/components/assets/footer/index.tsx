const Footer = () => {
  return (
    <section className="footer" aria-label="Bas de page">
      <a href="/legal">Mentions légales</a>
      <div>
        Conçu avec{" "}
        <img
          src="/heart.svg"
          alt="amour"
          className="heart"
          width={14}
          height={14}
        />{" "}
        par{" "}
        <a href="https://2ltech.fr/" target="_blank" rel="noreferrer">
          2LTech
        </a>
      </div>
    </section>
  );
};

export default Footer;

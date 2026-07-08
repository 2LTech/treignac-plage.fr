import "./index.css";

export interface Props {
  children: React.ReactElement | React.ReactElement[] | string;
  className?: string;
  type?: "primary" | "secondary";
  href: string;
  noAnimate?: boolean;
  dark?: boolean;
  external?: boolean;
}

const Button = ({
  children,
  className,
  type,
  href,
  noAnimate,
  dark,
  external,
}: Props) => (
  <a
    className={`button ${className ?? ""} ${type ?? ""} ${noAnimate ? "noanimate" : ""} ${dark ? "dark" : ""}`}
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
  >
    {children}
  </a>
);

export default Button;

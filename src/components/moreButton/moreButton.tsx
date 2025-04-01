import Link from "next/link";

interface MoreButtonProps {
  href: string; // URL dinámica
  label?: string; // Texto opcional del botón
}

function MoreButton({ href, label = "Ver Más" }: MoreButtonProps) {
  return (
    <div className="moreButtonContainer">
      <Link href={href}>
        <button className="moreButton">{label}</button>
      </Link>
    </div>
  );
}

export default MoreButton;

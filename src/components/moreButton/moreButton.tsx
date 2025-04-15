import Link from "next/link";

interface MoreButtonProps {
  href: string; // URL dinámica
  label?: string; // Texto opcional del botón
}

function MoreButton({ href, label = "Ver Más" }: MoreButtonProps) {
  return (
    <div>
      <Link href={href}>
        <button className="flex text-center bg-white p-1 text-black rounded-lg hover:border-amber-50 border-1 hover:bg-black hover:text-white transition-all hover:transition-all hover:scale-110 cursor-pointer">
          {label}
        </button>
      </Link>
    </div>
  );
}

export default MoreButton;

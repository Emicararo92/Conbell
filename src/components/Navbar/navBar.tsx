"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logoBlack from "../../../public/logod.png";
import { IoMenu, IoClose } from "react-icons/io5";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  if (!hasMounted) return null; // evita hydration mismatch

  return (
    <nav className="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a href={"/"} className="flex">
          <Image src={logoBlack} alt="Logo" width={80} height={80} priority />
        </a>

        <button
          className="lg:hidden text-black"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>

        <div className="hidden lg:flex flex-grow justify-end space-x-6">
          <a
            href="/Local"
            className="text-lg font-semibold hover:text-gray-600"
          >
            Showrooms
          </a>

          <div className="relative">
            <button
              className="text-lg font-semibold hover:text-gray-600"
              onClick={() => toggleDropdown("lineaDeProductos")}
            >
              Linea De Productos
            </button>
            {openDropdown === "lineaDeProductos" && (
              <div className="absolute bg-white shadow-lg rounded-lg p-2 space-y-2 w-40 top-8 left-0">
                <a
                  href="Cocinas"
                  className="text-black hover:bg-gray-100 p-2 block"
                >
                  Cocinas
                </a>
                <a
                  href="Vestidores"
                  className="text-black hover:bg-gray-100 p-2 block"
                >
                  Vestidores
                </a>
                <a
                  href="Placares"
                  className="text-black hover:bg-gray-100 p-2 block"
                >
                  Placares
                </a>
                <a
                  href="Complementos"
                  className="text-black hover:bg-gray-100 p-2 block"
                >
                  Complementos
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="text-lg font-semibold hover:text-gray-600"
              onClick={() => toggleDropdown("nosotros")}
            >
              Nosotros
            </button>
            {openDropdown === "nosotros" && (
              <div className="absolute bg-white shadow-lg rounded-lg p-2 space-y-2 w-40 top-8 left-0">
                <a
                  href="Historia"
                  className="text-black hover:bg-gray-100 p-2 block"
                >
                  Nuestra Historia
                </a>
                <a
                  href="Fabrica"
                  className="text-black hover:bg-gray-100 p-2 block"
                >
                  Fábrica
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="text-lg font-semibold hover:text-gray-600"
              onClick={() => toggleDropdown("contacto")}
            >
              Contacto
            </button>
            {openDropdown === "contacto" && (
              <div className="absolute bg-white shadow-lg rounded-lg p-2 space-y-2 w-40 top-8 left-0">
                <a
                  href="Contact"
                  className="text-black hover:bg-gray-100 p-2 block"
                >
                  ¿Te llamamos?
                </a>
                <a
                  href="ComoLlegar"
                  className="text-black hover:bg-gray-100 p-2 block"
                >
                  ¿Cómo llegar?
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:hidden fixed inset-0 bg-white z-40 pt-20 pb-8 px-6 overflow-y-auto`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-6 text-black text-xl font-bold"
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        <div className="flex flex-col space-y-6">
          <a
            href="Showroom"
            className="text-lg font-semibold text-black hover:text-gray-600 py-2"
            onClick={closeMenu}
          >
            Showrooms
          </a>

          {/* Mobile Dropdown: Linea De Productos */}
          <div>
            <button
              className="text-lg font-semibold text-black hover:text-gray-600 py-2 w-full text-left flex justify-between items-center"
              onClick={() => toggleDropdown("lineaDeProductos")}
            >
              Linea De Productos
              <span className="transform transition-transform">
                {openDropdown === "lineaDeProductos" ? "↑" : "↓"}
              </span>
            </button>
            <div
              className={`${
                openDropdown === "lineaDeProductos" ? "block" : "hidden"
              } pl-4 space-y-3 mt-2`}
            >
              <a
                href="Cocinas"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Cocinas
              </a>
              <a
                href="Vestidores"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Vestidores
              </a>
              <a
                href="Placares"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Placares
              </a>
              <a
                href="Complementos"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Complementos
              </a>
            </div>
          </div>

          {/* Mobile Dropdown: Nosotros */}
          <div>
            <button
              className="text-lg font-semibold text-black hover:text-gray-600 py-2 w-full text-left flex justify-between items-center"
              onClick={() => toggleDropdown("nosotros")}
            >
              Nosotros
              <span className="transform transition-transform">
                {openDropdown === "nosotros" ? "↑" : "↓"}
              </span>
            </button>
            <div
              className={`${
                openDropdown === "nosotros" ? "block" : "hidden"
              } pl-4 space-y-3 mt-2`}
            >
              <a
                href="Historia"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Nuestra Historia
              </a>
              <a
                href="Fabrica"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Fábrica
              </a>
            </div>
          </div>

          {/* Mobile Dropdown: Contacto */}
          <div>
            <button
              className="text-lg font-semibold text-black hover:text-gray-600 py-2 w-full text-left flex justify-between items-center"
              onClick={() => toggleDropdown("contacto")}
            >
              Contacto
              <span className="transform transition-transform">
                {openDropdown === "contacto" ? "↑" : "↓"}
              </span>
            </button>
            <div
              className={`${
                openDropdown === "contacto" ? "block" : "hidden"
              } pl-4 space-y-3 mt-2`}
            >
              <a
                href="Contact"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                ¿Te llamamos?
              </a>
              <a
                href="ComoLlegar"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                ¿Cómo llegar?
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

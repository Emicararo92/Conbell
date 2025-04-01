"use client";

import { useState } from "react";
import Image from "next/image";
import logoBlack from "../../../public/logob.png";
import { IoMenu, IoClose } from "react-icons/io5";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50 py-4 px-6 transition-all">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo alineado a la izquierda */}
        <a href={"/"} className="flex">
          <Image src={logoBlack} alt="Logo" width={80} height={80} priority />
        </a>

        {/* Menú hamburguesa en dispositivos pequeños */}
        <button
          className="lg:hidden text-black"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>

        {/* Menú principal - versión desktop alineado a la derecha */}
        <div className="hidden lg:flex flex-grow justify-end space-x-6">
          {/* Link Showrooms */}
          <a
            href="/Showroom"
            className="text-lg font-semibold hover:text-gray-600"
          >
            Showrooms
          </a>

          {/* Dropdown: Nosotros */}
          <div className="relative">
            <button
              className="text-lg font-semibold hover:text-gray-600"
              onClick={() => toggleDropdown("nosotros")}
            >
              Nosotros
            </button>
            <div
              className={`${
                openDropdown === "nosotros" ? "block" : "hidden"
              } absolute bg-white shadow-lg rounded-lg p-2 space-y-2 w-40 top-8 left-0`}
            >
              <a
                href="#nuestra-historia"
                className="text-black hover:bg-gray-100 p-2 block"
              >
                Nuestra Historia
              </a>
              <a
                href="#vendedores"
                className="text-black hover:bg-gray-100 p-2 block"
              >
                Vendedores
              </a>
              <a
                href="#fabrica"
                className="text-black hover:bg-gray-100 p-2 block"
              >
                Fábrica
              </a>
            </div>
          </div>

          {/* Dropdown: Contacto */}
          <div className="relative">
            <button
              className="text-lg font-semibold hover:text-gray-600"
              onClick={() => toggleDropdown("contacto")}
            >
              Contacto
            </button>
            <div
              className={`${
                openDropdown === "contacto" ? "block" : "hidden"
              } absolute bg-white shadow-lg rounded-lg p-2 space-y-2 w-40 top-8 left-0`}
            >
              <a
                href="Contact"
                className="text-black hover:bg-gray-100 p-2 block"
              >
                ¿Te llamamos?
              </a>
              <a
                href="#como-llegar"
                className="text-black hover:bg-gray-100 p-2 block"
              >
                ¿Cómo llegar?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:hidden fixed inset-0 bg-white z-40 pt-20 pb-8 px-6 overflow-y-auto`}
      >
        <div className="flex flex-col space-y-6">
          <a
            href="/Kitchen"
            className="text-lg font-semibold text-black hover:text-gray-600 py-2"
            onClick={closeMenu}
          >
            Showrooms
          </a>

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
                href="#nuestra-historia"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Nuestra Historia
              </a>
              <a
                href="#vendedores"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Vendedores
              </a>
              <a
                href="#fabrica"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                Fábrica
              </a>
            </div>
          </div>

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
                href="#contact-form"
                className="text-black hover:bg-gray-100 p-2 block rounded"
                onClick={closeMenu}
              >
                ¿Te llamamos?
              </a>
              <a
                href="#como-llegar"
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

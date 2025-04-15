import Image from "next/image";
import styles from "../../Styles/vendedores.module.css"; // Importamos los estilos

const TeamSection: React.FC = () => {
  return (
    <section className="bg-black mt-8 text-white py-12">
      <div className="container mx-auto">
        {/* Banner con imagen */}
        <div className={styles.banner + " mb-8"}>
          {" "}
          {/* Usamos la clase del banner importada */}
          <div className={styles.bannerContent}>
            <h2 className="text-3xl font-semibold text-[#ffffff] mb-4">
              Conoce a nuestro equipo
            </h2>
            <p className="text-lg">
              Estamos comprometidos a brindar soluciones con pasión e innovación
              a través de nuestro talentoso equipo.
            </p>
          </div>
        </div>

        {/* Sección del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between items-center h-[400px]">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="https://res.cloudinary.com/diefdex1h/image/upload/v1744751657/dueno1_hrzft4.webp"
                alt="Carlos Mendoza"
                layout="fill"
                className="rounded-full object-cover border-4 border-[#b8860b]"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#b8860b]">
              Carlos Mendoza
            </h3>
            <p className="text-sm text-gray-600">Dueño</p>
            <p className="text-gray-700 mt-4 italic">
              Carlos es el fundador de la empresa y su visión impulsa cada
              proyecto. Con más de 10 años en la industria, lidera con pasión y
              estrategia.
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between items-center h-[400px]">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="https://res.cloudinary.com/diefdex1h/image/upload/v1744751606/vendedor1_cgu9qu.jpg"
                alt="Lucio González"
                layout="fill"
                className="rounded-full object-cover border-4 border-[#b8860b]"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#b8860b]">
              Lucio González
            </h3>
            <p className="text-sm text-gray-600">Vendedor</p>
            <p className="text-gray-700 mt-4 italic">
              Lucio es experto en la gestión de relaciones con clientes. Siempre
              busca la mejor solución para cada uno de ellos, lo que lo
              convierte en un pilar clave del equipo.
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between items-center h-[400px]">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="https://res.cloudinary.com/diefdex1h/image/upload/v1744751606/vendedor2_f2ilho.jpg"
                alt="Diego Rodríguez"
                layout="fill"
                className="rounded-full object-cover border-4 border-[#b8860b]"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#b8860b]">
              Diego Rodríguez
            </h3>
            <p className="text-sm text-gray-600">Vendedor</p>
            <p className="text-gray-700 mt-4 italic">
              Diego aporta su conocimiento técnico y su habilidad para conectar
              con los clientes, logrando siempre resultados sobresalientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

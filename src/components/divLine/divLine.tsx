import Image from "next/image";
import logo from "../../../public/logod.png";

function DivLine() {
  return (
    <div className="flex flex-col items-center my-4">
      <Image
        src={logo}
        alt="Logo Pequeño"
        width={150}
        height={150}
        className="mb-2"
      />
      <div className="w-full border-t" style={{ borderColor: "#B8860B" }} />{" "}
    </div>
  );
}

export default DivLine;

import Image from "next/image";
import pepeImage from "./pepe.jpg";

export default function Page() {
  return (
    <div className="bg-neutral-100 h-screen w-screen flex items-center justify-center gap-10 flex-wrap p-10">
      <Image src={pepeImage} alt="Picture of the author" />
    </div>
  );
}

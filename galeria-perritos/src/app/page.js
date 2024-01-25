import Image from "next/image";
import style from "./page.module.css";
import Foto from "./components/Foto";

export default function Home() {
  return (
    <main className={style.main}>
      <Foto/>
    </main>
  );
}
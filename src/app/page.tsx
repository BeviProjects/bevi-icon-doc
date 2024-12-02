import Link from "next/link";
import { CopyToClipboard } from "@/components/CopyToClipboard";

const Home = () => {
  return (
    <main className="main-home ds-flex flow-col-nw gap-lg">
      <div className="bv-container-sm pt-16 ds-flex-center flow-col-nw gap-sm">
        <h1>Bevi Icon</h1>
        <p>Biblioteca de ícones para projetos Bevi</p>
        <CopyToClipboard toCopy="npm i bevi-icon">
          <div className="bgc-primary-03 radius-xs p-inline-06 p-block-04">
            <span>npm i bevi-icon</span>
          </div>
        </CopyToClipboard>
        <div className="ds-flex flow-row-nw gap-sm pt-16">
          <Link href="/doc">Documentação</Link>|
          <Link href="/icons">Ícones</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;

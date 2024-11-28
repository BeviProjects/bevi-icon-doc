import React from "react";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Article } from "@/components/Article";
import Link from "next/link";
import { ButtonIcon } from "@/components/ButtonIcon";
import { BvIcon } from "bevi-icon";
import { CardIcon } from "./CardIcon";

export const metadata: Metadata = {
  title: "Documentação",
  description: "Aprenda como utilizar o Bevi Icon",
};

const Doc = () => {
  return (
    <div className="bv-container-sm">
      <Article className="ds-flex flow-col-nw gap-md">
        <section>
          <h1 className="pb-04">Bevi Icon</h1>
          <p className="font-size-lg">
            Esse sistema tem como objetivo auxiliar todos os funcionários da
            Bevi para utilização correta dos ícones.
          </p>
        </section>

        <section>
          <h2 className="pb-04">Como utilizar</h2>
          <p>
            Para visualizar os ícones você pode acessar a aba de{" "}
            <Link href="/icons">Coleções</Link> ou{" "}
            <Link href="/icons">Ícones</Link>, ao observar todos os ícones, pode
            notar que é possível clicar para ver mais opções, e dentro delas
            navegar e copiar o que desejar para o seu projeto com o Bevi Icon.
          </p>
          <p>Clique aqui para ver a interface:</p>
          <div className="ds-flex flow-row-nw gap-md">
            <ButtonIcon id="cube" name="Cube" />
            <ButtonIcon id="arrowForward" name="Arrow Forward" />
            <ButtonIcon id="eco" name="Eco" />
          </div>
        </section>

        <section>
          <h3 className="pt-10 pb-04">Tipos de ícones</h3>
          <h4 className="pt-06 pb-02">Variantes</h4>
          <p>
            A biblioteca de ícones da Bevi tem a separação de 4 variantes, são
            eles:
          </p>
          <div className="ds-grid grid-tpl-col-02 gap-md">
            <CardIcon
              title="Solid"
              description="Ícones solidos possuem sempre uma cor única."
              iconName="cube"
              iconVariant="solid"
            >
              <li>Permite a alteração para qualquer cor</li>
              <li>Ideal para aplicações pequenas</li>
              <li>Ideal para aplicação em texto</li>
            </CardIcon>
            <CardIcon
              title="Duo"
              description="Ícones de dois tons, vão sempre variar entre a cor primaria e secundária da Bevim com graus de opacidade."
              iconName="cube"
              iconVariant="duo"
            >
              <li>Ideal para aplicações grandes</li>
            </CardIcon>
            <CardIcon
              title="Dark"
              description="Ícones escuros se mantém em uma única cor, com graus de opacidade quando necessário."
              iconName="cube"
              iconVariant="dark"
            >
              <li>Permite a alteração para qualquer cor</li>
              <li>Ideal para fundos claros</li>
              <li>Ideal para aplicações grandes</li>
              <li>Ideal para aplicações pequenas</li>
            </CardIcon>
            <CardIcon
              title="Light"
              description="Ícones claros se mantém em uma única cor, com graus de opacidade quando necessário."
              iconName="cube"
              iconVariant="light"
            >
              <li>Permite a alteração para qualquer cor</li>
              <li>Ideal para fundos escuros</li>
              <li>Ideal para aplicações grandes</li>
              <li>Ideal para aplicações pequenas</li>
            </CardIcon>
          </div>
          <h4 className="pt-10 pb-02">Pesos</h4>
          <p>Também permite alterar o peso de alguns ícones, são eles:</p>
          <div className="ds-grid grid-tpl-col-02 gap-md">
            <CardIcon
              title="400 - Regular"
              description="Ícones com a linha mais fina em comparação aos ícones 600 - bold."
              iconName="arrowNorthEast"
              iconWeight={400}
            >
              <li>Permite a alteração para qualquer cor</li>
              <li>Se adapta a qualquer cor que quiser</li>
            </CardIcon>
            <CardIcon
              title="600 - Bold"
              description="Ícones com a linha mais grossa em comparação aos ícones 400 - regular."
              iconName="arrowNorthEast"
              iconWeight={600}
            >
              <li>Permite a alteração para qualquer cor</li>
              <li>Ideal para aplicações grandes</li>
            </CardIcon>
          </div>
        </section>
      </Article>
    </div>
  );
};

export default Doc;

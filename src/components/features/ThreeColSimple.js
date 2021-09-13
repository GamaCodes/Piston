import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const ListValue = styled.ul`
  ${tw`mt-4 text-sm font-medium text-white`}
  .itemLi {
    ${tw`my-2`}
  }
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-white`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

const ThreeCol = ({
  cards = [
    {
      imageSrc: "https://img.icons8.com/clouds/4x/sort-up.png",
      title: "MISIÓN",
      description:
        "Proporcionar y administrar los procesos y tecnología necesarios para desarrollar las habilidades personales, profesionales y técnicas del personal e incrementar la satisfacción del cliente en las áreas de ventas y postventa dentro de la red de distribuidores, expandiendo nuestro liderazgo para alcanzar año con año el volumen planeado y la cuota de mercado con la más alta rentabilidad.",
    },
    {
      imageSrc: "https://img.icons8.com/clouds/4x/administrator-male.png",
      title: "VALORES",
      l1: "Calidad",
      l2: "Responsabilidad",
      l3: "Innovación",
      l4: "Pasión",
      l5: "Respeto",
      l6: "Confianza",
    },
    {
      imageSrc: "https://img.icons8.com/clouds/4x/visible--v2.png",
      title: "VISIÓN",
      description:
        "Ser una empresa líder, respetada, confiable y admirada en el mercado, obteniendo el mayor grado de satisfacción de nuestros actuales y futuros clientes. Creando una relación comercial duradera con nuestros proveedores y clientes, construyendo un sólido lazo de confianza a través de los años.",
    },
  ],
  linkText = "Learn More",
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null,
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{card.title}</span>
                {card.description && (
                  <p className="description">{card.description}</p>
                )}
                {card.l1 && (
                  <ListValue>
                    <li className="itemLi">{card.l1}</li>
                    <li className="itemLi">{card.l2}</li>
                    <li className="itemLi">{card.l3}</li>
                    <li className="itemLi">{card.l4}</li>
                    <li className="itemLi">{card.l5}</li>
                    <li className="itemLi">{card.l6}</li>
                  </ListValue>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default ThreeCol;

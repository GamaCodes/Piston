import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../misc/Headings.js";
import TeamIllustrationSrc from "../../images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "../../images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-white`;

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block font-variante`;

const TwoCol = ({
  imageSrc = TeamIllustrationSrc,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  return (
    <div id="acerca">
      <Container>
        <TwoColumn>
          <ImageColumn>
            <Image
              css={imageCss}
              src="https://images.pexels.com/photos/3807695/pexels-photo-3807695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              imageBorder={imageBorder}
              imageShadow={imageShadow}
              imageRounded={imageRounded}
            />
            {imageDecoratorBlob && (
              <DecoratorBlob css={imageDecoratorBlobCss} />
            )}
          </ImageColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Heading>
                <HighlightedText>Política de Calidad</HighlightedText>
              </Heading>
              <Description>
                Efectuar servicios con niveles tecnológicos altamente
                satisfactorios, con una óptima calidad.
              </Description>
              <Description>
                Proveer a su personal la formación y herramientas necesarias
                para realizar sus tareas en el tiempo y forma adecuados.
              </Description>
              <Description>
                Estrechar la relación con sus proveedores y clientes, tanto
                externos como internos.
              </Description>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    </div>
  );
};

export default TwoCol;

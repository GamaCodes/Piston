import React from "react";
import tw from "twin.macro";

import LogoImage from "../../images/piston_logo.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-8 `;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center justify-center -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold text-primary-800 text-center`;

const SubscribeNewsletterColumn = tw(
  Column
)`text-center lg:text-left w-full! lg:w-auto! `;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 text-sm font-medium text-variant-900 text-center`;
const Input = tw.div`mt-4 text-white font-bold bg-primary-500 px-6 py-3 rounded border-2 border-primary-900 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;

const Divider = tw.div`my-8 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-64`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-variant-700`;
const NameText = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-primary-500 font-bold`;

const FiveColumnForm = () => {
  return (
    <Container>
      <Content>
        <SixColumns>
          <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>¿Necesitas ayuda?</ColumnHeading>
              <SubscribeText>
                Escríbenos contestaremos todas tus dudas.
              </SubscribeText>
              <Input>compras@transporteelpiston.com</Input>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>
          <CopywrightNotice>&copy; 2021 - Derechos Reservados</CopywrightNotice>
          <NameText>Tracto Transporte || El Pistón</NameText>
        </ThreeColRow>
      </Content>
    </Container>
  );
};

export default FiveColumnForm;

import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/TwoColumnWithVideo.js";
import Features from "../components/features/ThreeColSimple.js";
import MainFeature from "../components/features/TwoColWithButton.js";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature3 from "../components/features/TwoColWithButton2.js";
import MainFeature4 from "../components/features/TwoColWithButton3.js";
import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

const Home = () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block font-variante`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            TRACTO TRANSPORTE <HighlightedText>EL PISTÓN</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Acerca de"
      />
      <MainFeature
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.pexels.com/photos/7144181/pexels-photo-7144181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature3
        buttonRounded={false}
        textOnLeft={true}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.pexels.com/photos/7144181/pexels-photo-7144181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <Features
        heading={
          <>
            <HighlightedText>Pilares</HighlightedText>
          </>
        }
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature4
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Latest Offers"
        imageSrc={
          "https://images.pexels.com/photos/7144181/pexels-photo-7144181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            <HighlightedText>Seguridad</HighlightedText>
          </>
        }
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            <HighlightedText>Servicios</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};

export default Home;

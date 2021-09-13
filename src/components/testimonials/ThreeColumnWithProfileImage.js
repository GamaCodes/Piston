import React from "react";
import tw from "twin.macro";
import { ContentWithPaddingXl, Container } from "../misc/Layouts.js";
import { SectionHeading as Heading } from "../misc/Headings.js";

const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`max-w-xs mx-auto flex flex-col items-center bg-white`;
const Image = tw.img`w-full`;
const Quote = tw.blockquote`my-5 px-8 text-variant-500 font-medium leading-loose`;

const ProfileImage = ({
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc:
        "https://images.pexels.com/photos/7144177/pexels-photo-7144177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      quote:
        "Compra venta de automóviles, camiones nuevos y usados refacciones, accesorios, lubricantes, grasas, llantas, cámaras, tractores, implementos y remolques.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/5539540/pexels-photo-5539540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      quote:
        "Compra, renta y centa de aparatos de aire acondicionado, ventiladores, plantas de luz desde personales hasta industriales.",
    },
    {
      imageSrc:
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      quote:
        "Servicio de mantenimiento automotriz, refaccionaria y partes de colisión, así como el establecimiento y operación de talleres mecánicos, eléctrica, hojalatería, pintura y estética a vehículos automotores",
    },
  ],
}) => {
  return (
    <div id="servicios">
      <Container>
        <ContentWithPaddingXl>
          <Heading>{heading}</Heading>
          <Testimonials>
            {testimonials.map((testimonial, index) => (
              <TestimonialContainer key={index}>
                <Testimonial>
                  <Image src={testimonial.imageSrc} />
                  <Quote>{testimonial.quote}</Quote>
                </Testimonial>
              </TestimonialContainer>
            ))}
          </Testimonials>
        </ContentWithPaddingXl>
      </Container>
    </div>
  );
};

export default ProfileImage;

import React from "react";
import Button from "../Button/Button";
import { Ali, Anisha, Richard, Shanai } from "../../assets/images";
import AnimatedComponent from "../AnimatedComponent/AnimatedComponent";
import { fadeInY } from "../../utils/animatedVariants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialSection.scss";

const testimonies = [
  {
    id: 1,
    img: Anisha,
    name: "Anisha Li",
    testimony:
      " “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    id: 2,
    img: Ali,
    name: "Ali Bravo",
    testimony:
      "  “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    id: 3,
    img: Richard,
    name: "Richard Watts",
    testimony:
      " “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    id: 4,
    img: Shanai,
    name: "Shanai Gough",
    testimony:
      " “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <AnimatedComponent tag="h2" variants={fadeInY} className="testimonial-section__heading">
        What they’ve said
      </AnimatedComponent>
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        rewind={true}
        centeredSlides={false}
        initialSlide={1}
        breakpoints={{
          1000: {
            slidesPerView: 2.5,
            centeredSlides: true,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        {testimonies.map((testimony) => (
          <SwiperSlide key={testimony.id}>
            <AnimatedComponent tag="div" variants={fadeInY} className="testimonial-section__testimony">
              <img className="testimonial-section__avatar" src={testimony.img} alt="" />
              <h3 className="testimonial-section__name">{testimony.name}</h3>
              <p>{testimony.testimony}</p>
            </AnimatedComponent>
          </SwiperSlide>
        ))}
      </Swiper>
      <AnimatedComponent tag="div" variants={fadeInY}>
        <Button className="btn" text="Get Started" />
      </AnimatedComponent>
    </section>
  );
}

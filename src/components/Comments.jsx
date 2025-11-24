import ProfileImg from "../assets/profile-img.svg";
import ProfileStar from "../assets/comment-star.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Comments = () => {
  const comments = [
    {
      name: "Carla Samantoes-Diego",
      date: "12.09.2021",
      text: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George. Non-GMO, Heirloom – our seeds were tested and have the best germination ratings.",
    },
    {
      name: "Michael Evans",
      date: "21.02.2022",
      text: "Amazing quality seeds. Germination rate is high and packaging is very clean. Highly recommend for beginners.",
    },
    {
      name: "Sarah Miller",
      date: "05.06.2021",
      text: "Fast delivery and great customer support. Seeds sprouted perfectly in 6 days.",
    },
    {
      name: "Sarah Miller",
      date: "05.06.2021",
      text: "Fast delivery and great customer support. Seeds sprouted perfectly in 6 days.",
    },
    {
      name: "Michael Evans",
      date: "21.02.2022",
      text: "Amazing quality seeds. Germination rate is high and packaging is very clean. Highly recommend for beginners.",
    },
  ];

  return (
    <section className="comments-section">
      <div className="container">
        <h2 className="comments-title">What our clients say</h2>

        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
          }}
          className="comments-swiper"
        >
          {comments.map((c, index) => (
            <SwiperSlide key={index} className="comments-card">
              <div className="profile-comment">
                <img src={ProfileImg} alt="profile" />

                <div className="profile-nick">
                  <p>{c.name}</p>
                  <p>{c.date}</p>
                </div>
              </div>

              <div className="profile-star">
                <img src={ProfileStar} alt="star" />
              </div>

              <div className="profile-text">
                <p>{c.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Comments;

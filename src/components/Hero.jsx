import FireImg from "../assets/fire.svg";
import HeroImg from "../assets/hero-img.svg";
import LeafImg from "../assets/leaf.svg";
import BackLeaf from "../assets/back-leaf.png";

import Seed1 from "../assets/seed1.png";
import Seed2 from "../assets/seed2.png";
import Seed3 from "../assets/seed3.png";
import Seed4 from "../assets/seed4.png";

const Hero = () => {
  return (
    <section className="hero-section" data-aos="fade-up">
      <div className="container">
        <div className="hero-box">
          <div className="hero-left" data-aos="fade-right">
            <div className="hero-text">
              <h2 data-aos="fade-down">
                SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting
              </h2>
              <p data-aos="fade-up" data-aos-delay="200">
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings. Your easy growing experience is our
                guarantee
              </p>
            </div>

            <div className="hero-price" data-aos="fade-up" data-aos-delay="400">
              <div className="actual-price">
                <img src={FireImg} alt="" />
                <h3>$12.56</h3>
              </div>
              <div className="old-price">
                <h4>$15.56</h4>
              </div>
            </div>

            <div className="hero-btn" data-aos="fade-up" data-aos-delay="600">
              <button className="add-to-card">Add to card</button>
              <button className="discover">Discover</button>
            </div>
          </div>

          <div className="hero-right" data-aos="fade-left">
            <img src={HeroImg} alt="" />
          </div>
        </div>

        <div className="hero-seeds" data-aos="zoom-in-up" data-aos-delay="800">
          <div className="seed-img">
            <img className="seed-1" src={Seed1} alt="" />
            <img className="seed-3" src={Seed3} alt="" />
            <img className="seed-4" src={Seed4} alt="" />
          </div>
          <div className="seed-text">
            <h2>We sell seeds </h2>
            <p>that always sprout and gardening supplies which never break</p>
          </div>
          <div className="seed-img-1">
            <img src={Seed2} alt="" />
            <img src={Seed1} alt="" />
            <img src={Seed3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

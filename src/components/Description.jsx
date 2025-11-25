import DescriptionImg from "../assets/description.svg";
import BorderImg from "../assets/border.svg";

const Description = () => {
  return (
    <section className="description-section" data-aos="fade-up">
      <div className="container">
        {/* <img src={DescriptionImg} alt="Description" /> */}
        <div className="description-wrap">
          <div className="description-text" data-aos="fade-right">
            <h2 data-aos="fade-down">
              Seedra helps to grow fast and <br /> efficiant
            </h2>

            <p data-aos="fade-up" data-aos-delay="100">
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
              Spinach commom culinary uses: salads, soups, smoothies, lasagne,
              pizza, pies, risotto, and more
            </p>

            <p data-aos="fade-up" data-aos-delay="300">
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Spinach commom culinary uses: salads, soups,
              smoothies, lasagne, pizza, pies, risotto, and more
            </p>

            <p data-aos="fade-up" data-aos-delay="400">
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product. SEEDRA Spinach
              Seeds - contains 600 seeds in 2 Packs and professional
              instructions created by PhD Helga George
            </p>
          </div>

          <div className="description-img" data-aos="fade-left">
            <img src={DescriptionImg} alt="" />
          </div>
        </div>
        {/* <img className="borderImg" src={BorderImg} alt="" /> */}
      </div>
    </section>
  );
};

export default Description;

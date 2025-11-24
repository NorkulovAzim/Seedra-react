import DescriptionImg from "../assets/description.svg";
import BorderImg from "../assets/border.svg";

const Description = () => {
  return (
    <section className="description-section">
      <div className="container">
        {/* <img src={DescriptionImg} alt="Description" /> */}
        <div className="description-wrap">
          <div className="description-text">
            <h2>
              Seedra helps to grow fast and <br /> efficiant
            </h2>

            <p>
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George
            </p>

            <p>
              Spinach commom culinary uses: salads, soups, smoothies, lasagne,
              pizza, pies, risotto, and more
            </p>

            <p>
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings.
            </p>

            <p>
              Spinach commom culinary uses: salads, soups, smoothies, lasagne,
              pizza, pies, risotto, and more
            </p>

            <p>
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>

          <div className="description-img">
            <img src={DescriptionImg} alt="" />
          </div>
        </div>
        {/* <img className="borderImg" src={BorderImg} alt="" /> */}
      </div>
    </section>
  );
};

export default Description;

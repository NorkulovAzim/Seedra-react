import ClockImg from "../assets/clock.svg";
import BlogGreen from "../assets/blog-green.png";
import Ellipse from "../assets/Ellipse.png";
import Female from "../assets/female.png";

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-title">
          <h2>Our blog.</h2>
          <button>Go to our blog</button>
        </div>

        <div className="parent">
          <div className="div1">
            <div className="blog-wrap">
              <div className="time-blog">
                <img src={ClockImg} alt="clock" />
                <p>12.09.2021</p>
              </div>

              <div className="blog-text">
                <h3>How to plant spinach correctly in winter</h3>
                <p>
                  In most areas, successive sowing can be done from early <br />{" "}
                  spring until early winter, but more often during hotter
                  months...
                </p>
              </div>

              <button className="blog-btn">Read</button>
            </div>

            <div className="blog-img">
              <img src={BlogGreen} alt="" />
            </div>
          </div>
          <div className="div2">
            <div className="blog-wrap-1">
              <div className="blog-time-1">
                <img src={ClockImg} alt="" />
                <p>12.09.2021</p>
              </div>

              <div className="blog-text-1">
                <h3>
                  How to plant spinach <br /> correctly in winter
                </h3>
              </div>
            </div>

            <div className="blog-btn-1">
              <button>Read</button>

              <img className="ellipse" src={Ellipse} alt="" />
            </div>
          </div>
          <div className="div3">
            {" "}
            <div className="blog-wrap-1">
              <div className="blog-time-1">
                <img src={ClockImg} alt="" />
                <p>12.09.2021</p>
              </div>

              <div className="blog-text-1">
                <h3>
                  How to plant spinach <br /> correctly in winter
                </h3>
              </div>
            </div>
            <div className="blog-btn-1">
              <button>Read</button>

              <img className="ellipse" src={Ellipse} alt="" />
            </div>
          </div>
          <div className="div5">
            <div className="blog-time-2">
              <img src={ClockImg} alt="" />
              <p>12.09.2021</p>
            </div>

            <div className="blog-text-2">
              <h3>How to plant spinach correctly in winter</h3>
              <p>
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
            </div>

            <div className="blog-btn-2">
              <button>Read</button>
            </div>

            <img className="female" src={Female} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

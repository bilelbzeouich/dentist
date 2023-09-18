import React from "react";
import img1 from "../../assets/images/hero-banner.png";
import img2 from "../../assets/images/service-icon-1.png";
import img3 from "../../assets/images/about-banner.png";
import img4 from "../../assets/images/service-icon-2.png";
import img5 from "../../assets/images/service-icon-3.png";
import img6 from "../../assets/images/service-icon-4.png";
import img7 from "../../assets/images/service-icon-5.png";
import img8 from "../../assets/images/service-icon-6.png";
import imgDoctor1 from "../../assets/images/doctor-1.png";
import imgDoctor2 from "../../assets/images/doctor-2.png";
import imgDoctor3 from "../../assets/images/doctor-3.png";
import imgDoctor4 from "../../assets/images/doctor-4.png";
import imgBlog1 from "../../assets/images/blog-1.jpg";
import imgBlog2 from "../../assets/images/blog-2.jpg";
import imgBlog3 from "../../assets/images/blog-3.jpg";
import service from "../../assets/images/service-banner.png";
import banner from "../../assets/images/cta-banner.png";

const Body = () => {
  const basePath = "../../assets/images/";
  return (
    <div>
      <main>
        <article>
          <section
            className="section hero"
            id="home"
            style={{
              backgroundImage: `url('${basePath}hero-bg.png')`,
            }}
            aria-label="hero"
          >
            <div className="container">
              <div className="hero-content">
                <p className="section-subtitle">Welcome To Dentelo</p>
                <h1 className="h1 hero-title">We Are Best Dental Service</h1>
                <p className="hero-text">
                  Donec vitae libero non enim placerat eleifend aliquam erat
                  volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed
                  nisl tristique, commodo gravida lectus non.
                </p>
                <form action="" className="hero-form">
                  <input
                    type="email"
                    name="email_address"
                    aria-label="email"
                    placeholder="Your Email Address..."
                    required
                    className="email-field"
                  />
                  <button type="submit" className="btn">
                    Get Call Back
                  </button>
                </form>
              </div>
              <figure className="hero-banner">
                <img
                  src={img1}
                  width="587"
                  height="839"
                  alt="hero banner"
                  className="w-100"
                />
              </figure>
            </div>
          </section>

          <section
            className="section service"
            id="service"
            aria-label="service"
          >
            <div className="container">
              <p className="section-subtitle text-center">Our Services</p>
              <h2 className="h2 section-title text-center">What We Provide</h2>
              <ul className="service-list">
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={img2}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="service icon"
                        className="w-100"
                      />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Root Canal</h3>
                      <p className="card-text">
                        Aenean eleifend turpis tellus, nec laoreet metus
                        elementum ac.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={img4}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="service icon"
                        className="w-100"
                      />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Alignment Teeth</h3>
                      <p className="card-text">
                        Aenean eleifend turpis tellus, nec laoreet metus
                        elementum ac.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={img5}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="service icon"
                        className="w-100"
                      />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Cosmetic Teeth</h3>
                      <p className="card-text">
                        Aenean eleifend turpis tellus, nec laoreet metus
                        elementum ac.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="service-banner">
                  <figure>
                    <img
                      src={service}
                      width="409"
                      height="467"
                      loading="lazy"
                      alt="service banner"
                      className="w-100"
                    />
                  </figure>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={img6}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="service icon"
                        className="w-100"
                      />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Oral Hygiene</h3>
                      <p className="card-text">
                        Aenean eleifend turpis tellus, nec laoreet metus
                        elementum ac.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={img7}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="service icon"
                        className="w-100"
                      />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Live Advisory</h3>
                      <p className="card-text">
                        Aenean eleifend turpis tellus, nec laoreet metus
                        elementum ac.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <img
                        src={img8}
                        width="100"
                        height="100"
                        loading="lazy"
                        alt="service icon"
                        className="w-100"
                      />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Cavity Inspection</h3>
                      <p className="card-text">
                        Aenean eleifend turpis tellus, nec laoreet metus
                        elementum ac.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <img
                  src={img3}
                  width="470"
                  height="538"
                  loading="lazy"
                  alt="about banner"
                  className="w-100"
                />
              </figure>

              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">
                  We Care For Your Dental Health
                </h2>
                <p className="section-text section-text-1">
                  Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio.
                  Nullam quis volutpat est, sed dapibus sapien. Cras condimentum
                  eu velit id tempor. Curabitur purus sapien, cursus sed nisl
                  tristique, commodo vehicula arcu.
                </p>
                <p className="section-text">
                  Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex
                  mattis, ultricies posuere sapien. Morbi a dignissim enim.
                  Fusce elementum, augue in elementum porta, sapien nunc
                  volutpat ex, a accumsan nunc lectus eu lectus.
                </p>
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </section>

          <section className="section doctor" aria-label="doctor">
            <div className="container">
              <p className="section-subtitle text-center">Our Doctor</p>
              <h2 className="h2 section-title text-center">
                Best Expert Dentist
              </h2>
              <ul className="has-scrollbar">
                {[
                  { img: imgDoctor1, name: "Howard Holmes" },
                  { img: imgDoctor2, name: "Ella Thompson" },
                  { img: imgDoctor3, name: "Vincent Cooper" },
                  { img: imgDoctor4, name: "Danielle Bryant" },
                ].map((doctor, index) => (
                  <li className="scrollbar-item" key={index}>
                    <div className="doctor-card">
                      <div
                        className="card-banner img-holder"
                        style={{ "--width": "460px", "--height": "500px" }}
                      >
                        <img
                          src={doctor.img}
                          width="460"
                          height="500"
                          loading="lazy"
                          alt={doctor.name}
                          className="img-cover"
                        />
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          {doctor.name}
                        </a>
                      </h3>

                      <p className="card-subtitle">Dentist</p>

                      <ul className="card-social-list">
                        <li>
                          <a href="#" className="card-social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                          </a>
                        </li>

                        <li>
                          <a href="#" className="card-social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                          </a>
                        </li>

                        <li>
                          <a href="#" className="card-social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section cta" aria-label="cta">
            <div className="container">
              <figure className="cta-banner">
                <img
                  src={banner}
                  width="1056"
                  height="1076"
                  loading="lazy"
                  alt="cta banner"
                  className="w-100"
                />
              </figure>

              <div className="cta-content">
                <p className="section-subtitle">Book Dental Appointment</p>
                <h2 className="h2 section-title">
                  We Are Open And Welcoming Patients
                </h2>
                <a href="#" className="btn">
                  Book appointment
                </a>
              </div>
            </div>
          </section>

          <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
              <p className="section-subtitle text-center">Our Blog</p>
              <h2 className="h2 section-title text-center">
                Latest Blog & News
              </h2>
              <ul className="blog-list">
                {[imgBlog1, imgBlog2, imgBlog3].map((imageName, index) => (
                  <li key={index}>
                    <div className="blog-card">
                      <figure
                        className="card-banner img-holder"
                        style={{ "--width": "1180px", "--height": "800px" }}
                      >
                        <img
                          src={imageName}
                          width="1180"
                          height="800"
                          loading="lazy"
                          alt={`Blog ${index + 1}`}
                          className="img-cover"
                        />
                        <div className="card-badge">
                          <ion-icon name="calendar-outline"></ion-icon>
                          <time className="time" datetime="2022-03-24">
                            24th March 2022
                          </time>
                        </div>
                      </figure>

                      <div className="card-content">
                        <h3 className="h3">
                          <a href="#" className="card-title">
                            Blog {index + 1} Title
                          </a>
                        </h3>

                        <p className="card-text">
                          Curabitur sagittis libero tincidunt tempor finibus.
                          Mauris at dignissim ligula, nec tristique orci.
                        </p>

                        <a href="#" className="card-link">
                          Read More
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Body;

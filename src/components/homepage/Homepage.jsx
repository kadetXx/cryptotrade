import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";
// import AOS from 'aos';

function Homepage() {
  return (
    <div id='homepage'>
      <header id='header' className='fixed-top header-transparent'>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-xl-11 d-flex align-items-center'>
              {/* <h1 className='logo mr-auto'>
                <a href='index.html'>Trddex</a>
              </h1> */}

              <a href='index.html' className='logo mr-auto'>
                <img
                  src='/assets/img/trddexlogo.png'
                  alt=''
                  className='img-fluid'
                />
              </a>

              <nav className='nav-menu d-lg-block'>
                <ul>
                  <li className='active'>
                    <Link to='/dashboard'>Login</Link>
                  </li>

                  <li>
                    <Link to='/sign-up'>Create Account</Link>
                  </li>
                </ul>
              </nav>
              {/* .nav-menu */}
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}

      {/* ======= Intro Section ======= */}
      <section id='intro'>
        <div className='intro-container'>
          <div
            id='introCarousel'
            className='carousel  slide carousel-fade'
            data-ride='carousel'
          >
            <col className='carousel-indicators'></col>

            <div className='carousel-inner' role='listbox'>
              <div
                className='carousel-item active'
                style={{
                  backgroundImage: "url(assets/img/intro-carousel/1.jpg)",
                }}
              >
                <div className='carousel-container'>
                  <div className='container'>
                    <h2 className='animate__animated animate__fadeInDown'>
                      Invest The Right Way
                    </h2>
                    <p className='animate__animated animate__fadeInUp'>
                      Join over 100,000 users that use our investment platform
                      to achieve their general/personal savings/investment goals
                      more quickly.
                    </p>
                    <Link
                      to='/dashboard'
                      className='btn-get-started scrollto animate__animated animate__fadeInUp'
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div
                className='carousel-item'
                style={{
                  backgroundImage: "url(assets/img/intro-carousel/2.jpg)",
                }}
              >
                <div className='carousel-container'>
                  <div className='container'>
                    <h2 className='animate__animated animate__fadeInDown'>
                      At vero eos et accusamus
                    </h2>
                    <p className='animate__animated animate__fadeInUp'>
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est, omnis dolor
                      repellendus. Temporibus autem quibusdam et aut officiis
                      debitis aut.
                    </p>
                    <a
                      href='#featured-services'
                      className='btn-get-started scrollto animate__animated animate__fadeInUp'
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div> */}

              {/* <div
                className='carousel-item'
                style={{
                  backgroundImage: "url(assets/img/intro-carousel/3.jpg)",
                }}
              >
                <div className='carousel-container'>
                  <div className='container'>
                    <h2 className='animate__animated animate__fadeInDown'>
                      Temporibus autem quibusdam
                    </h2>
                    <p className='animate__animated animate__fadeInUp'>
                      Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt omnis iste natus error sit
                      voluptatem accusantium.
                    </p>
                    <a
                      href='#featured-services'
                      className='btn-get-started scrollto animate__animated animate__fadeInUp'
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div> */}

              {/* <div
                className='carousel-item'
                style={{
                  backgroundImage: "url(assets/img/intro-carousel/4.jpg)",
                }}
              >
                <div className='carousel-container'>
                  <div className='container'>
                    <h2 className='animate__animated animate__fadeInDown'>
                      Nam libero tempore
                    </h2>
                    <p className='animate__animated animate__fadeInUp'>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum.
                    </p>
                    <Link
                      to='/dashboard'
                      className='btn-get-started scrollto animate__animated animate__fadeInUp'
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* End Intro Section */}

      <main id='main'>
        {/* ======= About Us Section ======= */}
        <section id='about'>
          <div className='container'>
            <header className='section-header'>
              <h3>About Us</h3>
              <p>
                We are a leading investment firm that trades stable digital
                currency using blockchain technology, stock, shares, bonds and
                other securities.
              </p>
            </header>

            <div className='row about-cols'>
              <div className='col-md-4' data-aos-delay='100'>
                <div className='about-col'>
                  <div className='img'>
                    <img
                      src='assets/img/about-mission.jpg'
                      alt=''
                      className='img-fluid'
                    />
                    <div className='icon'>
                      <i className='ion-ios-speedometer-outline'></i>
                    </div>
                  </div>
                  <h2 className='title'>
                    <a href='/'>Our Mission</a>
                  </h2>
                  <p>
                    Trddex’s mission is to deliver a superior alternative to
                    paper in terms of possession, title, efficiency, risk, and
                    other notions that make it ideal for conducting business in
                    good faith with fewer middlemen. We guarantee to provide
                    this digital documentation protocol objectively, with zero
                    custody nor broadcasting of user data, total user privacy,
                    and airtight authentication for documents sent.
                  </p>
                </div>
              </div>

              <div className='col-md-4' data-aos-delay='300'>
                <div className='about-col'>
                  <div className='img'>
                    <img
                      src='assets/img/money-safe.jpg'
                      alt=''
                      className='img-fluid'
                    />
                    <div className='icon'>
                      <i className='ion-ios-eye-outline'></i>
                    </div>
                  </div>
                  <h2 className='title'>
                    <a href='/'>Is your money safe?</a>
                  </h2>
                  <p>
                    Yes, your money is safe. That is why personal Information
                    relating to our customers are encrypted and securely stored.
                    We also ensure Investments are mostly in low risk
                    instruments and invested assets are held by Trddex partner
                    companies, companies registered with the Security and
                    Exchange Commission (SEC), on behalf of savers. These assets
                    are marked to market periodically to ensure savers are not
                    exposed.
                  </p>
                </div>
              </div>

              <div className='col-md-4' data-aos-delay='200'>
                <div className='about-col'>
                  <div className='img'>
                    <img
                      src='assets/img/about-plan.jpg'
                      alt=''
                      className='img-fluid'
                    />
                    <div className='icon'>
                      <i className='ion-ios-list-outline'></i>
                    </div>
                  </div>
                  <h2 className='title'>
                    <a href='/'>Innovative Solutions</a>
                  </h2>
                  <p>
                    We offer one of the most flexible clearing and execution
                    platforms in the industry coupled with unparalleled client
                    service. We have extensive experience servicing clients with
                    high expectations, including: Emerging Hedge Funds
                    Separately Managed Accounts (SMAs) Active Individual
                    Investors Professional Traders Proprietary Trading Groups
                    Quantitative Strategy Funds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}

        {/* ======= Call To Action Section ======= */}
        <section id='call-to-action'>
          <div className='container text-center'>
            <h3>What We Can Do</h3>
            <p>
              Our experience has grown over more than three decades beginning
              with servicing market makers and traders. Our proven professional
              team has built upon this history to ensure that we cover all of
              the areas that are so important to the success in servicing
              today’s traders. In everything we do, we listen to our clients and
              create unique solutions that drive up customer satisfaction. Our
              technology allows us to customize solutions for each individual
              client in ways traditional firms cannot or will not. For us, it's
              simple; we want to exceed your expectations.
            </p>
            <a className='cta-btn' href='/'>
              Create an account
            </a>
          </div>
        </section>
        {/* End Call To Action Section */}

        {/* ======= Facts Section ======= */}
        <section id='facts'>
          <div className='container'>
            <header className='section-header'>
              <h3>Facts</h3>
              <p>
                These are a few of our acheivements in the past and counting
              </p>
            </header>

            <div className='row counters'>
              <div className='col-lg-3 col-6 text-center'>
                <span data-toggle='counter-up'>10+</span>
                <p>Years</p>
              </div>

              <div className='col-lg-3 col-6 text-center'>
                <span data-toggle='counter-up'>421</span>
                <p>Investors</p>
              </div>

              <div className='col-lg-3 col-6 text-center'>
                <span data-toggle='counter-up'>24</span>
                <p>Hours Of Support</p>
              </div>

              <div className='col-lg-3 col-6 text-center'>
                <span data-toggle='counter-up'>$50m+</span>
                <p>Generated</p>
              </div>
            </div>

            {/* <div className='facts-img'>
              <img
                src='assets/img/facts-img.png'
                alt=''
                className='img-fluid'
              />
            </div> */}
          </div>
        </section>
        {/* End Facts Section */}

        {/* ======= Team Section ======= */}
        <section id='team'>
          <div className='container'>
            <div className='section-header'>
              <h3>Team</h3>
              <p>Here are a few of our core teammates</p>
            </div>

            <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='member' data-aos-delay='100'>
                  <img
                    src='assets/img/teamone.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className='social'>
                        <a href='/'>
                          <i className='fa fa-twitter'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-facebook'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-google-plus'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='member' data-aos-delay='200'>
                  <img
                    src='assets/img/teamtwo.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>George Jhonson</h4>
                      <span>Product Manager</span>
                      <div className='social'>
                        <a href='/'>
                          <i className='fa fa-twitter'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-facebook'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-google-plus'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='member' data-aos-delay='300'>
                  <img
                    src='assets/img/teamthree.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className='social'>
                        <a href='/'>
                          <i className='fa fa-twitter'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-facebook'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-google-plus'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='member' data-aos-delay='400'>
                  <img
                    src='assets/img/team-1.jpg'
                    className='img-fluid'
                    alt=''
                  />
                  <div className='member-info'>
                    <div className='member-info-content'>
                      <h4>Harry Jepson</h4>
                      <span>Accountant</span>
                      <div className='social'>
                        <a href='/'>
                          <i className='fa fa-twitter'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-facebook'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-google-plus'></i>
                        </a>
                        <a href='/'>
                          <i className='fa fa-linkedin'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}

        {/* ======= Contact Section ======= */}
        <section id='contact' className='section-bg'>
          <div className='container'>
            <div className='section-header'>
              <h3>Contact Us</h3>
              <p>Reach out to us on any of the following media</p>
            </div>

            <div className='row contact-info'>
              <div className='col-md-4'>
                <div className='contact-address'>
                  <i className='ion-ios-location-outline'></i>
                  <h3>Address</h3>
                  <address>A108 Adam Street, NY 535022, USA</address>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='contact-phone'>
                  <i className='ion-ios-telephone-outline'></i>
                  <h3>Telephone</h3>
                  <p>
                    {/* <a href='tel:+155895548855'>+1 5589 55488 55</a> */}-
                  </p>
                </div>
              </div>

              <div className='col-md-4'>
                <div className='contact-email'>
                  <i className='ion-ios-email-outline'></i>
                  <h3>Email</h3>
                  <p>
                    <a href='mailto: info@trddex.com'> info@trddex.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}

      {/* ======= Footer ======= */}
      <footer id='footer'>
        <div className='footer-top'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 footer-info'>
                {/* <h3>Trddex</h3> */}
                <a href='index.html' className='logo mr-auto'>
                  <img
                    src='/assets/img/trddexlogo.png'
                    alt=''
                    className='img-fluid'
                    style={{
                      maxWidth: "40%",
                      position: "relative",
                      left: "-20px",
                      marginBottom: "15px",
                    }}
                  />
                </a>
                <p>
                  Our experience has grown over more than three decades
                  beginning with servicing market makers and traders. Our proven
                  professional team has built upon this history to ensure that
                  we cover all of the areas that are so important to the success
                  in servicing today’s traders. In everything we do, we listen
                  to our clients and create unique solutions that drive up
                  customer satisfaction. Our technology allows us to customize
                  solutions for each individual client in ways traditional firms
                  cannot or will not. For us, it's simple; we want to exceed
                  your expectations.
                </p>
              </div>

              <div className='col-lg-6 col-md-6 footer-contact'>
                <h4>Contact Us</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  {/* <strong>Phone:</strong> +1 5589 55488 55
                  <br /> */}
                  <strong>Email:</strong> info@trddex.com
                  <br />
                </p>

                {/* <div className='social-links'>
                  <a href='/' className='twitter'>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a href='/' className='facebook'>
                    <i className='fa fa-facebook'></i>
                  </a>
                  <a href='/' className='instagram'>
                    <i className='fa fa-instagram'></i>
                  </a>
                  <a href='/' className='google-plus'>
                    <i className='fa fa-google-plus'></i>
                  </a>
                  <a href='/' className='linkedin'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='copyright'>
            &copy; Copyright <strong>Trddex</strong>. All Rights Reserved
          </div>
        </div>
      </footer>
      {/* End Footer */}

      {/* </div> */}
    </div>
  );
}

export default Homepage;

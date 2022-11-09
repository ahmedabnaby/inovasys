function Home() {
  return (
    <div>
      <section>
        <div className="bg-image">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="left-content">
                  <h1>managed security <br/> service provider</h1>
                  <a href="#">learn more</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-content">
                  <p>Bring simplicity to cyber security, and that's not an 
                    easy journey when you are at the forefront of one of the most sophisticated
                    and technologically advanced industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <img src="assets/images/innova2.png" className="innova2-img"/>
            <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-left">
                      <h3>who we are</h3>
                      <h2>about inovasys</h2>
                      <p>inovasys, is a system integrator company operating between Europe, UAE, 
                        and Egypt, established in 2014. It was founded with a prime goal in mind, 
                        to be the leading provider of world-class Information Technology Solutions in 
                        the EMEA region.
                      </p>
                      <a href="#">read more</a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-right">
                      <img src="assets/images/innova.png" />
                    </div>
                  </div>
                </div>
            </div>
         </div>
      </section>
      <section>
        <div className="container">
          <div className="history">
            <h3>history</h3>
            <h2>our journey</h2>
            <img src="assets/images/journey.png" />
          </div>
        </div>
        <img src="assets/images/history-img.png" className="history-footer-img"/>
      </section>
    </div>
  );
}

export default Home;

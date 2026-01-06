function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-gradient min-vh-100 d-flex align-items-center">
        <div 
          className="hero-content container text-white text-center py-5"
          style={{
            '--hero-image': "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">
                Transform Your Business with Cutting-Edge Digital Solutions
              </h1>
              <p className="lead fs-4 mb-5 opacity-90">
                We deliver scalable web applications, automated testing frameworks, 
                and data-driven marketing strategies that drive growth.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a href="/demo" className="btn btn-gradient btn-lg px-5 py-3">
                  Get Free Consultation →
                </a>
                <a href="/services" className="btn btn-outline-light btn-lg px-5 py-3">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Why Choose TechSolutions?</h2>
              <p className="text-muted fs-5">
                We combine technical expertise with business acumen to deliver measurable results.
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card card-hover h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-block mb-4">
                    <span className="fs-2">⚡</span>
                  </div>
                  <h4 className="card-title fw-bold">Fast Development</h4>
                  <p className="card-text text-muted">
                    Rapid prototyping and agile development cycles to get your product to market faster.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card card-hover h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-4">
                    <span className="fs-2">🎯</span>
                  </div>
                  <h4 className="card-title fw-bold">Quality Assurance</h4>
                  <p className="card-text text-muted">
                    Comprehensive testing strategies ensuring 99.9% reliability and exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card card-hover h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle p-3 d-inline-block mb-4">
                    <span className="fs-2">🤝</span>
                  </div>
                  <h4 className="card-title fw-bold">Dedicated Support</h4>
                  <p className="card-text text-muted">
                    24/7 technical support and ongoing maintenance to ensure your business runs smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
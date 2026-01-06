function Demo() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-primary text-white py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold mb-4">See Our Solutions in Action</h1>
              <p className="lead fs-4">
                Experience firsthand how our digital solutions can transform your operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO CONTENT */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Book a Personalized Demo</h2>
              <p className="text-muted mb-4">
                Our experts will walk you through our platform, answer your questions, 
                and show you exactly how we can solve your specific challenges.
              </p>
              
              <div className="mb-4">
                <h5 className="fw-bold mb-3">What to Expect:</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <span className="badge bg-primary rounded-pill me-3">1</span>
                    Live platform walkthrough
                  </li>
                  <li className="mb-3">
                    <span className="badge bg-primary rounded-pill me-3">2</span>
                    Customized solution showcase
                  </li>
                  <li className="mb-3">
                    <span className="badge bg-primary rounded-pill me-3">3</span>
                    Q&A session with our experts
                  </li>
                  <li className="mb-3">
                    <span className="badge bg-primary rounded-pill me-3">4</span>
                    Tailored implementation plan
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-4">Request Your Demo</h3>
                  <p className="text-muted mb-4">
                    Fill out this form and we'll contact you within 24 hours to schedule your demo.
                  </p>
                  
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" placeholder="John" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" placeholder="Doe" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Company Email</label>
                      <input type="email" className="form-control" placeholder="john@company.com" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Company Name</label>
                      <input type="text" className="form-control" placeholder="Your Company" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">What are you looking for?</label>
                      <select className="form-select">
                        <option>Web Development</option>
                        <option>Automation Testing</option>
                        <option>Digital Marketing</option>
                        <option>Multiple Services</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-gradient w-100 py-3">
                        Schedule Demo →
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Demo;
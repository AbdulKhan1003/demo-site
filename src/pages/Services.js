function Services() {
  const services = [
    {
      title: "Web Application Development",
      description: "Custom scalable web applications using React, Node.js, and modern frameworks.",
      icon: "💻",
      features: ["Responsive Design", "API Integration", "Cloud Deployment"]
    },
    {
      title: "Automation Testing",
      description: "End-to-end testing frameworks with Selenium, Cypress, and Jest.",
      icon: "🤖",
      features: ["CI/CD Integration", "Performance Testing", "Cross-browser Testing"]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies with analytics and conversion optimization.",
      icon: "📈",
      features: ["SEO Optimization", "Social Media Campaigns", "Analytics Dashboard"]
    },
    {
      title: "Accessibility Audits",
      description: "WCAG 2.1 compliance testing for inclusive digital experiences.",
      icon: "♿",
      features: ["Screen Reader Testing", "Keyboard Navigation", "Color Contrast Analysis"]
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold mb-4">Enterprise-Grade Digital Services</h1>
              <p className="lead fs-4 mb-0">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6">
                <div className="card card-hover h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start gap-4">
                      <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                        <span className="fs-1">{service.icon}</span>
                      </div>
                      <div>
                        <h4 className="fw-bold mb-3">{service.title}</h4>
                        <p className="text-muted mb-4">{service.description}</p>
                        <ul className="list-unstyled mb-0">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="mb-2">
                              <span className="text-primary me-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-top-0">
                    <a href="/contact" className="btn btn-outline-primary">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-primary text-white py-5">
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="fs-5 mb-4 opacity-90">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <a href="/contact" className="btn btn-light btn-lg px-5">
            Schedule a Call
          </a>
        </div>
      </section>
    </>
  );
}

export default Services;
import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending your message...");

    const formData = new FormData(event.target);
    formData.append("access_key", "63ae303e-78d5-44b0-8d1c-deed32f1d287");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-5 fw-bold mb-4">Contact Us</h1>
              <p className="lead text-muted">
                Get in touch to discuss your project requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="mb-5">
                <h3 className="fw-bold mb-4">Contact Information</h3>
                <p className="text-muted">
                  We typically respond within 1-2 business hours.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-2">📍 Location</h5>
                <p className="text-muted mb-0">
                  123 Business District<br />
                  San Francisco, CA 94107
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-2">📧 Email</h5>
                <p className="text-muted mb-0">
                  contact@techsolutions.com<br />
                  support@techsolutions.com
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-2">📞 Phone</h5>
                <p className="text-muted mb-0">
                  +1 (555) 123-4567<br />
                  Mon-Fri, 9am-6pm PST
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card contact-form-card">
                <div className="card-body p-4 p-md-5">
                  <h3 className="fw-bold mb-4">Send a Message</h3>
                  
                  <form onSubmit={onSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Project Inquiry"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Message *</label>
                        <textarea
                          name="message"
                          rows="5"
                          className="form-control"
                          placeholder="Tell us about your project..."
                          required
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button 
                          type="submit" 
                          className="btn btn-primary w-100 py-3"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>

                      {result && (
                        <div className="col-12">
                          <div className={`alert ${result.includes("Thank you") ? "alert-success" : "alert-warning"} mt-3 mb-0`}>
                            {result}
                          </div>
                        </div>
                      )}
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
import React from "react";

const FaqContent = () => {
  return (
    <section className="container my-5">
      <h1 className="mb-4">FAQs</h1>

      {/* FAQ GRID */}
      <div className="row g-4">

        {/* FAQ 1 */}
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header bg-white">
              <a
                className="text-decoration-none text-dark fw-medium"
                data-bs-toggle="collapse"
                href="#faq1"
              >
                What is your return policy?
              </a>
            </div>
            <div id="faq1" className="collapse">
              <div className="card-body">
                We accept returns within 30 days of purchase. Items must be unused
                and in original condition.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header bg-white">
              <a
                className="text-decoration-none text-dark fw-medium"
                data-bs-toggle="collapse"
                href="#faq2"
              >
                How do I care for my garments?
              </a>
            </div>
            <div id="faq2" className="collapse">
              <div className="card-body">
                Follow the care instructions on the label. Wash gently and avoid
                high heat.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header bg-white">
              <a
                className="text-decoration-none text-dark fw-medium"
                data-bs-toggle="collapse"
                href="#faq3"
              >
                How can I track my order?
              </a>
            </div>
            <div id="faq3" className="collapse">
              <div className="card-body">
                Once shipped, you’ll receive a tracking link via email.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header bg-white">
              <a
                className="text-decoration-none text-dark fw-medium"
                data-bs-toggle="collapse"
                href="#faq4"
              >
                Do you offer gift wrapping services?
              </a>
            </div>
            <div id="faq4" className="collapse">
              <div className="card-body">
                Yes, gift wrapping is available at checkout for selected items.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header bg-white">
              <a
                className="text-decoration-none text-dark fw-medium"
                data-bs-toggle="collapse"
                href="#faq5"
              >
                What payment methods do you accept?
              </a>
            </div>
            <div id="faq5" className="collapse">
              <div className="card-body">
                We accept credit cards, debit cards, UPI, and net banking.
              </div>
            </div>
          </div>
        </div>

        {/* FAQ 6 */}
        <div className="col-12 col-lg-6">
          <div className="card">
            <div className="card-header bg-white">
              <a
                className="text-decoration-none text-dark fw-medium"
                data-bs-toggle="collapse"
                href="#faq6"
              >
                Do you offer international shipping?
              </a>
            </div>
            <div id="faq6" className="collapse">
              <div className="card-body">
                Yes, we ship internationally. Shipping charges vary by location.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqContent;

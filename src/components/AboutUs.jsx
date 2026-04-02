import React from 'react';
import NavbarComponent from './NavbarComponent';

const AboutUs = () => {
  return (
    <>
      <NavbarComponent />
      
      {/* Hero */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5 text-center">
          <h1 className="display-1 fw-bold">About MJ&Roberts</h1>
          <p className="lead fs-3">The Enterprise Master Blueprint v3.0</p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <span className="badge bg-light text-dark px-3 py-2">Salesforce</span>
            <span className="badge bg-light text-dark px-3 py-2">AWS</span>
            <span className="badge bg-light text-dark px-3 py-2">Oracle</span>
            <span className="badge bg-light text-dark px-3 py-2">Google Cloud</span>
          </div>
        </div>
      </section>

      {/* Genesis */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="display-6 fw-bold mb-4">The Genesis of MJ&Roberts</h2>
              <p className="lead fs-4 mb-4">Bridging the Innovation-Infrastructure Gap.</p>
              <p className="mb-4">As global entities rushed toward cloud and AI, they inadvertently created "Brittle Ecosystems"—fragmented data, unmanaged technical debt, and misaligned multi-cloud environments. MJ&Roberts was founded to provide the architectural discipline required to transform these liabilities into high-velocity assets.</p>
              <p>We close the gap between "Digital Transformation" (the promise) and "Operational Reality."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">The Value We Provide</h2>
            <p className="lead">Strategic Guardrail for the Autonomous Era</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 text-center">
                  <i className="bi bi-diagram-3 fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold">Orchestrate Converged Environments</h5>
                  <p>Harmonize Salesforce, AWS, Oracle, and Google Cloud into a singular elastic infrastructure.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 text-center">
                  <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold">Platform Neutrality</h5>
                  <p>Expert Inter-Cloud Orchestration — your stack dictated by business logic, not vendor lock-in.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4 text-center">
                  <i className="bi bi-cash-stack fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold">Fiscal Sovereignty</h5>
                  <p>FinOps-driven cloud spend management: every cent of OpEx drives measurable ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">The Well-Architected Standard</h2>
              <p className="lead">Our approach merges operational excellence, security, reliability, performance efficiency, and cost optimization into every engagement. We don't just deploy tools — we embed architectural discipline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Our Elite Partnerships</h2>
            <p className="lead">Trusted by the industry's leading cloud and AI innovators</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { name: "AWS", tier: "Advanced Consulting Partner" },
              { name: "Salesforce", tier: "Summit Partner" },
              { name: "Oracle", tier: "Platinum Partner" },
              { name: "Microsoft", tier: "Gold Partner" }
            ].map((partner, idx) => (
              <div key={idx} className="col-md-3 col-6 text-center">
                <div className="p-4 border rounded-4 bg-white shadow-sm">
                  <i className="bi bi-patch-check fs-1 text-primary mb-2 d-block"></i>
                  <h5 className="fw-bold mb-1">{partner.name}</h5>
                  <span className="text-muted small">{partner.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold">Join the Silicon Workforce</h2>
          <p className="lead mb-4">We're building the future of autonomous enterprise — be part of the team that engineers resilience.</p>
          <button className="btn btn-outline-light btn-lg px-5">View Careers</button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
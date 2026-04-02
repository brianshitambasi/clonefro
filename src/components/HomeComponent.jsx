import React from 'react';
import NavbarComponent from './NavbarComponent';

const HomeComponent = () => {
  return (
    <>
      <NavbarComponent />
      
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-1 fw-bold mb-3">MJ&ROBERTS</h1>
              <p className="lead fs-2 fw-light mb-4">Engineering Resilience into the Global Enterprise.</p>
              <p className="lead mb-5">We orchestrate Converged Environments — harmonizing Salesforce, AWS, and AI to bridge the Innovation-Infrastructure Gap.</p>
              <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
                <span className="badge bg-light text-dark px-4 py-2 fs-6 rounded-pill">Salesforce</span>
                <span className="badge bg-light text-dark px-4 py-2 fs-6 rounded-pill">AWS</span>
                <span className="badge bg-light text-dark px-4 py-2 fs-6 rounded-pill">AI</span>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-primary btn-lg px-5">Get in touch</button>
                <button className="btn btn-outline-light btn-lg px-5">Our Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Service Tags */}
      <section className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3">
              <span className="fw-semibold fs-5">SalesforceServices</span>
            </div>
            <div className="col-6 col-md-3">
              <span className="fw-semibold fs-5">AWS Services</span>
            </div>
            <div className="col-6 col-md-3">
              <span className="fw-semibold fs-5">CloudServices</span>
            </div>
            <div className="col-6 col-md-3">
              <span className="fw-semibold fs-5">AlServices</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Core Services</h2>
            <p className="lead text-muted">Full-lifecycle engagement from strategy to support</p>
          </div>
          <div className="row g-4">
            {[
              { title: "IT Consulting & Digital Transformation", icon: "bi bi-diagram-3", desc: "Postural assessments, modernization strategy, TCO analysis & roadmap design." },
              { title: "Software Engineering & Application Services", icon: "bi bi-code-square", desc: "Custom cloud-native builds (Java, Python, .NET, Go) & high-throughput API layers." },
              { title: "Managed IT Services & Support", icon: "bi bi-shield-check", desc: "24/7 SRE hubs, Level 3 global support, 99.9% SLA, ITSM migration." },
              { title: "DevOps & Platform Engineering", icon: "bi bi-gear-wide-connected", desc: "CI/CD pipelines, Golden Path portals, GitOps & Kubernetes orchestration." },
              { title: "Quality Assurance (QA) & Testing", icon: "bi bi-bug", desc: "Automated frameworks, SAST/DAST security testing, AI-driven bug detection." }
            ].map((service, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <div className="card-body p-4">
                    <i className={`${service.icon} fs-1 text-primary mb-3`}></i>
                    <h5 className="card-title fw-bold fs-4">{service.title}</h5>
                    <p className="card-text text-muted">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Solutions Powered by 360° Service Model</h2>
            <p className="lead text-muted">Consultation · Implementation · Development · Integration · Support · Modernization</p>
          </div>
          <div className="row g-4">
            {[
              { title: "CRM (Salesforce, Dynamics 365)", desc: "Full-cycle implementation & Zero-Copy Integration with data lakes." },
              { title: "ERP (SAP, Odoo)", desc: "Strategic consultation and legacy-to-cloud migration." },
              { title: "Digital Commerce", desc: "Headless commerce development & global payment gateway integration." },
              { title: "Data Analytics & BI", desc: "Power BI dashboards, predictive modeling & ETL." },
              { title: "Artificial Intelligence & RPA", desc: "Autonomous Agentic AI & robotic process automation." },
              { title: "AR/VR & IoT", desc: "Digital Twin development & edge-device integration." }
            ].map((sol, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body p-4">
                    <h5 className="fw-bold">{sol.title}</h5>
                    <p className="text-muted">{sol.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">The Partner Stack</h2>
            <p className="lead text-muted">Consultation · Implementation · Integration · Support</p>
          </div>
          <div className="row g-4 justify-content-center">
            {["Salesforce", "AWS", "Microsoft Azure", "SAP Commerce", "Atlassian", "Power BI"].map((tech, idx) => (
              <div key={idx} className="col-6 col-md-4 col-lg-2 text-center">
                <div className="p-3 rounded-3 bg-light border">
                  <i className="bi bi-cpu fs-1 d-block mb-2 text-primary"></i>
                  <span className="fw-semibold">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Vertically Aligned Expertise</h2>
            <p className="lead text-muted">High-consequence sectors we serve</p>
          </div>
          <div className="row g-4">
            {["Healthcare (HIPAA-compliant)", "Finance & Insurance", "Manufacturing & Retail", "Software & Hi-Tech", "Professional Services"].map((ind, idx) => (
              <div key={idx} className="col-md-4 col-lg-2 text-center">
                <div className="p-3 bg-white rounded-3 shadow-sm">
                  <i className="bi bi-building fs-2 text-primary mb-2 d-block"></i>
                  <span className="fw-medium">{ind}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4"><i className="bi bi-trending-up me-2 text-primary"></i>Trending Topics</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3"><i className="bi bi-robot me-2 text-primary"></i> <strong>Agentic AI:</strong> Why the "Chatbot" era is over.</li>
                    <li className="mb-3"><i className="bi bi-cloud-upload me-2 text-primary"></i> <strong>Cloud Sovereignty:</strong> Maintaining data control in a multi-cloud world.</li>
                    <li className="mb-3"><i className="bi bi-cube me-2 text-primary"></i> <strong>Blockchain & IoT:</strong> Decentralized trust and edge intelligence.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-4">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4"><i className="bi bi-graph-up me-2 text-primary"></i>Industry Related</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3"><i className="bi bi-credit-card me-2 text-primary"></i> <strong>Fintech:</strong> Secure cloud ledgers and automated compliance.</li>
                    <li className="mb-3"><i className="bi bi-heart-pulse me-2 text-primary"></i> <strong>Healthtech:</strong> The intersection of Privacy and Predictive Diagnostics.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Case Studies</h2>
            <p className="lead text-muted">Proven impact across industries</p>
          </div>
          <div className="row g-4">
            {[
              { title: "Zero-Copy Revolution", desc: "Retail data federation success — unified 50+ data sources without duplication." },
              { title: "Project Titan", desc: "2,000-server migration to AWS with zero downtime and 30% cost reduction." },
              { title: "Mission Impact", desc: "Salesforce Nonprofit Cloud global scaling for a humanitarian NGO." }
            ].map((study, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm rounded-4">
                  <div className="card-body p-4">
                    <i className="bi bi-files fs-1 text-primary mb-3 d-block"></i>
                    <h5 className="fw-bold">{study.title}</h5>
                    <p className="text-muted">{study.desc}</p>
                    <a href="#" className="text-decoration-none fw-semibold">Read more →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-6 fw-bold">Ready to engineer resilience into your enterprise?</h2>
          <button className="btn btn-outline-light btn-lg mt-3 px-5">Contact our team</button>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
import React from "react";

const ProofSection = ({ proofPoints }) => {
  return (
    <section className="v1-section v1-proof v1-reveal" id="v1-proof">
      <div className="v1-section-inner">
        <h2>Proof & Momentum</h2>
        <div className="v1-proof-grid">
          {proofPoints.map((point) => (
            <div className="v1-proof-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

import React from 'react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about-us" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-image" role="img" aria-label="Illustration of indoor plants in decorative planters" />
        <div className="about-copy">
          <p className="eyebrow">OUR STORY</p>
          <h2 id="about-title">A little more green.<br /><em>A lot more joy.</em></h2>
          <p>
            At Paradise Nursery, we believe every home deserves a touch of nature.
            We handpick beautiful houseplants for every level of plant parent, from
            first-time growers to lifelong leaf lovers.
          </p>
          <p>
            Explore air-purifying favorites, fragrant blooms, and easy-care greens,
            all with clear pricing and a simple shopping experience. Grow your
            own small paradise, one plant at a time.
          </p>
          <div className="about-points">
            <span><span aria-hidden="true">✦</span> Carefully selected</span>
            <span><span aria-hidden="true">✦</span> Beginner friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}

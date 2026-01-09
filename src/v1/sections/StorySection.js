import React from "react";

const StorySection = ({ storyBeats, storyTldr }) => {
  return (
    <section className="v1-section v1-story v1-reveal" id="v1-story">
      <div className="v1-section-inner">
        <h2>Story</h2>
        <div className="v1-story-grid">
          {storyBeats.map((beat, index) => (
            <p key={index}>{beat}</p>
          ))}
        </div>
        <div className="v1-tldr">
          <span className="v1-label">TL;DR</span>
          <div className="v1-tldr-pills">
            {storyTldr.map((item) => (
              <span className="v1-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

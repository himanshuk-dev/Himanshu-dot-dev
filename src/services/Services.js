import Header from "./ServicesHeader";
import "../static/styles/services/services.css";
import React from "react";
import services from "./servicesData";

const Services = () => (
  <div className="services-page">
    <header className="services-header">
      <h1>Professional Software Development Services</h1>
      <p>
        Delivering innovative and tailored solutions to meet your business
        needs.
      </p>
    </header>
    <Header />
    <div className="services-intro">
      <h2>Services I Offer</h2>
      <p>
        Explore a range of professional software development services designed
        to elevate your business.
      </p>
    </div>

    <div className="services">
      {services.map((service, index) => (
        <div key={index} className="service-category">
          <h2>{service.category}</h2>
          <ul>
            {service.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="booking-section">
      <h2>Book a Discovery Call</h2>
      <p>
        Interested in learning more about how I can help your project? Schedule
        a discovery call with me!
      </p>
      <iframe
        src="https://calendly.com/bookwithhimanshu/discovery-call-with-himanshu"
        width="100%"
        height="900"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
);

export default Services;

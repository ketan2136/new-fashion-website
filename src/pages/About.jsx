import React from "react";
import AboutHead from "../componets/About/AboutHead";
import Testimonial from "../componets/About/Testimonial";
import AboutSpad from "../componets/About/AboutSpad";
import Client from "../componets/About/Client";
import Counter from "../componets/About/Counter";
import Team from "../componets/About/Team";

function About() {
  return (
    <div>
      <AboutHead />
      <AboutSpad />
      <Testimonial />
      <Counter />
      <Team />
      <Client />
    </div>
  );
}

export default About;

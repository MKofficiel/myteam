import React from "react";
import Header from "../components/Header";
import AboutHeader from "../sections/AboutHeader";
import MeetTheTeam from "../sections/MeetTheTeam";
import Clients from "../sections/Clients";
import { CTA } from "../sections/CTA";
import Footer from "../sections/Footer";

const AboutPage = () => {
  return (
    <main>
      <AboutHeader />
      <MeetTheTeam />
      <Clients />
    </main>
  );
};

export default AboutPage;

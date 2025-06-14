import React from "react";
import Header from "../components/Header";
import { CTA } from "../sections/CTA";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CTA />
      <Footer />
    </>
  );
};

export default AppLayout;

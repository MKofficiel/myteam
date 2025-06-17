import Header from "../components/Header";
import { CTA } from "../sections/CTA";
import { Outlet, useLocation } from "react-router";
import Footer from "../sections/Footer";

const AppLayout = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  console.log("applayout");
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!isContactPage && <CTA />}
      <Footer />
    </>
  );
};

export default AppLayout;

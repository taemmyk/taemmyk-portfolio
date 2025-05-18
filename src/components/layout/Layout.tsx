import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="font-semibold">
      <Header />
      <main
        className="container mx-auto pb-8 mt-16"
        style={{ minHeight: `calc(100vh - 64px - 64px)` }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

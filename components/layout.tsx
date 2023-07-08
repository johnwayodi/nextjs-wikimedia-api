import { Affix } from "antd";
import Navbar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

export default function Layout({ children }: any) {
  return (
    <div>
      <Affix offsetTop={0}>
        <Navbar />
      </Affix>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

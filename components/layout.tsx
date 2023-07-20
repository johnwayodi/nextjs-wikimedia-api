import Navbar from './NavBar/NavBar';
import Footer from './Footer/Footer';

export default function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

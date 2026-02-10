import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { CartProvider } from "../context/cartcontext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
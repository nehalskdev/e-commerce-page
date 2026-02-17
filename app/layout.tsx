import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <CartProvider>
          <Navbar />

          <main className="max-w-6xl mx-auto px-6 py-16">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}

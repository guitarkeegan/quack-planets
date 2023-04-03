import Navbar from "@/components/general/Navbar";
import NavbarRes from "../components/general/NavBarRes";
import "./globals.css";

export const metadata = {
  title: "Quack Planets",
  description: "Information about our solar system presented in a fun way.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        {/* @ts-expect-error Server Component */}
        <NavbarRes />
        {children}
      </body>
    </html>
  );
}

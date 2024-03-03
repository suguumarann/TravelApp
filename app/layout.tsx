// Importing necessary dependencies and components
import type { Metadata } from "next"; // Importing Metadata type from Next.js
import "./globals.css"; // Importing global CSS styles
import Navbar from "@/components/Navbar"; // Importing Navbar component
import Footer from "@/components/Footer"; // Importing Footer component

// Defining metadata for the page
export const metadata: Metadata = {
  title: "Travel" // Setting the title metadata
};

// Defining the RootLayout component
export default function RootLayout({
  children, // Children components to be rendered within the layout
}: Readonly<{
  children: React.ReactNode; // Type definition for children prop
}>) {
  return (
    // HTML document structure
    <html lang="en">
      <body>
        {/* Navbar component */}
        <Navbar />
        {/* Main content area */}
        <main className="relative overflow-hidden">
          {children} {/* Rendering children components */}
        </main>
        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}

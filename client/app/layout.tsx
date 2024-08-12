import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Amen Jet Medical Health Services",
  description: "Bringing Quality Health Care to your doorsteps.",
  keywords: "health amen jet medical medicine quality"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

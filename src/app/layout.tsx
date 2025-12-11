import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jessica B | CSE Student",
  description: "A passionate CSE student who loves building meaningful tech solutions and exploring real-world problem solving through projects and hackathons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

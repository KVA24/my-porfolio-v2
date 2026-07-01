import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Khien Nguyen",
  description:
    "Khien Nguyen is a frontend engineer building accessible, fast web interfaces with clear systems and simple code.",
  openGraph: {
    title: "Khien Nguyen",
    description:
      "Khien Nguyen is a frontend engineer building accessible, fast web interfaces with clear systems and simple code.",
    images: ["/seo/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

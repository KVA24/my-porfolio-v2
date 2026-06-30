import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brittanychiang.com"),
  title: "Khien Nguyen",
  description:
    "Khien Nguyen is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
  openGraph: {
    title: "Khien Nguyen",
    description:
      "Khien Nguyen is a software engineer who builds accessible, inclusive products and digital experiences for the web.",
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

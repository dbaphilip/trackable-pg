import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Architects_Daughter, Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "../app/BootstrapClient";
import AuthProvider from "./auth/Provider";

const excali = localFont({
  src: "../public/fonts/excalifont.woff2",
});

const brico = Bricolage_Grotesque({});

export const metadata: Metadata = {
  title: "Trackable - Plan and build awesome products",
  description: "Trackable - Plan and build awesome products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${excali.className}`}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <BootstrapClient />
        </AuthProvider>
      </body>
    </html>
  );
}

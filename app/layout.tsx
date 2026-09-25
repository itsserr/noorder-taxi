import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noordertaxi.nl"),
  title: {
    default: "Noorder Taxi | Taxi in Groningen en omgeving",
    template: "%s | Noorder Taxi",
  },
  description:
    "Taxi nodig in Groningen? Noorder Taxi rijdt u dag en nacht, op afspraak. Luchthavenritten naar Schiphol, zakelijk vervoer en ritten voor elke gelegenheid. Bel of app 06-31304241.",
  keywords: [
    "taxi Groningen",
    "taxi Haren",
    "taxi Assen",
    "luchthavenvervoer Schiphol",
    "zakelijk taxivervoer Groningen",
    "Noorder Taxi",
  ],
  authors: [{ name: "Noorder Taxi" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Noorder Taxi",
    title: "Noorder Taxi | Taxi in Groningen en omgeving",
    description:
      "Dag en nacht met de taxi door Groningen en omgeving. Luchthavenritten, zakelijk vervoer en ritten voor elke gelegenheid, telefonisch bevestigd.",
    url: "https://noordertaxi.nl",
    images: [
      {
        url: "/noorder-taxi-hero.jpg",
        alt: "Zwarte Mercedes-Benz Vito van Noorder Taxi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noorder Taxi | Taxi in Groningen en omgeving",
    description:
      "Dag en nacht met de taxi door Groningen en omgeving. Bel of app ons voor een rit.",
    images: ["/noorder-taxi-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  name: "Noorder Taxi",
  url: "https://noordertaxi.nl",
  image: "https://noordertaxi.nl/noorder-taxi-hero.jpg",
  telephone: "+31631304241",
  email: "info@noordertaxi.nl",
  description:
    "Taxibedrijf in Groningen en omgeving. Dag en nacht op afspraak, voor luchthavenritten, zakelijk vervoer en ritten voor elke gelegenheid.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Groningen" },
    { "@type": "AdministrativeArea", name: "Friesland" },
    { "@type": "AdministrativeArea", name: "Drenthe" },
    { "@type": "City", name: "Groningen" },
    { "@type": "City", name: "Leeuwarden" },
    { "@type": "City", name: "Assen" },
    { "@type": "City", name: "Emmen" },
    { "@type": "City", name: "Haren" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted:
    "Contant, Maestro, V PAY, Visa, Mastercard, Apple Pay, Google Pay, contactloos",
  vatID: "NL005460137B10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${bodoniModa.variable} ${inter.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

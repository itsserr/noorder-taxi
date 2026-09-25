import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Reserveren",
  description:
    "Reserveer eenvoudig uw taxirit bij Noorder Taxi. Minimaal 24 uur van tevoren, telefonisch bevestigd.",
  alternates: { canonical: "/reserveren/" },
};

export default function ReserverenPage() {
  return (
    <section className="section-y-first">
      <div className="container-luxe max-w-3xl">
        <div className="text-center">
          <p className="eyebrow mb-4">Reserveren</p>
          <h1 className="font-display text-4xl italic text-foreground sm:text-5xl">
            Plan uw rit
          </h1>
          <p className="mt-5 mx-auto max-w-xl text-base leading-relaxed text-muted">
            Reserveer eenvoudig uw taxirit. Reserveringen dienen minimaal 24 uur
            vooraf te worden aangevraagd. Na ontvangst van uw aanvraag nemen wij
            telefonisch contact met u op om de reservering definitief te
            bevestigen.
          </p>
        </div>

        <div className="mt-14">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

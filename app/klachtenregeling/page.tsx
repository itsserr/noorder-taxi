import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Klachtenregeling",
  description:
    "Onze klachtenregeling: hoe u een klacht indient bij Noorder Taxi en hoe wij deze afhandelen.",
};

const STEPS = [
  {
    title: "1. Meld uw klacht",
    description:
      "Bel of app ons, of stuur een e-mail. Vermeld de datum en tijd van de rit, de ophaal- en bestemmingslocatie en een korte omschrijving van wat er is gebeurd.",
  },
  {
    title: "2. Bevestiging",
    description:
      "U ontvangt binnen 5 werkdagen een bevestiging dat wij uw klacht hebben ontvangen en in behandeling nemen.",
  },
  {
    title: "3. Behandeling",
    description:
      "Wij onderzoeken uw klacht zorgvuldig en nemen zo nodig contact met u op voor extra informatie. U ontvangt binnen 4 weken een inhoudelijke reactie.",
  },
  {
    title: "4. Oplossing",
    description:
      "Samen zoeken we naar een passende oplossing. Komen we er onverhoopt niet uit, dan bespreken we de vervolgstappen met u.",
  },
];

export default function KlachtenregelingPage() {
  return (
    <>
      <section className="section-y-first">
        <div className="container-luxe max-w-2xl">
          <p className="eyebrow mb-4">Klachtenregeling</p>
          <h1 className="font-display text-4xl italic text-foreground sm:text-5xl">
            Niet tevreden? Laat het ons weten
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Wij doen ons uiterste best om elke rit zorgeloos te laten verlopen.
            Toch kan het gebeuren dat u ergens niet tevreden over bent. Uw
            feedback is voor ons waardevol, want daarmee verbeteren wij onze
            dienstverlening. Hieronder leest u hoe u een klacht bij ons indient
            en hoe wij deze afhandelen.
          </p>

          <div className="mt-12 space-y-8">
            {STEPS.map((step) => (
              <div key={step.title} className="border-l border-navy-light/30 pl-6">
                <h2 className="font-display text-lg text-foreground">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-sm border border-white/10 bg-surface p-8">
            <p className="eyebrow mb-4">Klacht indienen</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                Telefonisch of via WhatsApp:{" "}
                <a
                  href={SITE.phoneHref}
                  className="text-foreground hover:text-navy-light"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                Per e-mail:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-foreground hover:text-navy-light"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Wij behandelen elke klacht vertrouwelijk en gaan zorgvuldig om met
              uw gegevens.
            </p>
          </div>

          <div className="mt-10">
            <Link href="/contact">
              <Button variant="outline">Naar contact</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

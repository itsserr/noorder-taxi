import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { RouteLine } from "@/components/ui/route-line";
import { PaymentMethods } from "@/components/layout/payment-methods";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="container-luxe py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-2xl uppercase text-foreground">
                Noorder
              </span>
              <span className="text-xs uppercase tracking-widest2 text-muted">
                Taxi
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.tagline} Al onze ritten worden telefonisch bevestigd, van
              deur tot deur.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigatie</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-navy-light" />
                <a href={SITE.phoneHref} className="hover:text-foreground">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-navy-light" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Reserveren</p>
            <p className="text-sm leading-relaxed text-muted">
              Ritten graag minimaal 24 uur van tevoren aanvragen. Elke
              reservering wordt telefonisch bevestigd.
            </p>
            <RouteLine className="mt-6 w-32 text-white/20" />
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-10">
          <PaymentMethods />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/5 pt-10 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. Alle rechten
            voorbehouden.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Link
              href="/klachtenregeling"
              className="transition-colors hover:text-foreground"
            >
              Klachtenregeling
            </Link>
            <span aria-hidden className="text-muted-2/40">
              &middot;
            </span>
            <span>KvK {SITE.kvk}</span>
            <span aria-hidden className="text-muted-2/40">
              &middot;
            </span>
            <span>BTW {SITE.btw}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Phone, Mail, FileText } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { REGIONS } from "@/lib/regions";
import { PaymentMethods } from "@/components/layout/payment-methods";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="container-luxe py-20 sm:py-24">
        <div className="grid gap-12 text-center sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Link href="/" className="flex items-baseline justify-center gap-2">
              <span className="font-display text-2xl uppercase text-foreground">
                Noorder
              </span>
              <span className="text-xs uppercase tracking-widest2 text-muted">
                Taxi
              </span>
            </Link>
            <p className="mt-4 mx-auto max-w-xs text-sm leading-relaxed text-muted">
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
            <p className="eyebrow mb-4">Werkgebied</p>
            <ul className="space-y-3">
              {REGIONS.map((region) => (
                <li key={region.slug}>
                  <Link
                    href={`/taxi/${region.slug}`}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    Taxi {region.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center justify-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-navy-light" />
                <a href={SITE.phoneHref} className="hover:text-foreground">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-navy-light" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <FileText className="h-4 w-4 shrink-0 text-navy-light" />
                <Link href="/klachtenregeling" className="hover:text-foreground">
                  Klachtenregeling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Reserveren</p>
            <p className="text-sm leading-relaxed text-muted">
              Ritten graag minimaal 24 uur van tevoren aanvragen. Elke
              reservering wordt telefonisch bevestigd.
            </p>
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
          <p>
            KvK {SITE.kvk} &middot; BTW {SITE.btw}
          </p>
        </div>
      </div>
    </footer>
  );
}

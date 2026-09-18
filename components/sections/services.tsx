import Link from "next/link";
import { Plane, Briefcase, User, Moon, PartyPopper, CalendarClock, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS = [Plane, Briefcase, User, Moon, PartyPopper, CalendarClock];

export function Services() {
  return (
    <section className="section-y">
      <div className="container-luxe">
        <div className="mb-16 flex flex-col items-center gap-6 text-center sm:mb-20">
          <div className="max-w-xl">
            <p className="eyebrow mb-4">Diensten</p>
            <h2 className="font-display text-3xl italic text-foreground sm:text-4xl">
              Waar kunnen wij u heen brengen?
            </h2>
          </div>
          <Link
            href="/diensten"
            className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            Alle diensten
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-16">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <div key={service.slug} className="group">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-navy-light/25 bg-navy-dim/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-navy-light/60 group-hover:bg-navy-dim/50 group-hover:shadow-navy-glow">
                  <Icon className="h-6 w-6 text-navy-light" />
                </div>
                <h3 className="mt-6 font-display text-xl text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import { REVIEWS, GOOGLE_REVIEWS } from "@/lib/constants";

// Google's vier-kleuren "G"-logo.
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

const AVATAR_COLORS = ["#1a73e8", "#34a853", "#ea4335", "#7b1fa2", "#00796b"];

function ReviewCard({
  review,
  index,
}: {
  review: (typeof REVIEWS)[number];
  index: number;
}) {
  const initial = review.name.trim().charAt(0).toUpperCase();
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <div className="flex w-[300px] shrink-0 flex-col rounded-lg border border-white/10 bg-surface p-6 text-left shadow-lg shadow-black/20 sm:w-[360px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold text-white"
            style={{ backgroundColor: color }}
          >
            {initial}
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {review.name}
            </p>
            {review.location ? (
              <p className="text-xs text-muted-2">{review.location}</p>
            ) : (
              <p className="text-xs text-muted-2">Google-review</p>
            )}
          </div>
        </div>
        <GoogleG className="h-5 w-5" />
      </div>

      <div className="mt-4 flex gap-0.5">
        {Array.from({ length: review.rating }, (_, s) => (
          <Star key={s} className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]" />
        ))}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {review.quote}
      </p>
    </div>
  );
}

export function Reviews() {
  // Herhaal de reviews genoeg keer zodat de zweefband ook bij weinig
  // reviews de hele breedte vult en naadloos doorloopt.
  const copies = Math.max(2, Math.ceil(6 / Math.max(REVIEWS.length, 1)));
  const group = Array.from({ length: copies }).flatMap(() => REVIEWS);

  return (
    <section className="section-y overflow-hidden">
      <div className="container-luxe">
        <div className="mx-auto mb-6 max-w-xl text-center">
          <p className="eyebrow mb-4">Ervaringen</p>
          <h2 className="font-display text-3xl italic text-foreground sm:text-4xl">
            Wat klanten over ons zeggen
          </h2>
        </div>

        <div className="mb-16 flex items-center justify-center gap-2 text-sm text-muted sm:mb-20">
          <GoogleG className="h-4 w-4" />
          <span className="font-semibold text-foreground">
            {GOOGLE_REVIEWS.score}
          </span>
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, s) => (
              <Star key={s} className="h-3.5 w-3.5 fill-[#FBBC04] text-[#FBBC04]" />
            ))}
          </span>
          <span>· {GOOGLE_REVIEWS.count} reviews op Google</span>
        </div>
      </div>

      {/* Schuin zwevende reviews, doorlopend van rechts naar links. */}
      <div className="relative -rotate-2 py-4">
        <div className="flex w-max animate-marquee">
          <div className="flex gap-6 pr-6">
            {group.map((review, i) => (
              <ReviewCard key={`a-${i}`} review={review} index={i} />
            ))}
          </div>
          <div className="flex gap-6 pr-6" aria-hidden="true">
            {group.map((review, i) => (
              <ReviewCard key={`b-${i}`} review={review} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

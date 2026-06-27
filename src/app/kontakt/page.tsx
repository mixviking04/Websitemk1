import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — Rabalder",
  description: "Ta kontakt med Bergen Improteater.",
};

export default function KontaktPage() {
  return (
    <section className="bg-houselight bg-noise min-h-[70vh] py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-gel">Si hei</p>
        <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Kontakt</h1>
        <p className="mt-4 font-body text-ink/70">
          Har du spørsmål om en forestilling, et kurs, eller vil booke oss til et arrangement? Ta kontakt — vi svarer fortere enn en god comeback i en scene.
        </p>

        <div className="mt-10 space-y-6 font-body">
          <div>
            <p className="text-xs uppercase tracking-wide text-curtain">E-post</p>
            <a
              href="mailto:hei@bergenimproteater.no"
              className="font-display text-2xl text-ink transition-colors hover:text-gel"
            >
              hei@bergenimproteater.no
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-curtain">Adresse</p>
            <p className="text-lg text-ink/80">Vetrlidsallmenningen 19, 5014 Bergen</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-curtain">Sosiale medier</p>
            <div className="mt-1 flex gap-6">
              <a
                href="https://www.instagram.com/bergenimpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-ink/80 transition-colors hover:text-gel"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/bergenimproteater/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-ink/80 transition-colors hover:text-gel"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
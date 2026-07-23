import { createFileRoute } from "@tanstack/react-router";

const heroImg = "/assets/hero-clim.jpg";
const techImg = "/assets/tech-install.jpg";
const guideGainable = "/assets/guide-gainable.jpg";
const guideReversible = "/assets/guide-reversible.jpg";
const guideSansUnite = "/assets/guide-sansunite.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ValueProps />
        <Process />
        <Showcase />
        <Guides />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* HEADER */
function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/60">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Snowflake className="h-6 w-6 text-primary" />
          <span className="font-display text-2xl tracking-tight">
            Clim<span className="text-primary">Confort</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#process" className="hover:text-foreground transition">Comment ça marche</a>
          <a href="#guides" className="hover:text-foreground transition">Guides</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          <a href="/espace-pro" className="hover:text-foreground transition">Espace pro</a>
        </nav>
        <a
          href="/devis"
          className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-ember-foreground shadow-ember hover:brightness-110 transition"
        >
          Mes devis gratuits
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="container-page grid lg:grid-cols-[1.05fr_1fr] gap-14 py-20 lg:py-28 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Réseau d'installateurs certifiés RGE
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance text-ink">
            Votre climatisation,
            <br />
            <span className="italic text-primary">posée proprement</span>,<br />
            au juste prix.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Recevez jusqu'à <strong className="text-foreground">3 devis gratuits</strong> d'artisans
            vérifiés près de chez vous. Comparez en 48 heures, sans engagement, sans démarchage.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/devis"
              className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-4 text-base font-medium text-ember-foreground shadow-ember hover:brightness-110 transition"
            >
              Comparer 3 devis gratuits
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-base font-medium hover:bg-secondary transition"
            >
              Voir comment ça marche
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <Stat kpi="12 400" label="devis émis en 2025" />
            <Stat kpi="4.8/5" label="satisfaction clients" />
            <Stat kpi="48h" label="délai de réponse" />
          </dl>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-lifted ring-1 ring-border">
            <img
              src={heroImg}
              alt="Intérieur lumineux avec climatisation murale moderne"
              width={1600}
              height={1400}
              className="w-full h-[520px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-left-10 w-64 rounded-2xl bg-card/95 backdrop-blur shadow-lifted border border-border p-4 animate-float">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Snowflake className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold">Climatisation réversible</div>
                <div className="text-xs text-muted-foreground">Fraîcheur l'été, chaleur l'hiver</div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block absolute -top-6 -right-4 w-56 rounded-2xl bg-ink text-primary-foreground shadow-lifted p-4">
            <div className="text-xs uppercase tracking-widest text-accent/90">Éligible</div>
            <div className="mt-1 font-display text-xl leading-tight">
              MaPrimeRénov' <span className="italic">2026</span>
            </div>
            <div className="mt-1 text-xs text-white/70">Jusqu'à 4 000 € d'aides</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl text-ink">{kpi}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
    </div>
  );
}

/* TRUST BAR */
function TrustBar() {
  const brands = ["Daikin", "Mitsubishi", "Atlantic", "Toshiba", "Panasonic", "LG"];
  return (
    <section className="border-y border-border bg-frost/50">
      <div className="container-page py-6 flex flex-wrap items-center justify-between gap-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Marques installées par notre réseau
        </p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {brands.map((b) => (
            <li key={b} className="font-display text-xl text-muted-foreground/80 tracking-tight">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* VALUE PROPS */
function ValueProps() {
  const items = [
    { icon: Shield, title: "Artisans vérifiés", body: "Chaque installateur est contrôlé : RGE QualiPAC, attestation fluides, assurance décennale." },
    { icon: Wallet, title: "Aides déduites", body: "MaPrimeRénov', CEE, TVA à 5,5 %. Nos pros vous chiffrent le net à payer, pas le brut." },
    { icon: Clock, title: "Devis en 48 heures", body: "Trois propositions comparables, avec matériel, main-d'œuvre et délai d'intervention détaillés." },
    { icon: Leaf, title: "Fluides nouvelle génération", body: "R32 et R290 basse empreinte carbone, conformes au calendrier F-Gas 2026." },
  ];
  return (
    <section className="container-page py-24">
      <div className="max-w-2xl">
        <SectionEyebrow>Pourquoi ClimConfort</SectionEyebrow>
        <h2 className="mt-3 text-4xl sm:text-5xl text-ink text-balance">
          Une mise en relation exigeante, <span className="italic text-primary">pas un annuaire.</span>
        </h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="group relative rounded-3xl border border-border bg-card p-6 hover:shadow-soft hover:-translate-y-0.5 transition"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
              <it.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* PROCESS */
function Process() {
  const steps = [
    { n: "01", title: "Décrivez votre besoin", body: "Type de logement, surface, split ou multisplit. Deux minutes chrono." },
    { n: "02", title: "Nous consultons le réseau", body: "Trois artisans qualifiés dans votre département sont sélectionnés." },
    { n: "03", title: "Comparez les devis", body: "Vous recevez matériel, main-d'œuvre et calendrier détaillés." },
    { n: "04", title: "Installation à votre rythme", body: "Vous choisissez le pro. Sans frais, sans engagement." },
  ];
  return (
    <section id="process" className="bg-ink text-primary-foreground">
      <div className="container-page py-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div>
            <SectionEyebrow tone="dark">Le parcours</SectionEyebrow>
            <h2 className="mt-3 text-4xl sm:text-5xl text-balance">
              De l'idée à la <span className="italic text-accent">fraîcheur posée</span> — quatre étapes propres.
            </h2>
            <p className="mt-6 text-white/70 max-w-md">
              Un seul formulaire, trois artisans vérifiés, zéro appel de commercial. C'est ce
              qu'attendent aujourd'hui les propriétaires exigeants.
            </p>
            <a
              href="/devis"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ember-foreground shadow-ember hover:brightness-110 transition"
            >
              Démarrer maintenant <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ol className="space-y-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="grid grid-cols-[auto_1fr] gap-6 rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6 hover:bg-white/[0.07] transition"
              >
                <span className="font-display text-4xl text-accent leading-none">{s.n}</span>
                <div>
                  <h3 className="text-2xl text-white">{s.title}</h3>
                  <p className="mt-1 text-white/70 text-sm">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* SHOWCASE */
function Showcase() {
  const rows = [
    { label: "Split mural", price: "à partir de 1 490 €", body: "Idéal pour une pièce principale ou une chambre. Silencieux, discret, installé en une journée." },
    { label: "Multisplit", price: "à partir de 3 200 €", body: "Une unité extérieure, 2 à 5 unités intérieures. Le meilleur ratio confort / discrétion." },
    { label: "Gainable", price: "à partir de 6 500 €", body: "Invisible, intégré au faux-plafond. Le choix d'une maison neuve ou d'une rénovation ambitieuse." },
  ];
  return (
    <section className="container-page py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-lifted">
            <img
              src={techImg}
              alt="Technicien installant une climatisation murale"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full h-[520px] object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-6 hidden sm:block rounded-2xl bg-card border border-border shadow-soft p-5 w-64">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Garantie</div>
            <div className="mt-1 font-display text-2xl text-ink">10 ans</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Décennale artisan + garantie fabricant sur pièces.
            </p>
          </div>
        </div>

        <div>
          <SectionEyebrow>Solutions</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl text-ink text-balance">
            Trois manières de rafraîchir un logement — <span className="italic text-primary">toutes bien faites.</span>
          </h2>

          <ul className="mt-10 divide-y divide-border border-y border-border">
            {rows.map((r) => (
              <li key={r.label} className="py-6 grid grid-cols-[minmax(0,1fr)_auto] gap-6 items-baseline">
                <div className="min-w-0">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <h3 className="text-2xl text-ink">{r.label}</h3>
                    <span className="text-xs uppercase tracking-widest text-ember">{r.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* GUIDES */
function Guides() {
  const posts = [
    { img: guideReversible, cat: "Économies", read: "6 min", title: "Climatisation réversible : rentable pour chauffer en hiver ?", excerpt: "Face à la hausse des prix de l'énergie, la clim réversible reprend l'avantage sur les chaudières classiques." },
    { img: guideGainable, cat: "Confort", read: "12 min", title: "Gainable : les atouts (et les vraies limites) du système invisible", excerpt: "Silencieux, discret, mais exigeant côté travaux. Le guide complet pour arbitrer." },
    { img: guideSansUnite, cat: "Réglementation", read: "15 min", title: "Déclaration en mairie : ce qui change vraiment en 2026", excerpt: "Le calendrier F-Gas et les nouvelles règles d'urbanisme, expliquées sans jargon." },
  ];
  return (
    <section id="guides" className="bg-frost">
      <div className="container-page py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-xl">
            <SectionEyebrow>Journal</SectionEyebrow>
            <h2 className="mt-3 text-4xl sm:text-5xl text-ink text-balance">
              Mieux comprendre, <span className="italic text-primary">mieux choisir.</span>
            </h2>
          </div>
          <a href="#" className="text-sm text-primary hover:underline underline-offset-4">
            Tous les articles →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl overflow-hidden bg-card border border-border hover:shadow-lifted transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-primary">{p.cat}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span>{p.read}</span>
                </div>
                <h3 className="mt-3 text-xl text-ink leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
                  Lire l'article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* TESTIMONIALS */
function Testimonials() {
  const list = [
    { name: "Camille R.", city: "Nantes", quote: "Trois devis en 36 heures, tous détaillés. J'ai économisé 1 200 € vs le premier artisan que j'avais appelé seule." },
    { name: "Yannis B.", city: "Aix-en-Provence", quote: "Aucun démarchage, aucun mail push. L'installateur retenu est venu à la date promise, propre et carré." },
    { name: "Élodie & Marc", city: "Lyon 6ᵉ", quote: "MaPrimeRénov' calculée dans le devis. On savait exactement ce qu'on allait payer, à l'euro près." },
  ];
  return (
    <section className="container-page py-24">
      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 items-start">
        <div>
          <SectionEyebrow>Ils l'ont fait</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl text-ink text-balance">
            <span className="italic text-primary">4,8/5</span> — la moyenne que défendent nos artisans.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Nous publions chaque avis, y compris ceux qui piquent. C'est comme ça que le réseau
            progresse.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {list.map((t, i) => (
            <figure
              key={t.name}
              className={`rounded-3xl border border-border bg-card p-6 ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <div className="flex gap-1 text-ember">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-2xl text-ink leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                {t.name} — {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ */
function Faq() {
  const items = [
    { q: "Le service est-il vraiment gratuit ?", a: "Oui. Nous sommes rémunérés par les artisans professionnels du réseau, jamais par le particulier. Vous ne payez que si vous choisissez un devis." },
    { q: "Combien de temps pour recevoir les devis ?", a: "En moyenne 48 heures. Certains artisans répondent en quelques heures, d'autres se déplacent d'abord pour un métré précis." },
    { q: "Quelles aides puis-je toucher en 2026 ?", a: "MaPrimeRénov' (jusqu'à 4 000 € pour une PAC air/eau), les CEE, la TVA à 5,5 % en rénovation, et selon la région, des aides locales. Les artisans les intègrent au devis." },
    { q: "Puis-je installer une clim en copropriété ?", a: "Oui, mais l'accord de l'AG est requis pour l'unité extérieure visible en façade. Nos artisans vous préparent le dossier technique à présenter." },
    { q: "Quel entretien après installation ?", a: "Une visite annuelle est recommandée, obligatoire au-delà de 4 kg de fluide frigorigène. Le contrat d'entretien démarre autour de 150 € / an." },
  ];
  return (
    <section id="faq" className="container-page py-24">
      <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-14">
        <div>
          <SectionEyebrow>Questions fréquentes</SectionEyebrow>
          <h2 className="mt-3 text-4xl sm:text-5xl text-ink text-balance">
            Ce que les gens <span className="italic text-primary">nous demandent vraiment.</span>
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {items.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-lg text-ink pr-6">{it.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground group-open:bg-primary group-open:text-primary-foreground group-open:border-primary transition">
                  <Plus className="h-4 w-4 group-open:hidden" />
                  <Minus className="h-4 w-4 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm max-w-2xl">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FINAL CTA */
function FinalCta() {
  return (
    <section id="devis" className="container-page py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink text-primary-foreground p-10 sm:p-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-ember/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-end">
          <div>
            <SectionEyebrow tone="dark">Prêt·e ?</SectionEyebrow>
            <h2 className="mt-3 text-4xl sm:text-6xl text-balance leading-[1.05]">
              Trois devis, <span className="italic text-accent">zéro engagement</span>, deux minutes.
            </h2>
            <p className="mt-6 text-white/70 max-w-xl">
              Répondez à sept questions courtes. Nous consultons trois artisans certifiés dans votre
              département. Vous choisissez — ou pas.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="/devis"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-8 py-5 text-base font-medium text-ember-foreground shadow-ember hover:brightness-110 transition"
            >
              Obtenir mes devis <ArrowRight className="h-4 w-4" />
            </a>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/70 pl-1">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Gratuit</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Sans engagement</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Artisans RGE</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Réponse 48h</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* FOOTER */
function Footer() {
  return (
    <footer className="border-t border-border bg-frost/40">
      <div className="container-page py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#" className="flex items-center gap-2">
            <Snowflake className="h-6 w-6 text-primary" />
            <span className="font-display text-2xl">
              Clim<span className="text-primary">Confort</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Le réseau français des installateurs climatisation certifiés. Trois devis, une décision
            sereine.
          </p>
        </div>
        <FooterCol title="Services" items={["Split mural", "Multisplit", "Gainable", "Pompe à chaleur"]} />
        <FooterCol title="Ressources" items={["Guides", "Aides & primes", "Réglementation", "Lexique"]} />
        <FooterCol title="Réseau" items={["Espace pro", "Devenir partenaire", "Contact", "Mentions légales"]} />
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} ClimConfort. Tous droits réservés.</span>
          <span>Made with fresh air in Paris.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-primary transition">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* BITS */
function SectionEyebrow({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] ${tone === "dark" ? "text-accent" : "text-primary"}`}>
      <span className={`h-px w-8 ${tone === "dark" ? "bg-accent" : "bg-primary"}`} />
      {children}
    </div>
  );
}

/* ICONS */
function Snowflake(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2M5 12l2-2M5 12l2 2M19 12l-2-2M19 12l-2 2" />
    </svg>
  );
}
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
}
function Shield(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /><path d="m9 12 2 2 4-4" /></svg>;
}
function Wallet(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M16 14h2" /></svg>;
}
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}
function Leaf(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 4c-8 0-14 4-14 12 0 2 1 4 3 4 8 0 12-6 12-14 0-1 0-2-1-2z" /><path d="M6 20c2-5 6-8 12-10" /></svg>;
}
function Plus(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}><path d="M12 5v14M5 12h14" /></svg>;
}
function Minus(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}><path d="M5 12h14" /></svg>;
}
function Check(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12l5 5L20 7" /></svg>;
}
function Star(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...props}><path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 21l1.2-6.5L2.5 9.9 9.1 9 12 3z" /></svg>;
}

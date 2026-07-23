import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/espace-pro")({
  head: () => ({
    meta: [
      { title: "Espace Pro — Rejoignez le réseau ClimConfort" },
      {
        name: "description",
        content:
          "Installateurs climatisation certifiés RGE : recevez des demandes de devis qualifiées près de chez vous. Inscription gratuite, sans abonnement.",
      },
      { property: "og:title", content: "Espace Pro — Réseau ClimConfort" },
      {
        property: "og:description",
        content:
          "Développez votre activité avec des leads qualifiés de particuliers prêts à installer. RGE requis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EspaceProPage,
});

function EspaceProPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ProHero />
        <ProMetrics />
        <ValueProps />
        <ProProcess />
        <PricingCards />
        <SignupForm />
        <ProTestimonials />
        <ProFaq />
      </main>
      <Footer />
    </div>
  );
}

/* ——— Header / Footer ——— */

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/60">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Snowflake className="h-6 w-6 text-primary" />
          <span className="font-display text-2xl tracking-tight">
            Clim<span className="text-primary">Confort</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition">Accueil</Link>
          <Link to="/devis" className="hover:text-foreground transition">Devis particuliers</Link>
          <a href="#tarifs" className="hover:text-foreground transition">Tarifs</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href="#inscription"
          className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-ember-foreground shadow-ember hover:brightness-110 transition"
        >
          Rejoindre le réseau
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-frost/40">
      <div className="container-page py-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} ClimConfort. Réseau national d'installateurs RGE.</span>
        <span>Inscription pro gratuite · Sans abonnement · Leads qualifiés</span>
      </div>
    </footer>
  );
}

/* ——— HERO ——— */

function ProHero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="container-page py-16 lg:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Espace pro · Installateurs RGE
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl leading-[1.02] text-balance text-ink">
            Des chantiers qualifiés, <span className="italic text-primary">livrés chaque semaine.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Rejoignez le réseau ClimConfort et recevez des demandes de particuliers déjà
            pré-qualifiés dans votre zone. Pas d'abonnement, pas d'engagement — vous payez
            uniquement les leads qui vous intéressent.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#inscription"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background shadow-lifted hover:brightness-125 transition"
            >
              Créer mon compte pro
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#tarifs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-frost transition"
            >
              Voir les tarifs
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lifted">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Tableau de bord pro · Aperçu
              </div>
              <span className="text-xs text-primary">Live</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <StatCard label="Leads reçus" value="27" trend="+18%" />
              <StatCard label="Taux de conversion" value="34%" trend="+6 pts" />
              <StatCard label="CA généré" value="42 800 €" trend="ce mois" />
              <StatCard label="Note client" value="4.9/5" trend="42 avis" />
            </div>
            <div className="mt-6 rounded-2xl bg-frost/60 p-4">
              <div className="text-xs text-muted-foreground">Nouvelle demande · il y a 2 min</div>
              <div className="mt-1 font-display text-lg text-ink">
                Split mural 5 kW — Lyon 6e
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Budget : 3 500 – 4 500 €</span>
                <span className="rounded-full bg-ember/15 px-2 py-1 text-ember">Chaud</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden lg:block animate-float rounded-2xl border border-border bg-card px-4 py-3 text-sm shadow-soft">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Demande signée en 6 jours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-2xl text-ink">{value}</div>
      <div className="text-xs text-primary mt-1">{trend}</div>
    </div>
  );
}

/* ——— METRICS BAR ——— */

function ProMetrics() {
  const items = [
    { v: "1 850", l: "artisans partenaires" },
    { v: "12 400", l: "chantiers livrés" },
    { v: "48h", l: "délai moyen de mise en relation" },
    { v: "0 €", l: "abonnement mensuel" },
  ];
  return (
    <section className="border-y border-border bg-frost/50">
      <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((i) => (
          <div key={i.l} className="text-center">
            <div className="font-display text-3xl text-ink">{i.v}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ——— VALUE PROPS ——— */

function ValueProps() {
  const items = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Leads géolocalisés",
      body: "Recevez uniquement les demandes dans les départements que vous couvrez. Filtrage par type d'installation et budget minimum.",
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Sans abonnement",
      body: "Vous payez à l'unité, seulement les leads que vous acceptez. Aucune facturation cachée, aucun engagement de durée.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Demandes vérifiées",
      body: "Chaque particulier est appelé par notre équipe pour valider son projet, son budget et sa disponibilité avant transmission.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Alertes en temps réel",
      body: "SMS et e-mail dès qu'une demande matche votre zone. Vous êtes le premier à contacter le client.",
    },
    {
      icon: <Chart className="h-6 w-6" />,
      title: "Pilotage complet",
      body: "Tableau de bord, suivi de conversion, avis clients, exports CRM. Toute votre activité au même endroit.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Visibilité renforcée",
      body: "Profil pro sur notre annuaire, badge « Recommandé » selon vos performances, mise en avant locale.",
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" /> Pourquoi rejoindre
          </div>
          <h2 className="mt-3 font-display text-4xl text-ink">
            Un partenaire qui <span className="italic text-primary">développe votre carnet.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nous investissons en acquisition pour vous. Vous restez concentré sur ce que
            vous faites de mieux : installer.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl border border-border bg-card p-6 hover:shadow-soft transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {it.icon}
              </div>
              <div className="mt-4 font-display text-xl text-ink">{it.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— PROCESS ——— */

function ProProcess() {
  const steps = [
    { n: "01", t: "Inscription en 3 min", d: "Créez votre profil, ajoutez votre certification RGE et vos zones d'intervention." },
    { n: "02", t: "Validation sous 24h", d: "Notre équipe vérifie vos qualifications, assurance décennale et références." },
    { n: "03", t: "Recevez vos leads", d: "Alerte instantanée pour chaque demande qualifiée qui matche votre profil." },
    { n: "04", t: "Signez, facturez, brillez", d: "Suivi client intégré, collecte d'avis automatique, remontée au classement local." },
  ];
  return (
    <section className="py-20 bg-frost/40 border-y border-border">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-8 bg-primary" /> Comment ça marche
            </div>
            <h2 className="mt-3 font-display text-4xl text-ink">
              De l'inscription au premier chantier <span className="italic text-primary">en 5 jours.</span>
            </h2>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl bg-card border border-border p-6">
              <div className="font-display text-5xl text-primary/30">{s.n}</div>
              <div className="mt-3 font-display text-xl text-ink">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— PRICING ——— */

function PricingCards() {
  const plans = [
    {
      name: "Découverte",
      price: "0 €",
      unit: "à l'inscription",
      desc: "Testez le réseau sans risque.",
      features: ["Profil vérifié", "3 leads offerts", "Alertes SMS + email", "Support 5j/7"],
      cta: "Commencer",
      highlight: false,
    },
    {
      name: "Actif",
      price: "39 €",
      unit: "/ lead accepté",
      desc: "Le plus choisi par les artisans.",
      features: [
        "Leads illimités",
        "Badge « Recommandé »",
        "Tableau de bord avancé",
        "Mise en avant locale",
        "Collecte d'avis automatique",
      ],
      cta: "Rejoindre",
      highlight: true,
    },
    {
      name: "Enseigne",
      price: "Sur devis",
      unit: "multi-agences",
      desc: "Pour les réseaux régionaux et nationaux.",
      features: [
        "Comptes multi-utilisateurs",
        "API + intégration CRM",
        "Account manager dédié",
        "SLA garanti",
        "Reporting mensuel",
      ],
      cta: "Nous contacter",
      highlight: false,
    },
  ];
  return (
    <section id="tarifs" className="py-20 bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" /> Tarifs
          </div>
          <h2 className="mt-3 font-display text-4xl text-ink">
            Payez uniquement <span className="italic text-primary">ce qui vous rapporte.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pas de frais fixes. Pas d'engagement. Vous décidez quels leads vous intéressent.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-8 border transition ${
                p.highlight
                  ? "bg-ink text-background border-transparent shadow-lifted relative"
                  : "bg-card border-border"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-ember px-3 py-1 text-xs text-ember-foreground shadow-ember">
                  Populaire
                </span>
              )}
              <div className={`text-xs uppercase tracking-[0.14em] ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                {p.name}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>{p.unit}</span>
              </div>
              <p className={`mt-2 text-sm ${p.highlight ? "text-background/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${p.highlight ? "text-ember" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#inscription"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
                  p.highlight
                    ? "bg-ember text-ember-foreground hover:brightness-110"
                    : "bg-ink text-background hover:brightness-125"
                }`}
              >
                {p.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— SIGNUP FORM ——— */

type FormData = {
  company: string;
  siret: string;
  contact: string;
  role: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
  city: string;
  zones: string;
  services: string[];
  employees: string;
  rge: boolean;
  insurance: boolean;
  password: string;
  cgu: boolean;
};

function SignupForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    company: "",
    siret: "",
    contact: "",
    role: "Gérant",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    zones: "",
    services: [],
    employees: "1-5",
    rge: false,
    insurance: false,
    password: "",
    cgu: false,
  });

  const totalSteps = 4;
  const progress = useMemo(() => Math.round((step / totalSteps) * 100), [step]);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const toggleService = (s: string) =>
    setData((d) => ({
      ...d,
      services: d.services.includes(s) ? d.services.filter((x) => x !== s) : [...d.services, s],
    }));

  const canNext = () => {
    if (step === 1) return data.company && data.siret.length >= 9;
    if (step === 2) return data.contact && data.email && data.phone;
    if (step === 3) return data.zipcode && data.city && data.services.length > 0;
    if (step === 4) return data.password.length >= 8 && data.rge && data.insurance && data.cgu;
    return false;
  };

  if (submitted) {
    return (
      <section id="inscription" className="py-20 bg-background">
        <div className="container-page max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-8 w-8" />
          </div>
          <h2 className="mt-6 font-display text-4xl text-ink">
            Bienvenue dans le réseau <span className="italic text-primary">ClimConfort.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nous avons bien reçu votre inscription. Un chargé de compte vous appelle sous 24h ouvrées
            pour valider votre profil, vérifier vos qualifications et activer votre tableau de bord.
          </p>
          <div className="mt-8 rounded-3xl border border-border bg-frost/60 p-6 text-left">
            <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Prochaines étapes</div>
            <ol className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3"><span className="font-display text-primary">1.</span> Vérification KBIS + assurance décennale</li>
              <li className="flex gap-3"><span className="font-display text-primary">2.</span> Appel de qualification (15 min)</li>
              <li className="flex gap-3"><span className="font-display text-primary">3.</span> Activation du compte et premiers leads</li>
            </ol>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscription" className="py-20 bg-frost/40 border-y border-border">
      <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" /> Inscription
          </div>
          <h2 className="mt-3 font-display text-4xl text-ink">
            3 minutes pour <span className="italic text-primary">ouvrir votre compte pro.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un formulaire simple, une validation humaine sous 24h, et vos premiers leads dans la foulée.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Certification RGE obligatoire",
              "Assurance décennale à jour",
              "Zones d'intervention personnalisables",
              "Résiliation à tout moment",
            ].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <Check className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-foreground">{x}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Étape {step} sur {totalSteps}</span>
            <span className="text-primary">{progress}%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-frost overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (step < totalSteps) {
                if (canNext()) setStep(step + 1);
                return;
              }
              if (canNext()) setSubmitted(true);
            }}
          >
            {step === 1 && (
              <>
                <StepTitle title="Votre entreprise" subtitle="Ces informations restent confidentielles." />
                <Field label="Raison sociale">
                  <input value={data.company} onChange={(e) => update("company", e.target.value)} required className={inputCls} placeholder="Ex. Clim' Pro Rhône" />
                </Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="SIRET">
                    <input value={data.siret} onChange={(e) => update("siret", e.target.value.replace(/\D/g, "").slice(0, 14))} required className={inputCls} placeholder="14 chiffres" />
                  </Field>
                  <Field label="Effectif">
                    <select value={data.employees} onChange={(e) => update("employees", e.target.value)} className={inputCls}>
                      <option>1-5</option><option>6-15</option><option>16-50</option><option>50+</option>
                    </select>
                  </Field>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <StepTitle title="Contact principal" subtitle="Nous vous appelons uniquement pour valider votre compte." />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nom du contact">
                    <input value={data.contact} onChange={(e) => update("contact", e.target.value)} required className={inputCls} placeholder="Prénom Nom" />
                  </Field>
                  <Field label="Fonction">
                    <select value={data.role} onChange={(e) => update("role", e.target.value)} className={inputCls}>
                      <option>Gérant</option><option>Commercial</option><option>Technicien</option><option>Autre</option>
                    </select>
                  </Field>
                </div>
                <Field label="E-mail professionnel">
                  <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} required className={inputCls} placeholder="contact@entreprise.fr" />
                </Field>
                <Field label="Téléphone">
                  <input type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} required className={inputCls} placeholder="06 12 34 56 78" />
                </Field>
              </>
            )}

            {step === 3 && (
              <>
                <StepTitle title="Zone & prestations" subtitle="Vous recevrez uniquement les demandes correspondantes." />
                <Field label="Adresse du siège">
                  <input value={data.address} onChange={(e) => update("address", e.target.value)} className={inputCls} placeholder="12 rue de la Paix" />
                </Field>
                <div className="grid sm:grid-cols-[140px_1fr] gap-4">
                  <Field label="Code postal">
                    <input value={data.zipcode} onChange={(e) => update("zipcode", e.target.value.replace(/\D/g, "").slice(0, 5))} required className={inputCls} placeholder="69006" />
                  </Field>
                  <Field label="Ville">
                    <input value={data.city} onChange={(e) => update("city", e.target.value)} required className={inputCls} placeholder="Lyon" />
                  </Field>
                </div>
                <Field label="Zones d'intervention supplémentaires (départements)">
                  <input value={data.zones} onChange={(e) => update("zones", e.target.value)} className={inputCls} placeholder="Ex. 69, 01, 38" />
                </Field>
                <div>
                  <div className="text-sm font-medium text-foreground mb-2">Prestations proposées</div>
                  <div className="flex flex-wrap gap-2">
                    {["Split mural", "Multisplit", "Gainable", "PAC air/eau", "PAC air/air", "Entretien", "Dépannage"].map((s) => {
                      const active = data.services.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`rounded-full px-4 py-2 text-sm border transition ${
                            active
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-border text-foreground hover:border-primary/50"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <StepTitle title="Qualifications & accès" subtitle="Dernière étape avant la validation manuelle." />
                <Field label="Mot de passe">
                  <input type="password" value={data.password} onChange={(e) => update("password", e.target.value)} required minLength={8} className={inputCls} placeholder="8 caractères minimum" />
                </Field>
                <Checkbox checked={data.rge} onChange={(v) => update("rge", v)}>
                  Je certifie être titulaire d'une qualification <strong>RGE</strong> (QualiPAC, Qualibat, Qualifelec…) en cours de validité.
                </Checkbox>
                <Checkbox checked={data.insurance} onChange={(v) => update("insurance", v)}>
                  Je dispose d'une <strong>assurance décennale</strong> à jour couvrant l'activité climatisation.
                </Checkbox>
                <Checkbox checked={data.cgu} onChange={(v) => update("cgu", v)}>
                  J'accepte les <a href="#" className="underline text-primary">conditions générales</a> et la politique de confidentialité.
                </Checkbox>
              </>
            )}

            <div className="pt-4 flex items-center justify-between">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="text-sm text-muted-foreground hover:text-foreground">
                  ← Retour
                </button>
              ) : <span />}
              <button
                type="submit"
                disabled={!canNext()}
                className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ember-foreground shadow-ember hover:brightness-110 transition disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
              >
                {step === totalSteps ? "Créer mon compte" : "Continuer"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-foreground mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function StepTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-ink">{title}</div>
      <div className="text-sm text-muted-foreground mt-1">{subtitle}</div>
    </div>
  );
}

function Checkbox({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: React.ReactNode }) {
  return (
    <label className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 cursor-pointer hover:border-primary/40 transition">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 accent-primary"
      />
      <span className="text-sm text-foreground">{children}</span>
    </label>
  );
}

/* ——— TESTIMONIALS ——— */

function ProTestimonials() {
  const items = [
    { n: "Karim B.", c: "Clim' Sud Provence", t: "En 3 mois j'ai signé 22 chantiers via ClimConfort. Les leads sont vraiment qualifiés, ça change tout." },
    { n: "Sophie L.", c: "Fresh Air 44", t: "Zéro abonnement, je paie ce qui rentre. J'ai arrêté deux autres plateformes depuis." },
    { n: "David R.", c: "Génie Clim Île-de-France", t: "Le tableau de bord et la collecte d'avis nous font gagner un temps fou. Support au top." },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container-page">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
          <span className="h-px w-8 bg-primary" /> Ils nous font confiance
        </div>
        <h2 className="mt-3 font-display text-4xl text-ink max-w-2xl">
          Des artisans qui <span className="italic text-primary">développent leur activité</span> avec nous.
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.n} className="rounded-3xl border border-border bg-card p-6">
              <div className="flex gap-1 text-ember">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">« {i.t} »</p>
              <div className="mt-6 text-sm">
                <div className="font-medium text-ink">{i.n}</div>
                <div className="text-muted-foreground">{i.c}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— FAQ ——— */

function ProFaq() {
  const qs = [
    { q: "Faut-il être certifié RGE pour s'inscrire ?", a: "Oui, la certification RGE (QualiPAC, Qualibat, Qualifelec…) est obligatoire. C'est la garantie de qualité que nous offrons à nos particuliers." },
    { q: "Comment sont facturés les leads ?", a: "Vous prépayez un portefeuille (à partir de 100 €). Chaque lead accepté est débité, généralement entre 25 et 55 € selon la nature du chantier." },
    { q: "Puis-je refuser un lead ?", a: "Oui, vous avez 2h pour accepter ou refuser une demande. Un refus n'est jamais facturé." },
    { q: "Comment se passe la validation de mon compte ?", a: "Sous 24h ouvrées : vérification du KBIS, de l'assurance décennale et de la certification RGE, puis appel de qualification de 15 min." },
    { q: "Y a-t-il un engagement ?", a: "Aucun. Vous pouvez suspendre ou clôturer votre compte à tout moment depuis votre tableau de bord." },
    { q: "Puis-je récupérer les avis clients ?", a: "Oui, tous vos avis sont exportables et peuvent être affichés sur votre site via un widget dédié." },
  ];
  return (
    <section id="faq" className="py-20 bg-frost/40 border-t border-border">
      <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" /> Questions fréquentes
          </div>
          <h2 className="mt-3 font-display text-4xl text-ink">
            Tout ce que vous devez savoir <span className="italic text-primary">avant de rejoindre.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Une autre question ? Notre équipe pro est disponible du lundi au vendredi, 9h–18h.
          </p>
        </div>
        <div className="space-y-3">
          {qs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 transition">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-6">
                <span className="font-display text-lg text-ink">{f.q}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground group-open:bg-ink group-open:text-background group-open:border-ink transition">
                  <Plus className="h-4 w-4 group-open:hidden" />
                  <Minus className="h-4 w-4 hidden group-open:block" />
                </span>
              </summary>
              <p className="mt-4 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— ICONS ——— */

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
function Check(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12l5 5L20 7" /></svg>;
}
function Shield(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /><path d="m9 12 2 2 4-4" /></svg>;
}
function Wallet(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M16 14h2" /></svg>;
}
function Target(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>;
}
function Zap(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>;
}
function Chart(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 20V6M10 20v-8M16 20v-5M22 20H2" /></svg>;
}
function Award(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="9" r="6" /><path d="m8.5 14-2 7 5.5-3 5.5 3-2-7" /></svg>;
}
function Plus(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}><path d="M12 5v14M5 12h14" /></svg>;
}
function Minus(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...props}><path d="M5 12h14" /></svg>;
}
function Star(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...props}><path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 21l1.2-6.5L2.5 9.9 9.1 9 12 3z" /></svg>;
}

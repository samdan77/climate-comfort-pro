import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import emailjs from '@emailjs/browser';

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Devis climatisation gratuits en 48h — ClimConfort" },
      {
        name: "description",
        content:
          "Recevez 3 devis d'installateurs climatisation certifiés RGE près de chez vous. Gratuit, sans engagement, réponse sous 48h.",
      },
      { property: "og:title", content: "Devis climatisation gratuits — ClimConfort" },
      {
        property: "og:description",
        content:
          "3 devis d'artisans RGE, comparés et vérifiés. Prenez la bonne décision, au juste prix.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevisPage,
});

/* ————————————————————— PAGE ————————————————————— */

function DevisPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <DevisHero />
        <QuoteFlow />
        <ReassurancePanel />
        <ProcessStrip />
        <SocialProof />
        <PriceBenchmarks />
        <MiniFaq />
      </main>
      <Footer />
    </div>
  );
}

/* ————————————————————— HEADER / FOOTER (shared look) ————————————————————— */

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
          <a href="/#process" className="hover:text-foreground transition">Comment ça marche</a>
          <a href="/#guides" className="hover:text-foreground transition">Guides</a>
          <a href="/#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href="#form"
          className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-ember-foreground shadow-ember hover:brightness-110 transition"
        >
          Démarrer mon devis
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
        <span>Devis 100% gratuits · Sans engagement · Réponse en 48h</span>
      </div>
    </footer>
  );
}

/* ————————————————————— HERO ————————————————————— */

function DevisHero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="container-page py-16 lg:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            Devis gratuit · sans engagement
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl leading-[1.02] text-balance text-ink">
            Trois devis, <span className="italic text-primary">une décision sereine.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Décrivez votre projet en 90 secondes. Nous consultons trois installateurs RGE proches
            de chez vous et vous transmettons leurs propositions comparées sous 48h.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <MetricPill value="48h" label="Réponse moyenne" />
            <MetricPill value="4.8/5" label="Satisfaction client" />
            <MetricPill value="12 400" label="Projets accompagnés" />
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {[
            "Artisans certifiés RGE QualiPAC",
            "Aides 2026 & MaPrimeRénov' intégrées",
            "Prix négociés jusqu'à −22%",
            "Suivi humain jusqu'à la mise en service",
          ].map((t) => (
            <li key={t} className="rounded-2xl border border-border bg-card/60 p-4 flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MetricPill({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-ink leading-none">{value}</div>
      <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

/* ————————————————————— FORM ————————————————————— */

type FormData = {
  travaux: string;
  prestation: string;
  bien: string;
  pieces: string;
  surface: string;
  hauteur: string;
  description: string;
  delai: string;
  objectif: string;
  civilite: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  cp: string;
  ville: string;
};

const EMPTY: FormData = {
  travaux: "", prestation: "", bien: "", pieces: "", surface: "", hauteur: "",
  description: "", delai: "", objectif: "", civilite: "", prenom: "", nom: "",
  email: "", telephone: "", cp: "", ville: "",
};

const STEPS = [
  { id: 1, title: "Votre projet", eyebrow: "Étape 1 / 4" },
  { id: 2, title: "Votre logement", eyebrow: "Étape 2 / 4" },
  { id: 3, title: "Vos préférences", eyebrow: "Étape 3 / 4" },
  { id: 4, title: "Vos coordonnées", eyebrow: "Étape 4 / 4" },
];

function QuoteFlow() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const progress = useMemo(() => (submitted ? 100 : ((step - 1) / STEPS.length) * 100 + 8), [step, submitted]);

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const canNext = () => {
    if (step === 1) return data.travaux && data.prestation && data.bien;
    if (step === 2) return data.pieces && data.surface && data.hauteur;
    if (step === 3) return data.delai && data.objectif;
    if (step === 4)
      return data.civilite && data.prenom && data.nom && data.email && data.telephone && data.cp;
    return false;
  };

  const handleSubmit = async () => {
    if (!canNext()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_cxslyu1",        // ← À REMPLACER
        "template_ye57awi",       // ← À REMPLACER
        {
          from_name: `${data.prenom} ${data.nom}`,
          prenom: data.prenom,
          nom: data.nom,
          email: data.email,
          telephone: data.telephone,
          code_postal: data.cp,
          ville: data.ville,
          civilite: data.civilite,
          travaux: data.travaux,
          prestation: data.prestation,
          type_bien: data.bien,
          pieces: data.pieces,
          surface: data.surface,
          hauteur: data.hauteur,
          description: data.description || "Aucune description",
          delai: data.delai,
          objectif: data.objectif,
        },
        "E-fnaqkCWhkjVRtGm"         // ← À REMPLACER
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form" className="relative py-16 lg:py-24 bg-background">
      <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div className="rounded-3xl border border-border bg-card shadow-elegant overflow-hidden">
          {/* progress */}
          <div className="h-1.5 bg-frost">
            <div
              className="h-full bg-gradient-to-r from-primary to-ember transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {submitted ? (
            <SuccessPanel data={data} onReset={() => { setSubmitted(false); setStep(1); setData(EMPTY); }} />
          ) : (
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-8 bg-primary" />
                {STEPS[step - 1].eyebrow}
              </div>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl text-ink">
                {STEPS[step - 1].title}
              </h2>

              <div className="mt-8 space-y-8">
                {/* ... tout le contenu des étapes (step 1 à 4) reste IDENTIQUE ... */}
                {step === 1 && ( /* ton code existant */ )}
                {step === 2 && ( /* ton code existant */ )}
                {step === 3 && ( /* ton code existant */ )}
                {step === 4 && ( /* ton code existant */ )}
              </div>

              {/* Navigation */}
              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30"
                >
                  ← Retour
                </button>

                {step < STEPS.length ? (
                  <button
                    type="button"
                    onClick={() => canNext() && setStep((s) => s + 1)}
                    disabled={!canNext()}
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background hover:brightness-110 transition disabled:opacity-40"
                  >
                    Continuer <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canNext() || loading}
                    className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-medium text-ember-foreground shadow-ember hover:brightness-110 transition disabled:opacity-40"
                  >
                    {loading ? "Envoi en cours..." : "Recevoir mes 3 devis"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Colonne de droite (reassurance) — reste identique */}
        <aside className="space-y-4">
          {/* ... ton code SidebarCard ... */}
        </aside>
      </div>
    </section>
  );
}

function SuccessPanel({ data, onReset }: { data: FormData; onReset: () => void }) {
  return (
    <div className="p-10 lg:p-14 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Check className="h-7 w-7" />
      </div>
      <h2 className="mt-6 font-display text-4xl text-ink">Merci {data.prenom || ""} !</h2>
      <p className="mt-3 max-w-md mx-auto text-muted-foreground">
        Votre demande est enregistrée. Un conseiller ClimConfort vous rappelle dans les prochaines
        heures pour valider les détails, puis vous recevez 3 devis comparés sous 48h.
      </p>
      <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-xl mx-auto text-left">
        <TimelineStep n="1" label="Appel de qualification" />
        <TimelineStep n="2" label="Consultation des artisans" />
        <TimelineStep n="3" label="Réception des 3 devis" />
      </div>
      <button
        onClick={onReset}
        className="mt-10 text-sm text-primary hover:underline"
      >
        Envoyer une autre demande →
      </button>
    </div>
  );
}

function TimelineStep({ n, label }: { n: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-frost/40 p-4">
      <div className="font-display text-2xl text-primary">{n}</div>
      <div className="text-sm mt-1">{label}</div>
    </div>
  );
}

function SidebarCard({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
          {icon}
        </span>
        <div className="font-display text-lg text-ink">{title}</div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

/* ————————————————————— FORM PRIMITIVES ————————————————————— */

function RadioGroup({
  label, value, onChange, options,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <div>
      <div className="text-sm font-medium text-ink">{label}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={[
                "rounded-full px-4 py-2 text-sm border transition",
                active
                  ? "bg-ink text-background border-ink shadow-sm"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/40",
              ].join(" ")}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, placeholder, type = "text", textarea, step,
}: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; type?: string; textarea?: boolean; step?: string;
}) {
  const base =
    "mt-2 w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition";
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      {textarea ? (
        <textarea
          className={base + " min-h-[110px] resize-y"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={base}
          type={type}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

/* ————————————————————— BELOW-THE-FOLD ————————————————————— */

function ReassurancePanel() {
  const items = [
    { k: "0€", v: "Le service est 100% gratuit, financé par notre réseau d'artisans." },
    { k: "3", v: "Devis comparés, jamais un seul : vous gardez le pouvoir de décision." },
    { k: "48h", v: "Délai moyen de retour, souvent bien plus rapide en zone urbaine." },
    { k: "RGE", v: "Tous nos partenaires sont certifiés RGE QualiPAC & assurés décennale." },
  ];
  return (
    <section className="py-16 lg:py-20 bg-frost/40 border-y border-border">
      <div className="container-page grid md:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.k}>
            <div className="font-display text-5xl text-ink">{i.k}</div>
            <p className="mt-2 text-sm text-muted-foreground">{i.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessStrip() {
  const steps = [
    { n: "01", t: "Vous décrivez le projet", d: "90 secondes, un formulaire clair, aucun engagement." },
    { n: "02", t: "Nous qualifions par téléphone", d: "Un conseiller vous rappelle pour affiner besoins et budget." },
    { n: "03", t: "3 artisans RGE répondent", d: "Devis détaillés, prix, marques, délais, garanties." },
    { n: "04", t: "Vous choisissez, on vous suit", d: "Suivi de chantier jusqu'à la mise en service." },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" /> Le parcours
          </div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-ink">
            Un chemin balisé, sans mauvaise surprise.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition">
              <div className="font-display text-3xl text-primary">{s.n}</div>
              <div className="mt-3 font-display text-xl text-ink">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const reviews = [
    { name: "Léa M.", city: "Lyon 6", stars: 5, quote: "Trois devis clairs en 36h, j'ai économisé 900€ sur mon multisplit." },
    { name: "Karim B.", city: "Toulouse", stars: 5, quote: "Le conseiller a détecté une aide dont j'ignorais l'existence. Impeccable." },
    { name: "Sophie R.", city: "Nantes", stars: 5, quote: "Installation propre, artisan ponctuel, service après-pose au top." },
  ];
  return (
    <section className="py-20 bg-ink text-background">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-8 bg-accent" /> Ils ont sauté le pas
          </div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">
            <span className="italic text-accent">4.8 / 5</span> — sur plus de 3 200 avis clients.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 font-display text-xl leading-snug">"{r.quote}"</p>
              <div className="mt-6 text-sm text-white/60">{r.name} · {r.city}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceBenchmarks() {
  const rows = [
    { type: "Split mural simple (1 pièce)", range: "1 800 – 2 900 €", note: "Chambre, bureau, salon compact" },
    { type: "Bi-split (2 unités)", range: "3 200 – 4 800 €", note: "Salon + chambre parentale" },
    { type: "Multisplit (3-5 unités)", range: "5 400 – 8 900 €", note: "Maison familiale, étage complet" },
    { type: "Gainable (maison entière)", range: "9 500 – 15 000 €", note: "Discret, homogène, valorise le bien" },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" /> Repères de prix
          </div>
          <h2 className="mt-3 font-display text-4xl text-ink">
            Ce que <span className="italic text-primary">vous devriez</span> payer, en 2026.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fourchettes indicatives, pose comprise, avant déduction des aides.
            Votre devis personnalisé peut descendre bien plus bas selon votre logement.
          </p>
        </div>
        <div className="rounded-3xl border border-border overflow-hidden">
          {rows.map((r, i) => (
            <div
              key={r.type}
              className={`flex flex-wrap items-baseline justify-between gap-4 p-6 ${i !== rows.length - 1 ? "border-b border-border" : ""} bg-card`}
            >
              <div>
                <div className="font-display text-xl text-ink">{r.type}</div>
                <div className="text-sm text-muted-foreground mt-1">{r.note}</div>
              </div>
              <div className="font-display text-2xl text-primary">{r.range}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniFaq() {
  const qs = [
    { q: "Le service est-il vraiment gratuit ?", a: "Oui, à 100%. Notre réseau est financé par les artisans partenaires, pas par vous." },
    { q: "Suis-je engagé après ma demande ?", a: "Aucun engagement. Vous recevez 3 devis, vous choisissez librement — ou pas du tout." },
    { q: "Combien de temps pour recevoir les devis ?", a: "48h en moyenne. Souvent 24h en zone urbaine, jusqu'à 72h en zone rurale." },
    { q: "Mes données sont-elles protégées ?", a: "Vos coordonnées ne sont partagées qu'avec les 3 artisans sélectionnés. Jamais revendues." },
  ];
  return (
    <section className="py-20 bg-frost/40 border-t border-border">
      <div className="container-page grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-8 bg-primary" /> Vos questions
          </div>
          <h2 className="mt-3 font-display text-4xl text-ink">
            Tout ce qu'il faut savoir <span className="italic text-primary">avant de démarrer.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {qs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 open:shadow-elegant transition">
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

/* ————————————————————— ICONS (local, no dep) ————————————————————— */

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
function Star(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...props}><path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.9 6.1 21l1.2-6.5L2.5 9.9 9.1 9 12 3z" /></svg>;
}

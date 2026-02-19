import { motion } from "framer-motion";
import productsImage from "@/assets/products-overview.jpg";

const categories = [
  {
    name: "Tee",
    description: "Erlesene Teemischungen aus aller Welt – von beruhigendem Kräutertee bis belebendem Grüntee.",
    items: ["Kräutertee-Mischungen", "Grüner Tee", "Schwarztee", "Früchtetee", "Ayurveda-Tee"],
  },
  {
    name: "Honig",
    description: "Regionaler Honig von Imkern aus der Umgebung – naturbelassen und voller Geschmack.",
    items: ["Blütenhonig", "Waldhonig", "Akazienhonig", "Honig mit Kräutern"],
  },
  {
    name: "Duftöle & Aromatherapie",
    description: "Naturreine ätherische Öle für Wohlbefinden und Entspannung.",
    items: ["Lavendelöl", "Pfefferminzöl", "Eukalyptusöl", "Duftlampen", "Räucherstäbchen"],
  },
  {
    name: "Steine & Kristalle",
    description: "Handverlesene Edelsteine und Kristalle als Dekoration oder für die persönliche Sammlung.",
    items: ["Amethyst", "Rosenquarz", "Bergkristall", "Achat", "Dekosteine"],
  },
  {
    name: "Gesundheit & Wohlbefinden",
    description: "Ausgewählte Produkte, die Körper und Geist unterstützen.",
    items: ["Nahrungsergänzung", "Naturkosmetik", "Salben & Tinkturen", "Bücher über Gesundheit"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ProductsPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <img src={productsImage} alt="Produkte" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/55" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-display text-4xl md:text-5xl text-primary-foreground text-center"
        >
          Unsere Produkte
        </motion.h1>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed mb-12">
            Jedes Produkt in unserem Sortiment wurde mit Bedacht ausgewählt. Wir legen Wert auf
            Natürlichkeit, Qualität und die Geschichte hinter den Dingen.
          </p>

          <div className="space-y-8">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg border border-border p-6 md:p-8"
              >
                <h2 className="font-display text-2xl text-foreground mb-2">{cat.name}</h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block bg-muted text-muted-foreground font-body text-xs px-3 py-1.5 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;

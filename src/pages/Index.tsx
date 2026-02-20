import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Heart, Coffee } from "lucide-react";
import heroImage from "@/assets/hero-shop.jpg";
import teestubeImage from "@/assets/teestube.jpg";
import productsImage from "@/assets/products-overview.jpg";
import ausstattungImage from "@/assets/ausstattung-laden.webp";

const highlights = [
  {
    icon: Leaf,
    title: "Natürliche Produkte",
    description: "Hochwertige Tees, Duftöle und Honig aus der Region – mit Sorgfalt ausgewählt.",
  },
  {
    icon: Heart,
    title: "Achtsamkeit",
    description: "Jeder Gegenstand erzählt eine Geschichte. Wir ehren die Arbeit vergangener Generationen.",
  },
  {
    icon: Coffee,
    title: "Gemütliche Teestube",
    description: "Unter 600 Jahre altem Gebälk genießen Sie Tee in historischem Ambiente.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Oasen der Gesundheit – Ladeninneres"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-4 leading-tight">
            Oasen der Gesundheit
          </h1>
          <p className="font-serif text-lg md:text-xl text-primary-foreground/90 mb-8 italic">
            Ihr Ort für Achtsamkeit, Wohlbefinden und natürliche Schätze in Eschweiler
          </p>
          <Link
            to="/ueber-uns"
            className="inline-block bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Mehr erfahren
          </Link>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-center text-foreground mb-12"
          >
            Was uns besonders macht
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg p-8 text-center border border-border"
              >
                <item.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teestube Teaser */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={teestubeImage}
                alt="Die gemütliche Teestube"
                className="rounded-lg w-full aspect-square object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Unsere Teestube
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Im Obergeschoss erwartet Sie eine einzigartige Teestube: Historisches Mauerwerk aus
                vergangenen Jahrhunderten, eingefasst in Glas, und ein Gebälk aus 600 Jahre alten
                Bäumen schaffen eine Atmosphäre, die Geschichte atmet.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Genießen Sie eine Tasse erlesenen Tee in diesem besonderen Ambiente – ein Ruhepol
                mitten in Eschweiler.
              </p>
              <Link
                to="/kontakt"
                className="inline-block bg-primary text-primary-foreground font-body text-sm uppercase tracking-wider px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Besuchen Sie uns
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wer wir sind Teaser */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Wer wir sind
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Seit 2001 ist die Oasen der Gesundheit ein Ort der Achtsamkeit in Eschweiler. 
                In liebevoll restaurierten Räumen verbinden sich antike Einrichtungsgegenstände 
                mit natürlichen Produkten zu einem einzigartigen Erlebnis.
              </p>
              <Link
                to="/ueber-uns"
                className="inline-block border border-primary text-primary font-body text-sm uppercase tracking-wider px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Mehr über uns
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <img
                src={heroImage}
                alt="Oasen der Gesundheit – Ladeninneres"
                className="rounded-lg w-full aspect-square object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ausstattung Teaser */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={ausstattungImage}
                alt="Unsere einzigartige Ausstattung"
                className="rounded-lg w-full aspect-square object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Unser Ladenlokal
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Antike Möbel, historisches Mauerwerk und ein Gebälk aus 600 Jahre alten Bäumen – 
                jeder Raum erzählt seine eigene Geschichte und lädt zum Verweilen ein.
              </p>
              <Link
                to="/ausstattung"
                className="inline-block border border-primary text-primary font-body text-sm uppercase tracking-wider px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Ausstattung entdecken
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Teaser */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Natürlich. Achtsam. Ausgewählt.
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Von regionalen Honigsorten über handverlesene Teemischungen bis hin zu Kristallen und
              Duftölen – entdecken Sie unser Sortiment.
            </p>
            <img
              src={productsImage}
              alt="Auswahl unserer Produkte"
              className="rounded-lg w-full max-w-2xl mx-auto aspect-video object-cover mb-8"
            />
            <Link
              to="/produkte"
              className="inline-block border border-primary text-primary font-body text-sm uppercase tracking-wider px-8 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Alle Produkte ansehen
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;

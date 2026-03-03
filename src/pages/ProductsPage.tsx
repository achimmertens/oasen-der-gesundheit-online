import { motion } from "framer-motion";
import productsImage from "@/assets/products-overview.jpg";

import imgDuftoele from "@/assets/Produkte/Duftoele.webp";
import imgElfen from "@/assets/Produkte/Elfen.webp";
import imgEngel from "@/assets/Produkte/Engel.webp";
import imgHalsketten from "@/assets/Produkte/Halsketten.webp";
import imgHonig from "@/assets/Produkte/Honig.webp";
import imgKlangschalen from "@/assets/Produkte/Klangschalen.webp";
import imgKoerperpflege from "@/assets/Produkte/Koerperpflegemittel.webp";
import imgKristalle from "@/assets/Produkte/Kristalle.webp";
import imgLichtspiele from "@/assets/Produkte/Lichtspiele.webp";
import imgRaeucherwerk from "@/assets/Produkte/Raeucherwerk.webp";
import imgTeelichter from "@/assets/Produkte/Teelichter.webp";
import imgTees from "@/assets/Produkte/Tees.webp";
import imgTeeservices from "@/assets/Produkte/Teeservices.webp";
import imgWindspiele from "@/assets/Produkte/Windspiele.webp";

const products = [
  { name: "Tees", image: imgTees, description: "Erlesene Teemischungen aus aller Welt – von beruhigendem Kräutertee bis belebendem Grüntee." },
  { name: "Honig", image: imgHonig, description: "Regionaler Honig von Imkern aus der Umgebung – naturbelassen und voller Geschmack." },
  { name: "Duftöle", image: imgDuftoele, description: "Naturreine ätherische Öle für Wohlbefinden, Entspannung und Aromatherapie." },
  { name: "Räucherwerk", image: imgRaeucherwerk, description: "Hochwertige Räucherstäbchen und Harze für eine wohltuende Atmosphäre." },
  { name: "Kristalle", image: imgKristalle, description: "Handverlesene Edelsteine und Kristalle – als Dekoration oder für die persönliche Sammlung." },
  { name: "Halsketten", image: imgHalsketten, description: "Einzigartige Schmuckstücke aus Naturmaterialien und Edelsteinen." },
  { name: "Klangschalen", image: imgKlangschalen, description: "Handgefertigte Klangschalen für Meditation, Entspannung und Klangtherapie." },
  { name: "Teeservices", image: imgTeeservices, description: "Liebevoll ausgewählte Teeservices für den besonderen Teegenuss." },
  { name: "Teelichter", image: imgTeelichter, description: "Stimmungsvolle Teelichter und Halter für eine gemütliche Atmosphäre." },
  { name: "Körperpflegemittel", image: imgKoerperpflege, description: "Natürliche Pflege für Körper und Seele – sanft und wohltuend." },
  { name: "Engel", image: imgEngel, description: "Zarte Engelfiguren als Geschenk oder persönlicher Begleiter." },
  { name: "Elfen", image: imgElfen, description: "Zauberhafte Elfenfiguren, die Fantasie und Naturverbundenheit ausstrahlen." },
  { name: "Lichtspiele", image: imgLichtspiele, description: "Dekorative Lichtspiele, die jeden Raum in warmes Licht tauchen." },
  { name: "Windspiele", image: imgWindspiele, description: "Harmonische Windspiele für Garten, Terrasse und Balkon." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" as const },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl text-foreground mb-1">{product.name}</h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
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

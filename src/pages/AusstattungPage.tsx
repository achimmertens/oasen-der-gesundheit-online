import { motion } from "framer-motion";
import aussenImage from "@/assets/ausstattung-aussen.webp";
import ladenImage from "@/assets/ausstattung-laden.webp";
import regalImage from "@/assets/ausstattung-regal.webp";
import kristalleImage from "@/assets/ausstattung-kristalle.webp";
import schmuckImage from "@/assets/ausstattung-schmuck.webp";
import tischImage from "@/assets/ausstattung-tisch.webp";

const images = [
  { src: aussenImage, alt: "Schaufenster und Eingang des Ladens" },
  { src: ladenImage, alt: "Blick in den Laden mit Produkten und Lichtsäulen" },
  { src: kristalleImage, alt: "Kristalle, Schmuck und Mineralien" },
  { src: schmuckImage, alt: "Edelstein-Vitrinen und Kettenauswahl" },
  { src: regalImage, alt: "Regale mit Naturprodukten und Büchern" },
  { src: tischImage, alt: "Antiker Tisch mit Glasplatte in der Teestube" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const AusstattungPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            Unsere Ausstattung
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Unser Laden vereint historischen Charme mit liebevoll kuratierter Einrichtung. 
            Entdecken Sie leuchtende Lichtsäulen, antike Möbelstücke und handgefertigte 
            Vitrinen – jeder Winkel erzählt seine eigene Geschichte.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((img, i) => (
              <motion.div
                key={img.alt}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`rounded-lg w-full object-cover ${
                    i === 0 ? "aspect-video" : "aspect-[4/3]"
                  }`}
                />
                <p className="font-body text-xs text-muted-foreground mt-2 text-center italic">
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AusstattungPage;

import { motion } from "framer-motion";
import teestubeImage from "@/assets/teestube.jpg";
import heroImage from "@/assets/hero-shop.jpg";

const AboutPage = () => {
  return (
    <main className="pt-20">
      {/* Hero banner */}
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Ladeninneres" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/55" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-display text-4xl md:text-5xl text-primary-foreground text-center"
        >
          Wer wir sind
        </motion.h1>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">Unsere Geschichte</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Am 23. März 2001 öffnete Heinz Mertes die Türen der <strong>Oasen der Gesundheit</strong> in
              Eschweiler – mit einer klaren Vision: einen Ort zu schaffen, an dem Gesundheit, Achtsamkeit
              und die Wertschätzung handwerklicher Arbeit im Mittelpunkt stehen.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Was als kleines Geschäft begann, ist über die Jahre zu einer wahren Oase geworden. In liebevoll
              restaurierten Räumen verbinden sich antike Einrichtungsgegenstände mit natürlichen Produkten
              zu einem einzigartigen Erlebnis für alle Sinne.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Der Besitzer legt großen Wert darauf, die Geschichte hinter jedem Gegenstand zu bewahren.
              Antike Möbel, die von Handwerkern vergangener Generationen geschaffen wurden, finden hier
              einen neuen Platz – und erzählen ihre Geschichte weiter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <img
              src={teestubeImage}
              alt="Historische Teestube"
              className="rounded-lg w-full aspect-[4/3] object-cover"
            />
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">Die Teestube</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Im Obergeschoss befindet sich unsere kleine, gemütliche Teestube – ein Ort der Ruhe und
                Besinnung. Hier treffen sich Geschichte und Gegenwart auf besondere Weise.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Mauerstücke aus vergangenen Jahrhunderten sind in Glas eingefasst und erzählen stumm
                von der langen Geschichte unserer Stadt. Das Gebälk über der Teestube stammt von Bäumen,
                die vor rund 600 Jahren gewachsen sind. Es wurde aus einem alten Eschweiler Haus gerettet
                und überdacht nun diesen einzigartigen Raum.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Bei einer Tasse handverlesenem Tee können Sie hier zur Ruhe kommen und die besondere
                Atmosphäre auf sich wirken lassen.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto bg-card rounded-lg p-8 border border-border text-center"
          >
            <h2 className="font-display text-2xl text-foreground mb-3">Unsere Werte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {[
                { title: "Achtsamkeit", text: "Wir begegnen jedem Produkt und jedem Besucher mit Aufmerksamkeit." },
                { title: "Natürlichkeit", text: "Unsere Produkte sind sorgfältig ausgewählt – rein und natürlich." },
                { title: "Nachhaltigkeit", text: "Wir bewahren und ehren, was vergangene Generationen geschaffen haben." },
              ].map((v) => (
                <div key={v.title}>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

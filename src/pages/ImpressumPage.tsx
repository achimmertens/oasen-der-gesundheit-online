import { motion } from "framer-motion";

const ImpressumPage = () => {
  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-16 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8"
        >
          Impressum
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-muted-foreground space-y-6 leading-relaxed"
        >
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Oasen der Gesundheit<br />
              Langwahn 58<br />
              52249 Eschweiler<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Vertreten durch</h2>
            <p>xxxx</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Kontakt</h2>
            <p>
              Telefon: xxxx<br />
              E-Mail: xxxx
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              xxxx
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Steuernummer</h2>
            <p>xxxx</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              xxxx<br />
              Langwahn 58<br />
              52249 Eschweiler
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">Haftungsausschluss</h2>
            <h3 className="text-sm font-semibold text-foreground mt-4 mb-1">Haftung für Inhalte</h3>
            <p className="text-sm">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
            <h3 className="text-sm font-semibold text-foreground mt-4 mb-1">Haftung für Links</h3>
            <p className="text-sm">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-border text-center">
            <p className="text-sm italic text-muted-foreground">
              Diese Seite befindet sich derzeit noch im Aufbau.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ImpressumPage;

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="section-padding bg-card">
        <div className="container-narrow text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            Kontakt
          </motion.h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Wir freuen uns auf Ihren Besuch! Kommen Sie vorbei und lassen Sie sich von unserer
            Atmosphäre verzaubern.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Adresse</h3>
                  <address className="not-italic font-body text-sm text-muted-foreground leading-relaxed">
                    Oasen der Gesundheit<br />
                    Langwahn 58<br />
                    52249 Eschweiler<br />
                    Deutschland
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Öffnungszeiten</h3>
                  <div className="font-body text-sm text-muted-foreground space-y-1">
                    <p>Montag – Freitag: 10:00 – 18:00 Uhr</p>
                    <p>Samstag: 10:00 – 14:00 Uhr</p>
                    <p>Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Kontaktdaten</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Besuchen Sie uns gerne persönlich – wir beraten Sie mit Freude!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg overflow-hidden border border-border aspect-square md:aspect-auto md:min-h-[400px]"
            >
              <iframe
                title="Standort Oasen der Gesundheit"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.5!2d6.2636!3d50.8181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0997c3f3f3f3f%3A0x0!2sLangwahn+58%2C+52249+Eschweiler!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              Oasen der Gesundheit
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Ihr Ort für Achtsamkeit, natürliche Produkte und innere Ruhe – seit 2001 in Eschweiler.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Startseite", path: "/" },
                { label: "Wer wir sind", path: "/ueber-uns" },
                { label: "Unser Ladenlokal", path: "/ausstattung" },
                { label: "Unsere Produkte", path: "/produkte" },
                { label: "Kontakt", path: "/kontakt" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Kontakt
            </h4>
            <address className="not-italic font-body text-sm text-muted-foreground space-y-1 leading-relaxed">
              <p>Langwahn 58</p>
              <p>52249 Eschweiler</p>
              <p>Deutschland</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Oasen der Gesundheit. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { config, fields, singleton, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  singletons: {
    hero: singleton({
      label: "Hero / Startseite",
      path: "content/hero",
      schema: {
        tagline: fields.text({
          label: "Tagline",
          description: "Hauptüberschrift im Hero-Bereich",
        }),
        taglineHighlight: fields.text({
          label: "Tagline Highlight",
          description: "Hervorgehobenes Wort (gold)",
        }),
        subtitle: fields.text({
          label: "Untertitel",
          multiline: true,
        }),
      },
    }),

    about: singleton({
      label: "Über mich",
      path: "content/about",
      schema: {
        name: fields.text({ label: "Name" }),
        role: fields.text({ label: "Rolle / Position" }),
        intro: fields.text({
          label: "Einleitung",
          multiline: true,
          description: "Erster, hervorgehobener Absatz",
        }),
        body: fields.text({
          label: "Haupttext",
          multiline: true,
          description: "Restlicher Text (Absätze mit Leerzeile trennen)",
        }),
        quote: fields.text({
          label: "Zitat",
          multiline: true,
        }),
      },
    }),

    contact: singleton({
      label: "Kontakt",
      path: "content/contact",
      schema: {
        heading: fields.text({ label: "Überschrift" }),
        headingHighlight: fields.text({
          label: "Überschrift Highlight (gold)",
        }),
        subtext: fields.text({ label: "Untertext" }),
        email: fields.text({ label: "E-Mail Adresse" }),
        phone: fields.text({ label: "Telefonnummer" }),
        address: fields.text({ label: "Adresse", multiline: true }),
      },
    }),

    impressum: singleton({
      label: "Impressum",
      path: "content/impressum",
      schema: {
        companyName: fields.text({ label: "Firmenname" }),
        address: fields.text({ label: "Adresse", multiline: true }),
        fn: fields.text({ label: "FN" }),
        court: fields.text({ label: "Firmenbuchgericht" }),
        ceo: fields.text({ label: "Geschäftsführer" }),
        email: fields.text({ label: "E-Mail" }),
        phone: fields.text({ label: "Telefon" }),
        uid: fields.text({ label: "UID-Nr." }),
      },
    }),
  },

  collections: {
    services: collection({
      label: "Leistungen",
      path: "content/services/*",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: { label: "Titel" },
        }),
        shortText: fields.text({
          label: "Kurzfassung",
          multiline: true,
          description: "Wird auf der Startseite angezeigt",
        }),
        fullText: fields.text({
          label: "Volltext",
          multiline: true,
          description: "Wird auf der Detail-Seite angezeigt (Markdown)",
        }),
        order: fields.integer({
          label: "Reihenfolge",
          defaultValue: 0,
        }),
      },
    }),
  },
});

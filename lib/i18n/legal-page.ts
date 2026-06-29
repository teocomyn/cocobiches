import type { Locale } from "../i18n-config";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  heroTitle: string;
  heroLead: string;
  updated: string;
  sections: LegalSection[];
};

const CONTENT: Record<Locale, Record<"legal" | "privacy", LegalPageContent>> = {
  fr: {
    legal: {
      heroTitle: "Mentions légales",
      heroLead:
        "Informations éditoriales, contact et hébergement du site cocobiches.fr.",
      updated: "Dernière mise à jour · juin 2026",
      sections: [
        {
          title: "Éditeur du site",
          paragraphs: [
            "Cocobiches SAS · 5 bis rue de Fontenay · 78000 Versailles · France",
            "Directrice de publication : Élise Comyn",
            "Contact : welcome@cocobiches.com · 01 39 51 43 50",
          ],
        },
        {
          title: "Objet du site",
          paragraphs: [
            "Le site cocobiches.fr présente le groupe hôtelier Cocobiches et ses trois maisons à Versailles : Hôtel d'Angleterre, Hôtel du Jeu de Paume et Apparts de l'Oncle Louis.",
            "Les réservations s'effectuent sur les sites dédiés de chaque établissement ou via nos équipes.",
          ],
        },
        {
          title: "Hébergement",
          paragraphs: [
            "Vercel Inc. · 440 N Barranca Ave #4133 · Covina, CA 91723 · États-Unis",
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "Textes, visuels et identité graphique sont protégés. Toute reproduction sans autorisation écrite de Cocobiches SAS est interdite.",
          ],
        },
      ],
    },
    privacy: {
      heroTitle: "Politique de confidentialité",
      heroLead:
        "Comment nous traitons vos données lorsque vous nous contactez ou vous inscrivez à la newsletter.",
      updated: "Dernière mise à jour · juin 2026",
      sections: [
        {
          title: "Données collectées",
          paragraphs: [
            "Nous traitons les données que vous saisissez dans nos formulaires : nom, adresse e-mail, message, et le cas échéant informations liées à une demande de devis séminaire.",
          ],
        },
        {
          title: "Finalités et base légale",
          paragraphs: [
            "Répondre à vos demandes (intérêt légitime) et, pour la newsletter, vous adresser notre lettre avec votre consentement.",
          ],
        },
        {
          title: "Durée de conservation",
          paragraphs: [
            "Vos données sont conservées trois ans après le dernier contact, sauf obligation légale contraire.",
          ],
        },
        {
          title: "Vos droits",
          paragraphs: [
            "Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition en écrivant à dpo@cocobiches.com.",
          ],
        },
        {
          title: "Mesure d'audience",
          paragraphs: [
            "Si vous acceptez les cookies de mesure, nous utilisons Plausible Analytics, sans cookies tiers ni revente de données.",
          ],
        },
      ],
    },
  },
  en: {
    legal: {
      heroTitle: "Legal notice",
      heroLead: "Editorial information, contact and hosting for cocobiches.fr.",
      updated: "Last updated · June 2026",
      sections: [
        {
          title: "Site publisher",
          paragraphs: [
            "Cocobiches SAS · 5 bis rue de Fontenay · 78000 Versailles · France",
            "Publishing director: Élise Comyn",
            "Contact: welcome@cocobiches.com · +33 1 30 84 14 00",
          ],
        },
        {
          title: "Purpose of the site",
          paragraphs: [
            "cocobiches.fr presents the Cocobiches hotel group and its three houses in Versailles: Hôtel d'Angleterre, Hôtel du Jeu de Paume and Apparts de l'Oncle Louis.",
            "Bookings are made on each property's dedicated site or through our team.",
          ],
        },
        {
          title: "Hosting",
          paragraphs: [
            "Vercel Inc. · 440 N Barranca Ave #4133 · Covina, CA 91723 · United States",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "Texts, visuals and brand identity are protected. Any reproduction without written permission from Cocobiches SAS is prohibited.",
          ],
        },
      ],
    },
    privacy: {
      heroTitle: "Privacy policy",
      heroLead: "How we handle your data when you contact us or subscribe to our newsletter.",
      updated: "Last updated · June 2026",
      sections: [
        {
          title: "Data collected",
          paragraphs: [
            "We process the information you enter in our forms: name, email address, message, and where relevant details for a seminar quote request.",
          ],
        },
        {
          title: "Purposes and legal basis",
          paragraphs: [
            "To respond to your requests (legitimate interest) and, for the newsletter, to send you our letter with your consent.",
          ],
        },
        {
          title: "Retention period",
          paragraphs: [
            "Your data is kept for three years after the last contact, unless a longer period is required by law.",
          ],
        },
        {
          title: "Your rights",
          paragraphs: [
            "You may request access, rectification, erasure or object to processing by writing to dpo@cocobiches.com.",
          ],
        },
        {
          title: "Analytics",
          paragraphs: [
            "If you accept analytics cookies, we use Plausible Analytics, with no third-party cookies and no sale of data.",
          ],
        },
      ],
    },
  },
};

export function getLegalPageContent(
  locale: Locale,
  kind: "legal" | "privacy",
): LegalPageContent {
  return CONTENT[locale][kind];
}

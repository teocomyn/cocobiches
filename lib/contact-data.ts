import { GROUP_NAP, HOTEL_NAP } from "./site-nap";

export const CONTACT_EMAIL = GROUP_NAP.email;
export const CONTACT_PHONE = GROUP_NAP.phone;
export const CONTACT_PHONE_DISPLAY = GROUP_NAP.phoneDisplay;
export const CONTACT_ADDRESS = `${GROUP_NAP.address.postalCode} ${GROUP_NAP.address.addressLocality}, France`;

export type ContactDepartment = {
  id: "general" | "press" | "commercial" | "events";
  email: string;
};

export const CONTACT_DEPARTMENTS: ContactDepartment[] = [
  { id: "general", email: GROUP_NAP.email },
  { id: "press", email: GROUP_NAP.pressEmail },
  { id: "commercial", email: GROUP_NAP.commercialEmail },
  { id: "events", email: GROUP_NAP.eventsEmail },
];

export { HOTEL_NAP, GROUP_NAP };

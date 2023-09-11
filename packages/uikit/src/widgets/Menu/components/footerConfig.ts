import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [],
  },
  {
    label: t("Help"),
    items: [],
  },
  {
    label: t("Developers"),
    items: [],
  },
];

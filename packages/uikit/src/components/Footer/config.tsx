import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, YoutubeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "",
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));

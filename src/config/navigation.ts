import { routes } from "./routes";

export type NavigationItemType = {
  id: string;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  disabled?: boolean;
  badge?: string;
};

/**
 * Header navigation
 */
export const headerNav: NavigationItemType[] = [
  {
    id: "documentation",
    label: "Documentação",
    href: routes.home,
  },
  {
    id: "collection",
    label: "Coleção",
    href: routes.collection,
  },
  {
    id: "icons",
    label: "Ícones",
    href: routes.icons,
  },
];
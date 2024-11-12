export const v1_0 = [
  {
    id: "accountBox",
    name: "Account Box",
    tag: ["accountBox", "people", "person", "user", "account"],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    tag: ["agriculture", "tractor", "car"],
  },
  {
    id: "bevipentagono",
    name: "Bevipentágono",
    tag: ["bevipentagono", "bevi"],
  },
];
export const v1_1 = [
  {
    id: "alternateEmail",
    name: "Alternate E-mail",
    tag: ["alternateEmail", "email", "@", "at"],
  },
  {
    id: "article",
    name: "Article",
    tag: ["article", "paper", "post"],
  },
  {
    id: "bank",
    name: "Bank",
    tag: ["bank", "build"],
  },
  {
    id: "bookmark",
    name: "Bookmark",
    tag: ["bookmark", "save"],
  },
  {
    id: "chat",
    name: "Chat",
    tag: ["chat", "conversation"],
  },
];

export const iconsByVersion = [
  {
    version: "1.0",
    icons: v1_0,
  },
  {
    version: "1.1",
    icons: v1_1,
  },
];

export const allIconsSorted = [...v1_0, ...v1_1].sort((a, b) =>
  a.id.localeCompare(b.id)
);

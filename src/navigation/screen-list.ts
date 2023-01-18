import Routes, { RoutesT } from "./routes";

export type ScreenListItemT = {
  title: string;
  destination: RoutesT;
};

export const SCREEN_LIST: ScreenListItemT[] = [
  { title: "📱 Contact List", destination: Routes.ContactList },
];

// app/usa/layout.tsx
import { ReactNode } from "react";
import "./usa-theme.css";

export const metadata = {
  title: {
    default: "USA Commercial Real Estate | Murivest Group",
    template: "%s | Murivest USA",
  },
};

export default function USALayout({ children }: { children: ReactNode }) {
  return <div className="font-sans">{children}</div>;
}

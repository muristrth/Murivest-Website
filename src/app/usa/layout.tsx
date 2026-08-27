// app/usa/layout.tsx
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "USA Commercial Real Estate | Murivest Group",
    template: "%s | Murivest USA",
  },
};

export default function USALayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
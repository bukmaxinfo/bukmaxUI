import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — bukmax.llc",
  description: "Get in touch with bukmax.llc to discuss your next project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

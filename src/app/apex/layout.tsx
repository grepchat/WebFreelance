import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "APEX Detailing — Grepchat Landings",
  description: "Детейлинг центр премиум-класса. Керамика, полировка, пленка. Ваша машина достойна совершенства.",
  openGraph: {
    title: "APEX Detailing — Премиум детейлинг",
    description: "Блеск, защита, совершенство. Лучшие мастера и материалы в России.",
    url: "/apex",
    siteName: "APEX Detailing",
    locale: "ru_RU",
    type: "website",
  },
};

export default function ApexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-oswald bg-apex-bg text-white antialiased">
      {children}
    </div>
  );
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUMIÈRE Beauty Studio — Grepchat Landings",
  description: "Премиальный бьюти-салон в России. Стрижки, окрашивание, маникюр, косметология. Запишитесь онлайн!",
  openGraph: {
    title: "LUMIÈRE Beauty Studio — Искусство быть собой",
    description: "Премиальный бьюти-салон. Запишитесь онлайн!",
    url: "/lumiere",
    siteName: "LUMIÈRE Beauty Studio",
    locale: "ru_RU",
    type: "website",
  },
};

export default function LumiereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-manrope text-lumiere-dark bg-lumiere-bg antialiased">
      {children}
    </div>
  );
}
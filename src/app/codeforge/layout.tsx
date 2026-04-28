import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeForge Academy — Стань разработчиком за 6 месяцев",
  description: "Практические курсы программирования с менторством и гарантией трудоустройства. Полный путь от новичка до Pro.",
  openGraph: {
    title: "CodeForge Academy — Курсы программирования",
    description: "Стань разработчиком за 6 месяцев с профессиональными менторами.",
    url: "/codeforge",
    siteName: "CodeForge Academy",
    locale: "ru_RU",
    type: "website",
  },
};

export default function CodeForgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-inter text-code-text bg-code-bg antialiased">
      {children}
    </div>
  );
}
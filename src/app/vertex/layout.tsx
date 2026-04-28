import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VERTEX Строй — Строительство коммерческих объектов под ключ",
  description: "Строим офисы, ТЦ, склады и бизнес-центры. 15 лет опыта, гарантия качества, соблюдение сроков.",
  openGraph: {
    title: "VERTEX Строй — Строительство коммерческих объектов",
    description: "Надежный генподрядчик для вашего бизнеса. Проект, стройка, сдача объекта.",
    url: "/vertex",
    siteName: "VERTEX Строй",
    locale: "ru_RU",
    type: "website",
  },
};

export default function VertexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-dmsans bg-vertex-light text-vertex-bg antialiased">
      {children}
    </div>
  );
}
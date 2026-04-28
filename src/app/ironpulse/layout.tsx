import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRONPULSE Coaching — Онлайн-коучинг и фитнес",
  description: "Персональные программы тренировок и питания от профессионального тренера. Трансформация тела онлайн.",
  openGraph: {
    title: "IRONPULSE Coaching — Онлайн-коучинг и фитнес",
    description: "Начни свою трансформацию сегодня. Тренировки онлайн с результатом.",
    url: "/ironpulse",
    siteName: "IRONPULSE Coaching",
    locale: "ru_RU",
    type: "website",
  },
};

export default function IronpulseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-montserrat text-white bg-iron-bg antialiased">
      {children}
    </div>
  );
}
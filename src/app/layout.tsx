import type { Metadata } from "next";
import { Assistant, Heebo } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reem Fitness | אימונים אישיים וליווי תזונתי",
  description:
    "Reem Fitness הוא אתר תדמית פרימיום בעברית לאימונים אישיים, בניית תוכניות, ליווי תזונתי ותהליך שינוי אמיתי.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${assistant.variable} ${heebo.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
    </html>
  );
}

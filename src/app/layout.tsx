import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="he" dir="rtl" className="h-full scroll-smooth">
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
    </html>
  );
}

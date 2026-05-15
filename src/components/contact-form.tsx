"use client";

import { useState } from "react";
import { MessageCircleMore } from "lucide-react";

type ContactFormProps = {
  phoneNumber: string;
  whatsappHref: string;
};

export function ContactForm({
  phoneNumber,
  whatsappHref,
}: ContactFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const whatsappMessage = `היי ראם, קוראים לי ${fullName || "ללא שם"}.\nטלפון: ${
      phone || "לא נמסר"
    }\nהמטרה שלי: ${goal || "לא צוינה"}\nהודעה: ${message || "לא נכתבה הודעה נוספת"}`;

    window.open(
      `${whatsappHref}&text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 w-full max-w-[820px] text-right">
      <div className="grid gap-4 sm:gap-[18px]">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-200">שם מלא</span>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="h-14 rounded-[18px] border border-white/10 bg-black/50 px-5 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500/40"
            placeholder="השם שלך"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-200">טלפון</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="h-14 rounded-[18px] border border-white/10 bg-black/50 px-5 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500/40"
            placeholder="מספר ליצירת קשר"
            inputMode="tel"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-200">מטרה</span>
          <select
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            className="h-14 rounded-[18px] border border-white/10 bg-black/50 px-5 text-white outline-none transition focus:border-red-500/40"
          >
            <option value="" className="bg-zinc-950 text-zinc-400">
              בחר מטרה
            </option>
            <option value="חיטוב" className="bg-zinc-950 text-white">
              חיטוב
            </option>
            <option value="עלייה במסת שריר" className="bg-zinc-950 text-white">
              עלייה במסת שריר
            </option>
            <option value="כניסה לשגרה ומשמעת" className="bg-zinc-950 text-white">
              כניסה לשגרה ומשמעת
            </option>
            <option value="שיפור כושר כללי" className="bg-zinc-950 text-white">
              שיפור כושר כללי
            </option>
            <option value="ליווי תזונתי" className="bg-zinc-950 text-white">
              ליווי תזונתי
            </option>
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-200">הודעה</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="min-h-[132px] rounded-[18px] border border-white/10 bg-black/50 px-5 py-4 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500/40"
            placeholder="ספר בקצרה על המטרה שלך, מה חשוב לך, ואיפה אתה רוצה לראות שינוי."
          />
        </label>
      </div>

      <div className="mt-6">
        <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
          <MessageCircleMore className="h-4 w-4" />
          <span>שלח הודעה בוואטסאפ</span>
        </button>
        <p className="mt-4 text-center text-sm text-zinc-400">
          או התקשר:{" "}
          <a href={`tel:${phoneNumber}`} className="font-semibold text-zinc-200 transition hover:text-white">
            054-360-0009
          </a>
        </p>
      </div>
    </form>
  );
}

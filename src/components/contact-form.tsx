"use client";

import { useState } from "react";
import { MessageCircleMore, PhoneCall } from "lucide-react";

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `היי Reem, קוראים לי ${fullName || "ללא שם"}.\nטלפון: ${
      phone || "לא נמסר"
    }\nהמטרה שלי: ${goal || "לא צוינה"}`;

    window.open(
      `${whatsappHref}&text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-[28px] p-6 text-right sm:p-8"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="text-right">
          <p className="font-display text-2xl font-black text-white">שלח הודעה</p>
          <p className="mt-1 text-sm text-zinc-400">
            ההודעה תיפתח ישירות בוואטסאפ עם הפרטים שלך.
          </p>
        </div>
        <div className="icon-shell shrink-0">
          <MessageCircleMore className="h-5 w-5" />
        </div>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-200">שם מלא</span>
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            className="rounded-[18px] border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500/40"
            placeholder="השם שלך"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-200">טלפון</span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="rounded-[18px] border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500/40"
            placeholder="מספר ליצירת קשר"
            inputMode="tel"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-zinc-200">מטרה</span>
          <textarea
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
            className="min-h-32 rounded-[18px] border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-red-500/40"
            placeholder="חיטוב, מסת שריר, משמעת, חזרה לכושר..."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="submit" className="btn-primary">
          <MessageCircleMore className="h-4 w-4" />
          <span>שלח הודעה</span>
        </button>
        <a href={`tel:${phoneNumber}`} className="btn-secondary">
          <PhoneCall className="h-4 w-4 text-red-500" />
          <span>{phoneNumber}</span>
        </a>
      </div>
    </form>
  );
}

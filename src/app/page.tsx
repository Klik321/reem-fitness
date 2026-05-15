import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import {
  ArrowUpLeft,
  BadgeCheck,
  BrainCircuit,
  ClipboardList,
  Dumbbell,
  Flame,
  HeartPulse,
  MessageCircleMore,
  PhoneCall,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import {
  aboutStory,
  coachMedia,
  finalCtaPoints,
  navLinks,
  phoneNumber,
  processSteps,
  serviceHighlights,
  statsHighlights,
  testimonials,
  transformationPoints,
  whatsappHref,
} from "@/lib/site";

const serviceIcons: Record<string, LucideIcon> = {
  personal: Dumbbell,
  program: ClipboardList,
  nutrition: UtensilsCrossed,
  progress: TrendingUp,
  cutting: Flame,
  mindset: BrainCircuit,
};

const valueIcons: LucideIcon[] = [
  Target,
  BadgeCheck,
  ShieldCheck,
  HeartPulse,
  TrendingUp,
  Sparkles,
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_22%_18%,rgba(190,24,39,0.18),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(190,24,39,0.16),transparent_20%)]" />
      <header className="sticky top-0 z-50 border-b border-white/8 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(190,24,39,0.18)]">
              <span className="font-display text-lg font-black tracking-[0.25em] text-white">
                RF
              </span>
            </span>
            <div className="text-right">
              <p className="font-display text-sm font-black uppercase tracking-[0.45em] text-white">
                Reem Fitness
              </p>
              <p className="text-xs text-zinc-400">כוח, משמעת ותוצאה אמיתית</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:border-red-500/40 hover:bg-red-500/12"
          >
            <PhoneCall className="h-4 w-4 text-red-500" />
            <span>{phoneNumber}</span>
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-[1380px] flex-col gap-8 px-4 pb-16 pt-4 sm:px-6 lg:gap-10 lg:px-8 lg:pt-6">
        <section
          id="home"
          className="section-frame relative overflow-hidden px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
        >
          <div className="brick-overlay absolute inset-0 opacity-70" />
          <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-[linear-gradient(90deg,rgba(0,0,0,0.68),transparent)] lg:block" />
          <div className="relative grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <Reveal className="flex flex-col justify-center gap-6 lg:gap-8">
              <div className="space-y-4 text-right">
                <div className="flex flex-wrap items-center justify-end gap-3">
                  <span className="badge-chip">Reem Fitness</span>
                  <span className="badge-chip">אימונים אישיים בפרימיום</span>
                </div>
                <h1 className="font-display text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-[4.8rem]">
                  תבנה גוף חזק.
                  <br />
                  תבנה ביטחון.
                  <br />
                  <span className="text-red-500">תבנה משמעת.</span>
                </h1>
                <p className="max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
                  אימונים אישיים, ליווי תזונתי ותוכנית מותאמת אישית שתעזור לך
                  להגיע לתוצאה אמיתית, עם מסלול ברור, מעקב צמוד ואפס תירוצים.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a href="#contact" className="btn-primary">
                  <span>התחל עכשיו</span>
                  <ArrowUpLeft className="h-4 w-4" />
                </a>
                <a
                  href={whatsappHref}
                  className="btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircleMore className="h-4 w-4 text-red-500" />
                  <span>צור קשר בוואטסאפ</span>
                </a>
              </div>

            </Reveal>

            <Reveal delay={0.12} className="lg:justify-self-start lg:self-end">
              <div className="flex w-full min-h-[320px] items-end justify-center overflow-visible rounded-[30px] bg-transparent sm:min-h-[420px] lg:min-h-[840px] lg:max-w-[900px]">
                <Image
                  src={`/${coachMedia.heroCutout.src}`}
                  alt={coachMedia.heroCutout.alt}
                  width={786}
                  height={1080}
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="h-auto max-h-[320px] w-auto object-contain object-center drop-shadow-[0_18px_80px_rgba(0,0,0,0.55)] sm:max-h-[420px] lg:max-h-[920px] lg:scale-[1.14] lg:-translate-y-6"
                />
              </div>
            </Reveal>
          </div>

          <div className="relative mt-6 grid gap-4 md:grid-cols-3">
            {statsHighlights.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * index}>
                <article className="glass-card h-full min-h-[168px] p-5 text-right lg:p-6">
                  <p className="text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-2 font-display text-xl font-black text-zinc-100">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="relative mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <Reveal delay={0.16}>
              <article className="glass-card flex h-full flex-col justify-between gap-6 rounded-[24px] p-6 text-right lg:p-8">
                <div className="space-y-4">
                  <p className="section-kicker">ליווי ממוקד תוצאה</p>
                  {serviceHighlights.slice(0, 3).map((item) => {
                    const Icon = serviceIcons[item.icon];
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="icon-shell">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="font-display text-lg font-bold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-zinc-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a
                  href="#services"
                  className="inline-flex items-center justify-end gap-2 text-sm font-semibold text-zinc-200 transition hover:text-white"
                >
                  <span>לכל השירותים</span>
                  <ArrowUpLeft className="h-4 w-4 text-red-500" />
                </a>
              </article>
            </Reveal>

            <Reveal delay={0.22}>
              <article className="glass-card relative flex h-full min-h-[340px] overflow-hidden rounded-[24px] p-6 text-right lg:p-8">
                <div className="relative z-10 flex h-full items-center">
                  <div className="flex max-w-2xl flex-col gap-4">
                    <p className="section-kicker">מי זה Reem?</p>
                    <h2 className="font-display text-2xl font-black text-white">
                      מאמן שבונה גוף, ביטחון ומשמעת ליום-יום.
                    </h2>
                    <p className="text-sm leading-7 text-zinc-300">
                      Reem עובד בגישה חדה, מדויקת וישירה. לא עוד תוכניות כלליות,
                      אלא מסלול אישי שמחבר אימון, תזונה, אחריות והתמדה כדי לייצר
                      שינוי שנשאר לאורך זמן.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section id="about" className="section-frame px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <Reveal className="space-y-5 text-right">
              <p className="section-kicker">מי זה Reem</p>
              <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
                {aboutStory.title}
              </h2>
              <div className="space-y-4 text-base leading-8 text-zinc-300">
                {aboutStory.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="grid gap-3">
                {aboutStory.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center justify-end gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <p className="text-sm text-zinc-100">{point}</p>
                    <span className="icon-shell h-9 w-9 shrink-0">
                      <BadgeCheck className="h-4 w-4" />
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <MediaFrame
                media={coachMedia.beforeAfterStory}
                className="min-h-[420px] rounded-[28px] border-white/10 bg-black lg:min-h-[760px]"
                sizes="(max-width: 1024px) 100vw, 48vw"
                objectPosition="center top"
                label="סיפור לפני ואחרי"
                hint="שמור כאן את תמונת ה-before/after של המסע האישי"
              />
            </Reveal>
          </div>
        </section>

        <section id="services" className="section-frame px-5 py-10 sm:px-8 lg:px-10">
          <Reveal className="flex flex-col gap-4 text-right">
            <p className="section-kicker">שירותים</p>
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              מעטפת מלאה למי שרוצה תוצאה רצינית
            </h2>
            <p className="max-w-3xl text-base leading-8 text-zinc-400">
              כל מסלול נבנה לפי רמת הכושר, המטרה, שגרת החיים והקצב שאתה באמת
              יכול להחזיק. בלי רעש, בלי ניחושים, עם מערכת ברורה שמזיזה אותך קדימה.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceHighlights.map((item, index) => {
              const Icon = serviceIcons[item.icon];

              return (
                <Reveal key={item.title} delay={0.06 * index}>
                  <article className="group glass-card h-full rounded-[26px] p-6 text-right transition duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-white/7">
                    <div className="icon-shell">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-black text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="transformation" className="section-frame px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal className="order-2 space-y-5 text-right lg:order-1">
              <p className="section-kicker">שינוי אמיתי</p>
              <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
                לא רק אימון טוב. מערכת שמחזיקה אותך עקבי.
              </h2>
              <p className="text-base leading-8 text-zinc-400">
                המטרה היא לא לתת לך מוטיבציה ליומיים. המטרה היא לבנות שיטה
                שמחזיקה גם כשהשגרה לוחצת, גם כשאין חשק, וגם כשהמטרה נראית רחוקה.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {transformationPoints.map((item, index) => {
                  const Icon = valueIcons[index];
                  return (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-right">
                          <p className="font-display text-lg font-bold text-white">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-zinc-400">
                            {item.description}
                          </p>
                        </div>
                        <div className="icon-shell shrink-0">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.16} className="order-1 lg:order-2">
              <MediaFrame
                media={coachMedia.heroBody}
                className="min-h-[340px] rounded-[28px] border-white/10 bg-black lg:min-h-[560px]"
                preload
                sizes="(max-width: 1024px) 100vw, 52vw"
                objectPosition="center top"
                label="דמות טרנספורמציה"
                hint="שמור כאן פורטרט גוף לאזור השינוי"
              />
            </Reveal>
          </div>
        </section>

        <section id="gallery" className="section-frame px-5 py-10 sm:px-8 lg:px-10">
          <Reveal className="text-right">
            <p className="section-kicker">גלריה</p>
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              נראות שמרגישה כמו המותג עצמו
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_1.15fr]">
            <Reveal>
              <MediaFrame
                media={coachMedia.galleryClientMale}
                className="min-h-[280px] rounded-[24px] border-white/10 bg-black"
                sizes="(max-width: 1024px) 100vw, 31vw"
                objectPosition="center"
                label="אימון אישי צמוד"
                hint="ראם מוביל מתאמן בכל חזרה"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <MediaFrame
                media={coachMedia.galleryClientFemaleSquat}
                className="min-h-[280px] rounded-[24px] border-white/10 bg-black"
                sizes="(max-width: 1024px) 100vw, 31vw"
                objectPosition="center"
                label="דיוק וטכניקה"
                hint="ליווי בזמן אמת ותשומת לב לפרטים"
              />
            </Reveal>
            <Reveal delay={0.12} className="lg:row-span-2">
              <MediaFrame
                media={coachMedia.galleryLatPulldown}
                className="min-h-[360px] rounded-[28px] border-white/10 bg-black lg:min-h-[580px]"
                sizes="(max-width: 1024px) 100vw, 36vw"
                objectPosition="center top"
                label="הכוונה בכל תנועה"
                hint="אימון שמחבר משמעת, התמדה ותוצאה"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <MediaFrame
                media={coachMedia.gallerySeatedRow}
                className="min-h-[380px] rounded-[24px] border-white/10 bg-black"
                sizes="(max-width: 1024px) 100vw, 31vw"
                objectPosition="center top"
                label="קואצ'ינג ממוקד"
                hint="שליטה בתנועה וביצוע איכותי"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <MediaFrame
                media={coachMedia.gallerySingleArmRow}
                className="min-h-[380px] rounded-[24px] border-white/10 bg-black"
                sizes="(max-width: 1024px) 100vw, 31vw"
                objectPosition="center top"
                label="ליווי אחד על אחד"
                hint="אימון אישי עם נוכחות חזקה"
              />
            </Reveal>
          </div>
        </section>

        <section id="process" className="section-frame px-5 py-10 sm:px-8 lg:px-10">
          <Reveal className="text-right">
            <p className="section-kicker">תהליך העבודה</p>
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              איך מתחילים ועובדים נכון מהיום הראשון
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-zinc-400">
              תהליך ברור, מסודר ואישי שמוריד רעש ומייצר התקדמות אמיתית בכל שלב.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.kicker} delay={0.06 * index}>
                <article className="glass-card h-full rounded-[24px] p-6 text-right">
                  <p className="section-kicker">{step.kicker}</p>
                  <h3 className="mt-4 font-display text-2xl font-black text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          id="testimonials"
          className="section-frame relative overflow-hidden px-5 py-10 sm:px-8 lg:px-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(190,24,39,0.16),transparent_22%)]" />
          <Reveal className="relative text-right">
            <p className="section-kicker">המלצות לקוחות</p>
            <h2 className="font-display text-3xl font-black text-white sm:text-5xl">
              מה המתאמנים אומרים
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-400">
              חוות דעת שממחישות איך ליווי מדויק, משמעת ועקביות נראים בשטח.
            </p>
          </Reveal>

          <div className="relative mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item, index) => (
              <Reveal key={item.name + item.quote} delay={0.06 * index}>
                <article className="glass-card flex h-full flex-col rounded-[26px] border-red-500/20 p-6 text-right shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
                  <Quote className="h-10 w-10 text-red-500" />
                  <p className="mt-6 text-lg leading-9 text-zinc-100">
                    {item.quote}
                  </p>
                  <div className="mt-auto pt-6">
                    <div className="mb-4 flex justify-end gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-red-500 text-red-500"
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t border-red-500/20 pt-4">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-red-500/50 bg-white/5 font-display text-2xl font-black text-white">
                        {item.name}
                      </span>
                      <p className="text-sm text-zinc-400">{item.name} · מתאמן של ראם פיטנס</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="relative grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <Reveal className="space-y-5 text-right">
              <p className="section-kicker">צור קשר</p>
              <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
                מוכן להתחיל את השינוי שלך?
              </h2>
              <p className="text-base leading-8 text-zinc-300">
                אם אתה רוצה מסלול אישי שמחבר אימון, תזונה ומשמעת למערכת אחת
                שעובדת, זה הזמן לשלוח הודעה ולהתחיל לזוז.
              </p>
              <div className="space-y-3">
                {finalCtaPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-end gap-3 rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3"
                  >
                    <p className="text-sm text-zinc-200">{item}</p>
                    <span className="icon-shell h-9 w-9 shrink-0">
                      <BadgeCheck className="h-4 w-4" />
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href={whatsappHref}
                  className="btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircleMore className="h-4 w-4" />
                  <span>שלח הודעה בוואטסאפ</span>
                </a>
                <a href={`tel:${phoneNumber}`} className="btn-secondary">
                  <PhoneCall className="h-4 w-4 text-red-500" />
                  <span>{phoneNumber}</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ContactForm phoneNumber={phoneNumber} whatsappHref={whatsappHref} />
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}

'use client';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex text-[clamp(1.8rem,2.4vw,2.5rem)] font-semibold leading-none text-[#7dc4df] [font-family:'Dancing_Script','Brush_Script_MT',cursive]">
        {eyebrow}
      </div>
      <div className="mt-3 text-[18px] text-[#2b567d]">{title}</div>
      {description ? (
        <p className="mt-5 max-w-2xl text-[16px] italic text-[#6a8094]">{description}</p>
      ) : null}
    </div>
  );
}

type PageTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageTitle({ eyebrow, title, description }: PageTitleProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-review-red">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-700">
          {description}
        </p>
      </div>
    </section>
  );
}

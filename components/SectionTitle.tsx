import { cn } from '@/lib/utils';

type SectionTitleProps = {
  pre?: string;
  accent: string;
  post?: string;
  eyebrow?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionTitle({ pre, accent, post, eyebrow, align = 'center', className }: SectionTitleProps) {
  return (
    <div className={cn('mb-10', align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl', className)}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-teal-dark">{eyebrow}</p> : null}
      <h2 className="font-serif text-4xl leading-tight text-ink text-balance sm:text-5xl lg:text-6xl">
        {pre ? `${pre} ` : ''}
        <span className="font-serif italic text-gold-dark">{accent}</span>
        {post ? ` ${post}` : ''}
      </h2>
    </div>
  );
}

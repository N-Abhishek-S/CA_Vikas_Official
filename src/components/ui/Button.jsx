import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

const baseClasses = [
  'group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full',
  'font-semibold leading-none outline-none',
  'transition-[transform,background,border-color,box-shadow,color] duration-300 ease-out',
  'will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985]',
  'focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy',
  'disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-55',
].join(' ');

const primaryClasses = [
  'border border-[#ead8b5]/70',
  'bg-[linear-gradient(180deg,#e0c996_0%,#c7a36b_48%,#b68a5a_100%)]',
  '!text-ink shadow-[0_18px_55px_rgba(199,163,107,0.28),inset_0_1px_0_rgba(246,242,234,0.44)]',
  'hover:border-ivory/70 hover:!text-ink hover:bg-[linear-gradient(180deg,#ead7ad_0%,#cda96f_48%,#ab7c4d_100%)]',
  'hover:shadow-[0_24px_72px_rgba(199,163,107,0.36),0_0_0_1px_rgba(246,242,234,0.14),inset_0_1px_0_rgba(246,242,234,0.5)]',
].join(' ');

const secondaryClasses = [
  'border border-ivory/[0.22] bg-navy/[0.58] text-ivory',
  'shadow-[0_16px_48px_rgba(11,31,51,0.22),inset_0_1px_0_rgba(246,242,234,0.08)]',
  'backdrop-blur-xl',
  'hover:border-gold/55 hover:bg-slateblue/[0.68] hover:text-ivory',
  'hover:shadow-[0_22px_64px_rgba(11,31,51,0.3),0_0_0_1px_rgba(199,163,107,0.14),inset_0_1px_0_rgba(246,242,234,0.12)]',
].join(' ');

const ghostClasses = [
  'border border-transparent bg-transparent text-ivory/82',
  'shadow-none hover:border-ivory/18 hover:bg-ivory/[0.08] hover:text-ivory',
].join(' ');

const variants = {
  primary: primaryClasses,
  gold: primaryClasses,
  secondary: secondaryClasses,
  ghost: ghostClasses,
  navPrimary: clsx(primaryClasses, 'min-h-11 px-5 text-sm'),
  navSecondary: clsx(
    'min-h-11 px-5 text-sm',
    'border border-ivory/20 bg-ivory/[0.08] text-ivory',
    'shadow-[inset_0_1px_0_rgba(246,242,234,0.08)] backdrop-blur-xl',
    'hover:border-gold/55 hover:bg-ivory/[0.13] hover:text-ivory',
  ),
  navGhost: clsx(
    'min-h-11 px-5 text-sm',
    'border border-ivory/20 bg-ivory/[0.08] text-ivory',
    'shadow-[inset_0_1px_0_rgba(246,242,234,0.08)] backdrop-blur-xl',
    'hover:border-gold/55 hover:bg-ivory/[0.13] hover:text-ivory',
  ),
  dark: secondaryClasses,
  link: 'rounded-none border-0 bg-transparent p-0 text-bronze shadow-none hover:text-ink hover:shadow-none',
  linkDark: 'rounded-none border-0 bg-transparent p-0 text-gold shadow-none hover:text-ivory hover:shadow-none',
};

const sizes = {
  sm: 'min-h-11 px-5 text-sm',
  md: 'min-h-12 px-6 text-sm',
  lg: 'min-h-14 px-7 text-base',
  xl: 'min-h-15 px-8 text-base',
};

export default function Button({ children, href, variant = 'primary', size = 'md', className = '', icon = true, ...props }) {
  const isLinkVariant = variant === 'link' || variant === 'linkDark';
  const classes = clsx(
    baseClasses,
    variants[variant] ?? variants.primary,
    !variant.startsWith('nav') && !isLinkVariant && sizes[size],
    isLinkVariant && 'min-h-0',
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight size={17} className="transition duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}

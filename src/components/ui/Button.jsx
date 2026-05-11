import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';

const baseClasses = [
  'group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full',
  'font-semibold leading-none outline-none',
  'transition-[transform,background,border-color,box-shadow,color] duration-300 ease-out',
  'will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985]',
  'focus-visible:ring-2 focus-visible:ring-orange/45 focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
  'disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-55',
].join(' ');

const primaryClasses = [
  'border border-blue/10',
  'bg-[linear-gradient(135deg,#1d638f_0%,#13537c_54%,#0f4265_100%)]',
  '!text-white shadow-[0_18px_42px_rgba(19,83,124,0.26),inset_0_1px_0_rgba(255,255,255,0.22)]',
  'hover:border-green/35 hover:bg-[linear-gradient(135deg,#25749e_0%,#165d89_48%,#0f4265_100%)]',
  'hover:!text-white hover:shadow-[0_24px_64px_rgba(19,83,124,0.34),0_0_0_4px_rgba(76,178,68,0.08),inset_0_1px_0_rgba(255,255,255,0.26)]',
].join(' ');

const secondaryClasses = [
  'border border-blue/18 bg-white/82 !text-blue shadow-[0_14px_36px_rgba(24,66,95,0.11),inset_0_1px_0_rgba(255,255,255,0.7)]',
  'backdrop-blur-xl hover:border-green/38 hover:bg-paper hover:text-deep',
  'hover:shadow-[0_20px_54px_rgba(24,66,95,0.16),0_0_0_4px_rgba(76,178,68,0.08)]',
].join(' ');

const ghostClasses = [
  'border border-transparent bg-transparent text-blue/78 shadow-none hover:border-blue/12 hover:bg-blue/5 hover:text-deep',
].join(' ');

const variants = {
  primary: primaryClasses,
  gold: primaryClasses,
  secondary: secondaryClasses,
  ghost: ghostClasses,
  navPrimary: clsx(primaryClasses, 'min-h-11 px-5 text-sm'),
  navSecondary: clsx(
    'min-h-11 px-5 text-sm',
    'border border-blue/14 bg-paper/80 !text-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-xl',
    'hover:border-green/38 hover:bg-white hover:text-deep',
  ),
  navGhost: clsx(
    'min-h-11 px-5 text-sm',
    'border border-transparent bg-transparent text-blue/78 shadow-none hover:border-blue/12 hover:bg-blue/5 hover:text-deep',
  ),
  dark: primaryClasses,
  link: 'rounded-none border-0 bg-transparent p-0 text-blue shadow-none hover:text-green hover:shadow-none',
  linkDark: 'rounded-none border-0 bg-transparent p-0 text-white shadow-none hover:text-orange hover:shadow-none',
};

const sizes = {
  sm: 'min-h-11 px-5 text-sm',
  md: 'min-h-12 px-6 text-sm',
  lg: 'min-h-14 px-7 text-base',
  xl: 'min-h-15 px-8 text-base',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
  ...props
}) {
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
      {icon && (
        <ArrowUpRight
          size={17}
          className="transition duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
        />
      )}
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

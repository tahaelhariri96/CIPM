/**
 * Semantic Text Components
 * Provides accessible, searchable text components that match design system
 * Uses proper HTML semantics (h1-h6, p, label, span) for accessibility and SEO
 */

import React from "react";
import { mergeTypographyClasses } from "../styles/typography";

/**
 * Heading Component - Use for main page titles and section headers
 * Semantic: Uses <h1> to <h6> based on level
 * Accessibility: Screen readers understand hierarchy
 * Search: Text is crawlable and indexable
 */
interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant: "4xl" | "3xl" | "xl" | "dark900" | "purple800" | "white4xl";
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  variant,
  children,
  className,
  id,
}) => {
  const variantMap = {
    "4xl": "heading4xl",
    "3xl": "heading3xl",
    xl: "headingXl",
    dark900: "headingDark900",
    purple800: "headingPurple800",
    white4xl: "headingWhite4xl",
  };

  const typographyClass = mergeTypographyClasses(
    variantMap[variant] as any,
    className
  );

  const HeadingTag = `h${level}` as const;

  return React.createElement(
    HeadingTag,
    {
      className: typographyClass,
      id,
    },
    children
  );
};

/**
 * Body Text Component - Use for main content paragraphs
 * Semantic: Uses <p> for paragraphs
 * Accessibility: Clear semantic structure
 * Search: Searchable content
 */
interface BodyTextProps {
  variant?:
    | "lg"
    | "base"
    | "lgRose"
    | "lgStone"
    | "light"
    | "extraLight"
    | "lgNeutral"
    | "white";
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const BodyText: React.FC<BodyTextProps> = ({
  variant = "lg",
  children,
  className,
  id,
}) => {
  const variantMap = {
    lg: "bodyLg",
    base: "body",
    lgRose: "bodyLgRose",
    lgStone: "bodyLgStone",
    light: "bodyLight",
    extraLight: "bodyExtraLight",
    lgNeutral: "bodyLgNeutral",
    white: "bodyWhite",
  };

  const typographyClass = mergeTypographyClasses(
    variantMap[variant] as any,
    className
  );

  return (
    <p className={typographyClass} id={id}>
      {children}
    </p>
  );
};

/**
 * Label/Caption Component - Use for labels, captions, metadata
 * Semantic: Uses <small> or <label> based on context
 * Accessibility: Proper semantic meaning
 * Search: Metadata is indexed
 */
interface CaptionProps {
  variant?: "small" | "smallLight" | "caption" | "extraLight";
  as?: "label" | "span" | "div" | "small";
  children: React.ReactNode;
  className?: string;
  id?: string;
  htmlFor?: string; // For label elements
}

export const Caption: React.FC<CaptionProps> = ({
  variant = "small",
  as = "small",
  children,
  className,
  id,
  htmlFor,
}) => {
  const variantMap = {
    small: "small",
    smallLight: "smallLight",
    caption: "caption",
    extraLight: "bodyExtraLight",
  };

  const typographyClass = mergeTypographyClasses(
    variantMap[variant] as any,
    className
  );

  if (as === "label") {
    return (
      <label className={typographyClass} id={id} htmlFor={htmlFor}>
        {children}
      </label>
    );
  }

  return React.createElement(
    as,
    {
      className: typographyClass,
      id,
    },
    children
  );
};

/**
 * Button Text Component - For button labels
 * Semantic: Uses <span> or semantic wrapper
 * Accessibility: Clear interactive context
 * Search: Not indexed as separate content (intentional)
 */
interface ButtonTextProps {
  variant?: "base" | "lg" | "register";
  children: React.ReactNode;
  className?: string;
}

export const ButtonText: React.FC<ButtonTextProps> = ({
  variant = "base",
  children,
  className,
}) => {
  const variantMap = {
    base: "body",
    lg: "linkLg",
    register: "buttonRegister",
  };

  const typographyClass = mergeTypographyClasses(
    variantMap[variant] as any,
    className
  );

  return <span className={typographyClass}>{children}</span>;
};

/**
 * Link Text Component - For interactive links
 * Semantic: Uses <a> for true links
 * Accessibility: Proper link semantics
 * Search: Links are crawled and indexed
 */
interface LinkTextProps {
  variant?: "cta" | "ctaRed" | "linkBase" | "loginLink" | "lg";
  href: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

export const LinkText: React.FC<LinkTextProps> = ({
  variant = "cta",
  href,
  children,
  className,
  title,
  target,
  rel,
}) => {
  const variantMap = {
    cta: "cta",
    ctaRed: "ctaRed",
    linkBase: "linkBase",
    loginLink: "loginLink",
    lg: "linkLg",
  };

  const typographyClass = mergeTypographyClasses(
    variantMap[variant] as any,
    className
  );

  return (
    <a
      href={href}
      className={typographyClass}
      title={title}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

/**
 * Display Text Component - For large display typography
 * Semantic: Uses <div> with aria-label if needed
 * Accessibility: Can be marked as decorative if needed
 * Search: Text is searchable
 */
interface DisplayTextProps {
  variant?: "5xl" | "5xlNeutral";
  children: React.ReactNode;
  className?: string;
  id?: string;
  role?: "heading" | "img" | "presentation" | "none";
  ariaLevel?: number;
}

export const DisplayText: React.FC<DisplayTextProps> = ({
  variant = "5xl",
  children,
  className,
  id,
  role,
  ariaLevel,
}) => {
  const variantMap = {
    "5xl": "display5xl",
    "5xlNeutral": "display5xlNeutral",
  };

  const typographyClass = mergeTypographyClasses(
    variantMap[variant] as any,
    className
  );

  return (
    <div
      className={typographyClass}
      id={id}
      role={role}
      aria-level={ariaLevel}
    >
      {children}
    </div>
  );
};

/**
 * Metadata Text Component - For dates, credits, footnotes
 * Semantic: Uses <time> for dates, <small> for other metadata
 * Accessibility: Proper meaning for assistive tech
 * Search: Metadata is crawled
 */
interface MetadataTextProps {
  variant?: "extraLight" | "smallLight" | "light";
  type?: "date" | "credit" | "footnote";
  children: React.ReactNode;
  className?: string;
  dateTime?: string; // For time elements
  id?: string;
}

export const MetadataText: React.FC<MetadataTextProps> = ({
  variant = "extraLight",
  type = "footnote",
  children,
  className,
  dateTime,
  id,
}) => {
  const variantMap = {
    extraLight: "bodyExtraLight",
    smallLight: "smallLight",
    light: "bodyLight",
  };

  const typographyClass = mergeTypographyClasses(
    variantMap[variant] as any,
    className
  );

  if (type === "date" && dateTime) {
    return (
      <time dateTime={dateTime} className={typographyClass} id={id}>
        {children}
      </time>
    );
  }

  return (
    <small className={typographyClass} id={id}>
      {children}
    </small>
  );
};

/**
 * Statistics/Number Component - For large numbers and stats
 * Semantic: Uses appropriate tags based on context
 * Accessibility: Numbers are readable
 * Search: Numbers are searchable
 */
interface StatisticProps {
  number: string;
  label: string;
  numberVariant?: "5xl" | "5xlNeutral" | "2xl";
  labelVariant?: "base" | "lg";
  className?: string;
  id?: string;
}

export const Statistic: React.FC<StatisticProps> = ({
  number,
  label,
  numberVariant = "5xl",
  labelVariant = "base",
  className,
  id,
}) => {
  const numberVariantMap = {
    "5xl": "display5xl",
    "5xlNeutral": "display5xlNeutral",
    "2xl": "text2xl",
  };

  const labelVariantMap = {
    base: "body",
    lg: "bodyLg",
  };

  const numberClass = mergeTypographyClasses(
    numberVariantMap[numberVariant] as any
  );
  const labelClass = mergeTypographyClasses(
    labelVariantMap[labelVariant] as any
  );

  return (
    <div className={className} id={id}>
      <div className={numberClass} role="img" aria-label={`${number} ${label}`}>
        {number}
      </div>
      <div className={labelClass} aria-hidden="false">
        {label}
      </div>
    </div>
  );
};

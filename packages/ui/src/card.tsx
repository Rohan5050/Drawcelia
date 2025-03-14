"use client";

import { type JSX } from "react";

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  href?: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title && <h2>{title} <span>-&gt;</span></h2>}
      {children}
    </a>
  );
}

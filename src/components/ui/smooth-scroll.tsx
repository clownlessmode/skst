"use client";
import React from "react";
import Link from "next/link";

interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-current"?: "page" | undefined;
}

export const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  href,
  children,
  className,
  onClick,
  "aria-current": ariaCurrent,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Проверяем, является ли это якорной ссылкой
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Обновляем URL без перезагрузки
        window.history.pushState(null, "", href);
      }
    }

    // Вызываем пользовательский onClick, если он есть
    if (onClick) {
      onClick();
    }
  };

  // Если это обычная ссылка, используем Link из Next.js
  if (!href.startsWith("/#")) {
    return (
      <Link
        href={href}
        className={className}
        onClick={onClick}
        aria-current={ariaCurrent}
      >
        {children}
      </Link>
    );
  }

  // Для якорных ссылок используем обычный a tag
  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      aria-current={ariaCurrent}
    >
      {children}
    </a>
  );
};

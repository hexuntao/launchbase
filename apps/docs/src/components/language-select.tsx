"use client";

import type { Locale } from "@/lib/i18n";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "fumadocs-ui/components/ui/popover";
import { useI18n } from "fumadocs-ui/contexts/i18n";
import type { LanguageSelectProps } from "fumadocs-ui/layouts/shared/slots/language-select";
import { Languages } from "lucide-react";
import { usePathname } from "next/navigation";

function getLocaleHref(locale: Locale, pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const hasLocalePrefix = segments[0] === "zh";
  const pathSegments = hasLocalePrefix ? segments.slice(1) : segments;

  if (locale === "en") {
    return pathSegments.length > 0 ? `/${pathSegments.join("/")}` : "/";
  }

  return `/${[locale, ...pathSegments].join("/")}`;
}

export function LanguageSelect({
  children: _children,
  className: _className,
  variant: _variant,
  ...props
}: LanguageSelectProps) {
  const { locale = "en", locales = [], text } = useI18n();
  const pathname = usePathname();

  return (
    <Popover>
      <PopoverTrigger
        aria-label={text.chooseLanguage}
        className={buttonVariants({ color: "ghost", size: "icon-sm" })}
        {...props}
      >
        <Languages />
      </PopoverTrigger>
      <PopoverContent className="flex w-36 flex-col gap-0.5 p-1">
        <p className="text-fd-muted-foreground px-2 py-1.5 text-xs font-medium">{text.chooseLanguage}</p>
        {locales.map((item) => (
          <a
            key={item.locale}
            href={getLocaleHref(item.locale as Locale, pathname)}
            data-active={item.locale === locale}
            className="text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary rounded-lg px-2 py-1.5 text-start text-sm transition-colors"
          >
            {item.name}
          </a>
        ))}
      </PopoverContent>
    </Popover>
  );
}

export function LanguageSelectText() {
  return null;
}

import APIHealth from "@/components/api-health";
import { getDictionary, getLocalizedPath, type Locale } from "@/lib/i18n";
import { Button } from "@repo/ui/button";

export function HomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex flex-col gap-4 text-sm">
        <div className="space-y-2">
          <img src="/logo.svg" alt="LaunchBase" className="h-8 w-auto dark:invert" />
          <h1 className="font-asul text-3xl font-medium">LaunchBase</h1>
          <p className="max-w-xs min-w-0">{dictionary.home.description}</p>
          <div className="flex items-center gap-3">
            <Button>{dictionary.home.button}</Button>
            <APIHealth label={dictionary.home.apiHealthLabel} errorMessage={dictionary.home.apiHealthError} />
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <a className="hover:text-foreground" href={getLocalizedPath("en", "/")}>
              English
            </a>
            <span>/</span>
            <a className="hover:text-foreground" href={getLocalizedPath("zh", "/")}>
              中文
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

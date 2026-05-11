// import { Icons } from "@/components/ui/icons";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <img src="/images/icon.svg" alt="LaunchBase" className="h-8 w-auto dark:invert" />
          <span className="font-asul text-2xl">LaunchBase</span>
        </div>
      ),
    },
    githubUrl: "https://github.com/hexuntao/launchbase",
  };
}

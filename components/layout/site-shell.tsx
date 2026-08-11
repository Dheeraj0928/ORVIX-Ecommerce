import { SoftCtaPrompt } from "@/components/marketing/soft-cta-prompt";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SkipLink } from "./skip-link";
import { StickyCta } from "./sticky-cta";
import { WhatsAppButton } from "./whatsapp-button";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <div id="main-content" className="flex-1 pb-20 md:pb-0" tabIndex={-1}>
        {children}
      </div>
      <SiteFooter />
      <StickyCta />
      <WhatsAppButton />
      <SoftCtaPrompt />
    </>
  );
}

import Link from "next/link";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { brand } from "@/config/brand";
import { footerNav } from "@/config/navigation";
import { Container } from "./container";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[13px] font-semibold tracking-[-0.02em] text-white">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[14px] text-white/45 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="surface-ink border-t border-white/[0.07]">
      <Container className="py-16 md:py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white text-[13px] font-semibold text-[var(--ink)]">
                O
              </span>
              <p className="text-[18px] font-semibold tracking-[-0.04em]">
                {brand.shortName}
              </p>
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/45">
              {brand.tagline}. AI-powered marketplace operations with specialist
              execution.
            </p>
            <div className="mt-6 space-y-1.5 text-[14px] text-white/45">
              <p>
                <a href={`mailto:${brand.contact.email}`} className="hover:text-white">
                  {brand.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${brand.contact.phone.replace(/\s/g, "")}`}
                  className="tabular hover:text-white"
                >
                  {brand.contact.phone}
                </a>
                <span className="mx-2 text-white/20">·</span>
                <a
                  href={`https://wa.me/${brand.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </p>
            </div>
            <div className="mt-8 max-w-sm">
              <p className="text-[13px] font-semibold text-white">Newsletter</p>
              <NewsletterForm className="mt-3" source="footer" />
            </div>
          </div>
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn
            title="Marketplaces"
            links={footerNav.marketplaces.slice(0, 6)}
          />
          <FooterColumn
            title="Resources"
            links={[...footerNav.resources, ...footerNav.legal]}
          />
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/35">
            © {new Date().getFullYear()} {brand.name}
          </p>
          <div className="flex gap-5 text-[13px] text-white/35">
            {Object.entries(brand.social).map(([key, href]) => (
              <a
                key={key}
                href={href}
                className="capitalize hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  id,
  className,
  containerClassName,
  children,
  fullBleed = false,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  fullBleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-[var(--space-section)]", className)}
    >
      {fullBleed ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}

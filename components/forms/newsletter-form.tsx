"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  newsletterSchema,
  type NewsletterValues,
} from "@/lib/validations/newsletter";

export function NewsletterForm({
  className,
  source = "site",
}: {
  className?: string;
  source?: string;
}) {
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async (values: NewsletterValues) => {
    setServerError(null);
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, source }),
    });
    if (!res.ok) {
      setServerError("Couldn’t subscribe. Try again shortly.");
      return;
    }
    setDone(true);
  };

  if (done) {
    return (
      <p className="text-sm font-medium text-success" role="status" aria-live="polite">
        You&apos;re in. We&apos;ll send practical marketplace notes — no spam.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="Work email"
          aria-label="Email for newsletter"
          autoComplete="email"
          {...register("email")}
        />
        <Button type="submit" disabled={isSubmitting} className="shrink-0">
          Subscribe
        </Button>
      </div>
      {errors.email ? (
        <p className="mt-2 text-sm text-warning" role="alert">
          {errors.email.message}
        </p>
      ) : null}
      {serverError ? (
        <p className="mt-2 text-sm text-warning" role="alert">
          {serverError}
        </p>
      ) : null}
    </form>
  );
}

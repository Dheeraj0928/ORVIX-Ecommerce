"use client";

import { cloneElement, isValidElement, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { brand } from "@/config/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  contactSchema,
  type ContactValues,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

export function ContactForm({
  defaultIntent = "consultation",
}: {
  defaultIntent?: "consultation" | "audit";
}) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      intent: defaultIntent,
      name: "",
      email: "",
      phone: "",
      company: "",
      marketplaces: "",
      message: "",
    },
  });

  const intent = watch("intent");

  const onSubmit = async (values: ContactValues) => {
    setServerError(null);
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      setServerError("Something went wrong. Email us or try WhatsApp.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="panel p-8" role="status" aria-live="polite">
        <p className="t-title">Received.</p>
        <p className="mt-3 t-body text-[1rem]">
          We&apos;ll reply within one business day. Prefer WhatsApp? Reach us
          anytime.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="panel space-y-5 p-6 md:p-8"
      noValidate
    >
      <div
        className="grid grid-cols-2 gap-2 rounded-[var(--radius-md)] bg-[var(--paper)] p-1"
        role="tablist"
        aria-label="Request type"
      >
        {(
          [
            ["consultation", "Consultation"],
            ["audit", "Free audit"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={intent === value}
            className={cn(
              "rounded-[8px] px-3 py-2.5 text-sm font-semibold tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--signal)]",
              intent === value
                ? "bg-[var(--snow)] text-[var(--ink)] shadow-[var(--elevate-1)]"
                : "text-[var(--text-3)] hover:text-[var(--ink)]",
            )}
            onClick={() => setValue("intent", value, { shouldValidate: true })}
          >
            {label}
          </button>
        ))}
      </div>
      <input type="hidden" {...register("intent")} />

      <p className="text-sm text-muted">
        {intent === "audit"
          ? "Free audit. Clear gaps. No obligation."
          : "Tell us where you sell. We’ll map the fastest path to growth."}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <Input {...register("name")} autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" {...register("email")} autoComplete="email" />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <Input {...register("phone")} autoComplete="tel" />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <Input {...register("company")} autoComplete="organization" />
        </Field>
      </div>

      <Field label="Marketplaces" error={errors.marketplaces?.message}>
        <Input
          placeholder="Amazon, Flipkart, Meesho…"
          {...register("marketplaces")}
        />
      </Field>

      <Field label="How can we help?" error={errors.message?.message}>
        <Textarea {...register("message")} />
      </Field>

      {serverError ? (
        <p className="text-sm text-warning" role="alert">
          {serverError}
        </p>
      ) : null}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting
          ? "Sending…"
          : intent === "audit"
            ? brand.ctas.secondary.label
            : brand.ctas.primary.label}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactElement<{ id?: string; "aria-invalid"?: boolean }>;
}) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {isValidElement(children)
        ? cloneElement(children, {
            id,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? errorId : undefined,
          } as never)
        : children}
      {error ? (
        <p id={errorId} className="text-sm text-warning" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

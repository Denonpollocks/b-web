"use client";

import { useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export function useFormSubmit() {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function submit(payload: Record<string, unknown>) {
    setState("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setState("success");
      return true;
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
      return false;
    }
  }

  function reset() {
    setState("idle");
    setErrorMessage(null);
  }

  return { state, errorMessage, submit, reset };
}

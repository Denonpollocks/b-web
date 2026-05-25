"use client";

import { useEffect, useMemo, useState } from "react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_SETTINGS_EVENT,
} from "@/lib/cookie-consent";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  updatedAt: string;
};

function isMarketingHost(hostname: string) {
  return (
    hostname === "becko.app" ||
    hostname === "www.becko.app" ||
    hostname === "localhost" ||
    hostname === "127.0.0.1"
  );
}

function readPreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookiePreferences) : null;
  } catch {
    return null;
  }
}

function savePreferences(preferences: CookiePreferences) {
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(preferences));
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showCustomise, setShowCustomise] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [functional, setFunctional] = useState(false);

  const isMarketingSite = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return isMarketingHost(window.location.hostname);
  }, []);

  useEffect(() => {
    if (!isMarketingSite) {
      setMounted(true);
      return;
    }

    const stored = readPreferences();

    if (stored) {
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
      setFunctional(stored.functional);
    } else {
      setVisible(true);
    }

    const openSettings = () => {
      const current = readPreferences();

      if (current) {
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
        setFunctional(current.functional);
      }

      setVisible(true);
      setShowCustomise(true);
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    setMounted(true);

    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, [isMarketingSite]);

  if (!mounted || !isMarketingSite || !visible) {
    return null;
  }

  const persist = (next: Omit<CookiePreferences, "updatedAt">) => {
    savePreferences({
      ...next,
      updatedAt: new Date().toISOString(),
    });
    setVisible(false);
    setShowCustomise(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] px-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-line-strong bg-[#08101a]/95 p-5 shadow-2xl backdrop-blur">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div className="eyebrow">Cookie Settings</div>
            <h3>Control cookies on Becko&apos;s marketing website</h3>
            <p>
              We use strictly necessary technologies to run the site and may use
              optional analytics, marketing, and functional cookies on `becko.app`.
              You can accept all, reject non-essential cookies, or customise your
              choices.
            </p>
            {showCustomise ? (
              <div className="grid gap-3 pt-2 md:grid-cols-2">
                <label className="rounded-lg border border-line bg-white/[0.03] p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-white">Strictly necessary</div>
                      <p className="mt-1 text-sm">
                        Required for security, sign-in, and core website behaviour.
                      </p>
                    </div>
                    <input checked disabled type="checkbox" aria-label="Strictly necessary cookies enabled" />
                  </div>
                </label>
                <label className="rounded-lg border border-line bg-white/[0.03] p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-white">Analytics</div>
                      <p className="mt-1 text-sm">
                        Measures aggregate website usage, such as GA4.
                      </p>
                    </div>
                    <input
                      checked={analytics}
                      onChange={(event) => setAnalytics(event.target.checked)}
                      type="checkbox"
                      aria-label="Analytics cookies"
                    />
                  </div>
                </label>
                <label className="rounded-lg border border-line bg-white/[0.03] p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-white">Advertising / Marketing</div>
                      <p className="mt-1 text-sm">
                        Helps measure campaigns and support remarketing.
                      </p>
                    </div>
                    <input
                      checked={marketing}
                      onChange={(event) => setMarketing(event.target.checked)}
                      type="checkbox"
                      aria-label="Marketing cookies"
                    />
                  </div>
                </label>
                <label className="rounded-lg border border-line bg-white/[0.03] p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-white">Functional</div>
                      <p className="mt-1 text-sm">
                        Supports embedded videos, chat widgets, and form tools.
                      </p>
                    </div>
                    <input
                      checked={functional}
                      onChange={(event) => setFunctional(event.target.checked)}
                      type="checkbox"
                      aria-label="Functional cookies"
                    />
                  </div>
                </label>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 lg:min-w-[220px]">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() =>
                persist({
                  necessary: true,
                  analytics: true,
                  marketing: true,
                  functional: true,
                })
              }
            >
              Accept all
            </button>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() =>
                persist({
                  necessary: true,
                  analytics: false,
                  marketing: false,
                  functional: false,
                })
              }
            >
              Reject non-essential
            </button>
            {showCustomise ? (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() =>
                  persist({
                    necessary: true,
                    analytics,
                    marketing,
                    functional,
                  })
                }
              >
                Save preferences
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setShowCustomise(true)}
              >
                Customise
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

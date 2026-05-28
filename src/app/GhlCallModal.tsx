"use client";

import Script from "next/script";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type GhlFormConfig = {
  dataHeight: number;
  formId: string;
  formName: string;
  title: string;
  triggerTexts: string[];
};

const GHL_FORMS: GhlFormConfig[] = [
  {
    dataHeight: 619,
    formId: "emQOB7p42VmPTDYKCHGe",
    formName: "Bavaria-Concertar llamada",
    title: "Concertar una llamada",
    triggerTexts: ["Concertar una llamada"],
  },
  {
    dataHeight: 932,
    formId: "hTm5c0wpmnfVRLtoFSLu",
    formName: "Búsqueda personalizada-Bavaria",
    title: "Búsqueda personalizada",
    triggerTexts: ["Buscar mi coche", "Solicitar búsqueda personalizada"],
  },
];

const triggerTextToForm = new Map(
  GHL_FORMS.flatMap((form) => form.triggerTexts.map((text) => [text, form])),
);

export default function GhlCallModal() {
  const [activeForm, setActiveForm] = useState<GhlFormConfig | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const iframeId = activeForm ? `inline-${activeForm.formId}` : "";

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest("button, a, [role='button']");

      if (!(trigger instanceof HTMLElement)) {
        return;
      }

      const triggerText = trigger.textContent?.replace(/\s+/g, " ").trim();
      const form = triggerText ? triggerTextToForm.get(triggerText) : null;

      if (!form) {
        return;
      }

      event.preventDefault();
      setActiveForm(form);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (!activeForm) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveForm(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeForm]);

  if (!activeForm) {
    return null;
  }

  return (
    <div
      className="ghl-modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setActiveForm(null);
        }
      }}
    >
      <section
        aria-labelledby="ghl-modal-title"
        aria-modal="true"
        className="ghl-modal-panel"
        role="dialog"
      >
        <div className="ghl-modal-header">
          <div>
            <p className="ghl-modal-kicker">Bavaria Motors</p>
            <h2 id="ghl-modal-title">{activeForm.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            aria-label="Cerrar formulario"
            className="ghl-modal-close"
            onClick={() => setActiveForm(null)}
            type="button"
          >
            <span aria-hidden="true">x</span>
          </button>
        </div>

        <div
          className="ghl-modal-form"
          style={{ "--ghl-form-height": `${activeForm.dataHeight}px` } as CSSProperties}
        >
          <iframe
            src={`https://api.leadconnectorhq.com/widget/form/${activeForm.formId}`}
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
            id={iframeId}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={activeForm.formName}
            data-height={activeForm.dataHeight}
            data-layout-iframe-id={iframeId}
            data-form-id={activeForm.formId}
            title={activeForm.formName}
          />
        </div>

        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </section>
    </div>
  );
}

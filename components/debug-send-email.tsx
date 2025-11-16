"use client";

import React, { useState } from "react";

export default function DebugSendEmail() {
  const [status, setStatus] = useState<string | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [payload, setPayload] = useState<any | null>(null);

  async function sendTest() {
    setStatus("sending");
    try {
      const res = await fetch("/api/test-email", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({}),
      });
      const json = await res.json();
      console.log('test-email response', json)
      setPayload(json)
      if (res.ok) {
        setUrl(json.previewUrl || null);
        setStatus('sent')
      } else {
        setStatus(json.error || 'error')
      }
    } catch (err) {
      setStatus("network error");
    }
  }

  return (
    <div style={{ position: "fixed", right: 12, bottom: 12, zIndex: 9999 }}>
      <div className="p-2 rounded shadow bg-white dark:bg-slate-800 border">
        <div className="flex gap-2 items-center">
          <button
            className="px-3 py-1 text-sm rounded bg-blue-600 text-white"
            onClick={sendTest}
          >
            Send dev test email
          </button>
          <div className="text-xs text-muted-foreground">{status}</div>
        </div>
        {url && (
          <div className="mt-2 text-xs">
            Preview:{" "}
            <a
              className="text-blue-600 underline"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Open
            </a>
          </div>
        )}
        {payload && (
          <div className="mt-2 text-xs">
            <pre className="whitespace-pre-wrap max-w-xs text-xs">{JSON.stringify(payload, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

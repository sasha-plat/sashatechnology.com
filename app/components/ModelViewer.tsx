"use client";

import { createElement, useEffect, useState } from "react";

interface Props {
  src: string;
  alt?: string;
  poster?: string;
}

/**
 * Interactive glTF/GLB viewer (Google <model-viewer>, self-hosted via npm).
 * Orbit + zoom + auto-rotate, AR on supported mobile devices.
 */
export default function ModelViewer({ src, alt = "3D model", poster }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    import("@google/model-viewer").then(() => {
      if (mounted) setReady(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-light">
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted text-sm">Loading 3D model…</span>
        </div>
      )}
      {createElement("model-viewer", {
        src,
        alt,
        poster,
        "camera-controls": true,
        "auto-rotate": true,
        "auto-rotate-delay": 0,
        "rotation-per-second": "20deg",
        "shadow-intensity": "0.8",
        exposure: "1.1",
        "environment-image": "neutral",
        "touch-action": "pan-y",
        "ar-modes": "webxr scene-viewer quick-look",
        ar: true,
        loading: "eager",
        style: { width: "100%", height: "100%", backgroundColor: "transparent" },
      })}
    </div>
  );
}

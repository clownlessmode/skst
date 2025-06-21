"use client";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import React, { useState, useEffect } from "react";

export const BlindMode = () => {
  const [blindMode, setBlindMode] = useState(false);

  useEffect(() => {
    if (blindMode) {
      document.body.classList.add("blind-mode");
    } else {
      document.body.classList.remove("blind-mode");
    }
  }, [blindMode]);

  return (
    <Button
      variant="ghost"
      className="px-2 py-1 h-fit"
      onClick={() => setBlindMode(!blindMode)}
      aria-pressed={blindMode}
      aria-label="Режим для слабовидящих"
    >
      <Eye />
      Слабовидящим
    </Button>
  );
};

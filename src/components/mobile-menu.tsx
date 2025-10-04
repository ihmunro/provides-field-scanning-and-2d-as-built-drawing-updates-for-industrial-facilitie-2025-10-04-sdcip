"use client";
import { useEffect } from "react";

export function MobileMenuScript() {
  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    if (!btn || !menu) return;
    const onClick = () => menu.classList.toggle("hidden");
    btn.addEventListener("click", onClick);
    return () => btn.removeEventListener("click", onClick);
  }, []);
  return null;
}


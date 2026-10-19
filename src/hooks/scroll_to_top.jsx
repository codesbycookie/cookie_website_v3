import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom lifecycle hook to reset scroll on route transition
 * while honouring URL hash anchors with smooth scrolling.
 */
export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
}

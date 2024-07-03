import { useFixFlag } from "@/contexts/fix-flag-context";
import useInViewport from "@/hooks/useInViewport";
import { ReactNode, useEffect } from "react";

const FixAutoScroll = (props: { children: ReactNode }) => {
  const fixFlagCtx = useFixFlag();

  const isFooterInViewport = useInViewport(
    () => document.getElementById("target") as HTMLElement
  );

  useEffect(() => {
    const pageHasBeenScrolled = window.scrollY > 0;

    if (fixFlagCtx.flag === "disabled") {
      return;
    }

    if (!pageHasBeenScrolled) {
      return;
    }

    window.document.body.style.visibility = "hidden";

    // simulate if bug happens then scroll to top
    if (isFooterInViewport) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      setTimeout(() => {
        window.document.body.style.visibility = "visible";
      }, 250);
    }
  }, [fixFlagCtx, isFooterInViewport]);

  return <>{props.children}</>;
};

export default FixAutoScroll;

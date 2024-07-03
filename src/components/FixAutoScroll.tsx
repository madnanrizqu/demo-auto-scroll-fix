import { useFixFlag } from "@/contexts/fix-flag-context";
import useInViewport from "@/hooks/useInViewport";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

const autoScrollAnchorId = "fixAutoScrollAnchor";

export const FixAutoScroll = (props: { children: ReactNode }) => {
  const fixFlagCtx = useFixFlag();

  const isAnchorInViewport = useInViewport(
    () => document.getElementById(autoScrollAnchorId) as HTMLElement,
    { disabled: fixFlagCtx.flag === "disabled" }
  );

  const router = useRouter();

  useEffect(() => {
    if (fixFlagCtx.flag === "disabled") {
      return;
    }

    const pageHasBeenAutoScrolled = window.scrollY > 0;

    if (!pageHasBeenAutoScrolled) {
      return;
    }

    // this is to make sure only to hide page if page has been auto scrolled to bottom
    const pageHasBeenAutoScrolledToBottom =
      window.scrollY + window.innerHeight >= document.body.offsetHeight;

    if (!pageHasBeenAutoScrolledToBottom) {
      return;
    }

    // if page has been auto scrolled to bottom on need to hide first
    // to avoid unwanted flash of page scrolling
    window.document.body.style.visibility = "hidden";

    // simulate if bug happens then scroll to top
    if (isAnchorInViewport) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      setTimeout(() => {
        // after scroll is done show back page
        window.document.body.style.visibility = "visible";
      }, 250);
    }
  }, [fixFlagCtx, isAnchorInViewport, router.asPath]);

  return <>{props.children}</>;
};

// this should be put in the very bottom of any page
// to detect if bottom of page has been scrolled
export const FixAutoScrollAnchor = () => {
  return <div id={autoScrollAnchorId}></div>;
};

import { useRouter } from "next/router";
import React from "react";

import * as analytics from "../ga4";

export function useAnalytics() {
  const router = useRouter();

  React.useEffect(() => {
    analytics.init();
  }, []);

  React.useEffect(() => {
    analytics.sendPageview(router.asPath);
  }, [router.asPath]);
}

export default useAnalytics;

import React from "react";

import * as Sentry from "@sentry/nextjs";

const useSentry = () => {
  React.useEffect(() => {
    console.log("SHOULD INIT SENTRY", process.env.NODE_ENV !== "development");
    Sentry.init({
      enabled: process.env.NODE_ENV !== "development",
    });
  }, []);
};

export default useSentry;

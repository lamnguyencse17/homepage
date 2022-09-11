import { createLogger, transports, format, Logger } from "winston";
import LokiTransport from "winston-loki";

let logger: Logger;

const initializeLogger = () => {
  if (logger) {
    return;
  }
  const transportList = [
    new transports.Console({
      format: format.combine(format.simple(), format.colorize()),
    }),
  ] as (transports.ConsoleTransportInstance | LokiTransport)[];
  if (process.env.NODE_ENV === "production") {
    if (
      !process.env.GRAFANA_URL ||
      !process.env.GRAFANA_USER ||
      !process.env.GRAFANA_KEY
    ) {
      throw new Error("GRAFANA_URL, GRAFANA_USER, GRAFANA_KEY are not set");
    }
    transportList.push(
      new LokiTransport({
        host: process.env.GRAFANA_URL,
        labels: { app: "homepage" },
        json: true,
        format: format.json(),
        replaceTimestamp: true,
        onConnectionError: (err) => console.error(err),
        basicAuth: `${process.env.GRAFANA_USER}:${process.env.GRAFANA_KEY}`,
      })
    );
  }
  logger = createLogger({
    transports: transportList,
  });
};

export const getLogger = () => {
  initializeLogger();
  return logger;
};

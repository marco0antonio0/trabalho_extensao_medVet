import { DateTime } from "luxon";

export function getDateInBelem() {
  const belémTimeZone = "America/Belem";
  const belémDateTime = DateTime.now().setZone(belémTimeZone);
  const dateInBelem = belémDateTime.toLocaleString({
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return dateInBelem;
}

export function getTimeInBelem() {
  const belémTimeZone = "America/Belem";
  const belémDateTime = DateTime.now().setZone(belémTimeZone);
  const timeInBelem = belémDateTime.toLocaleString({
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return timeInBelem;
}

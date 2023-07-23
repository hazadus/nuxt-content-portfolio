/**
 * Format passed datetime as "DD.MM.YYYY HH:MM".
 * @param dateObj - date to format
 * @returns date as string "DD.MM.YYYY HH:MM"
 */
export function formatDateTime(dateObj: Date) {
  let date = new Date(dateObj);
  return (
    date.toLocaleDateString("ru-RU") +
    " " +
    date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
}

/**
 * Format passed datetime as "DD.MM.YYYY".
 * @param dateObj - date to format
 * @returns date as string "DD.MM.YYYY"
 */
export function formatDate(dateObj: Date) {
  let date = new Date(dateObj);
  return date.toLocaleDateString("ru-RU");
}

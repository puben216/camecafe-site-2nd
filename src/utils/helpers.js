export function formatYmd(dateString) {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return formatter.format(date)
}

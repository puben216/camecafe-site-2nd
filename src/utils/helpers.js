export function formatYmd(dateString) {
  return baseFormatDate(dateString, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function baseFormatDate(dateString, format) {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat("ja-JP", format)
  return formatter.format(date)
}

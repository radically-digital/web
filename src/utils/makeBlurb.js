/* eslint-disable no-console */
export const makeBlurb = (rawHtml, charCount = 150) => {
  if (!rawHtml) {
    return ""
  }

  const count = new RegExp(".{0," + charCount + "}\\S+") // Grab chararacters and end on the word.
  const htmlCleanString = rawHtml
    .replace(/<[^>]*>/gim, "") // strip html
    .replace(/([^0-9A-z])\n/gim, "$1 ") // strip new lines

  const htmlCleanStringSlice = htmlCleanString.match(count)[0]

  return htmlCleanStringSlice.length === htmlCleanString.length
    ? htmlCleanStringSlice
    : htmlCleanStringSlice + "..."
}

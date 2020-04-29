export const hashFromString = (str) => {
  let hash = 0
  ;[...str].forEach((i) => {
    const chr = i.charCodeAt(0)
    hash = (hash << 5) - hash + chr
    hash = hash & hash
  })

  return ("" + hash).replace("-", "u")
}

const values = {
  xs: "640px",
  sm: "768px",
  md: "960px",
  lg: "1024px",
  xl: "1440px",
}

const breakPointsObj = { values }

Object.keys(values).forEach((key) => {
  const breakpoint = values[key]
  breakPointsObj[key] = `@media screen and (min-width: ${breakpoint})`
})

export const breakpoints = breakPointsObj

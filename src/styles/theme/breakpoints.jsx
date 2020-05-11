const values = {
  xs: "640px",
  sm: "768px",
  md: "1024px",
}

const breakPointsObj = { values, max: {}, min: {} }

Object.keys(values).forEach((key) => {
  const breakpoint = values[key]
  breakPointsObj.max[key] = `@media screen and (max-width: ${breakpoint})`
  breakPointsObj.min[key] = `@media screen and (min-width: ${breakpoint})`
})

export const breakpoints = breakPointsObj

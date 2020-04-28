import { format } from "date-fns"

export const humanDate = (isoDate) =>
  // eslint-disable-next-line quotes
  format(new Date(isoDate), "do 'of' MMMM yyyy")

import { format, formatDistanceStrict } from "date-fns"

export const humanDate = (isoDate) =>
  // eslint-disable-next-line quotes
  format(new Date(isoDate), "do 'of' MMMM yyyy")

export const timeAgo = (isoDate) =>
  formatDistanceStrict(new Date(isoDate), new Date(), { addSuffix: true })

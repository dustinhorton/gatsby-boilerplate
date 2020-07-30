import { format as dateFnsFormat } from 'date-fns/format'

const format = (date, formatString = 'MMMM DD, YYYY') => {
  if (!date) return date

  return dateFnsFormat(date, formatString)
}

const display = (date) => format(date)
const timestamp = (date) => format(date, 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx')

export default {
  display,
  timestamp,
}
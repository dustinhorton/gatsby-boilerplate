import { parsePhoneNumber } from 'libphonenumber-js'

const parse = (value) => {
  if (!value) return null

  try {
    const phone = parsePhoneNumber(value, 'US')

    return phone
  } catch (error) {
    console.error(error)

    return value
  }
}

// (###) ###-####
const format = (value, formatType = 'NATIONAL') => {
  const phone = parse(value)

  if (!phone) return value

  return phone.format(formatType)
}

// ##########
// 6074234747
const digits = (value) => {
  const phone = parse(value)

  if (!phone) return value

  return phone.nationalNumber
}

// (###) ###-####
const display = (value) => format(value)

// +1##########
const e164 = (value) => format(value, 'E.164')

// tel:+1##########
const uri = (value) => format(value, 'RFC3966')

export default {
  digits,
  display,
  e164,
  uri,
}
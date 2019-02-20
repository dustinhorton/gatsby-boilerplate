//import { parsePhoneNumberFromString } from 'libphonenumber-js'

const unformat = (value) => value.replace(/\D/g,'')

const toUri = (value) => {
  //const phone = parsePhoneNumberFromString(value)

  //return phone.getURI()

  return `tel:${unformat(value)}`
}

export default {
  toUri,
  unformat,
}
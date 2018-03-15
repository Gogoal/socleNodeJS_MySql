/**
 * Check if string have no forbidden character .,@[|]#%£$
 * @param string
 * @returns validId : boolean
 */
export function isValidString(string) {
  const validCharacter = /\w[^.,@|#%£$[\]]/;
  return validCharacter.test(string);
}

/**
 * Check if mail is valid
 * @param mail
 * @returns validId : boolean
 */
export function isValidEmail(mail) {
  // eslint-disable-next-line no-useless-escape
  const validMail = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validMail.test(mail);
}

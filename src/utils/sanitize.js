export const sanitizeAlphaNumericWithConnectors = (input) => {
  const regex = /[^a-zA-Z0-9-_ -]/g;
  const sanitizedInput = input.replace(regex, "");
  return sanitizedInput
}

export const sanitizeAlphaNumeric = (input) => {
  const regex = /[^a-zA-Z0-9 -]/g;
  const sanitizedInput = input.replace(regex, "");
  return sanitizedInput
}

export const sanitizeNumeric = (input) => {
  const regex = /[^0-9 -]/g;
  const sanitizedInput = input.replace(regex, "");
  return sanitizedInput
}

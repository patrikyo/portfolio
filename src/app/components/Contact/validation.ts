const validateNamePattern = (value: string): boolean => {
  const nonAlphabetRegex = /[^a-zåäö]/gi;

  if (nonAlphabetRegex.test(value)) {
    return true;
  }
  return false;
};

const validateMinMaxLength = (
  value: string,
  min: number,
  max: number
): boolean => {
  if (value.length < min || value.length > max) {
    return true;
  }
  return false;
};

const validateEmailPattern = (value: string): boolean => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(value)) {
    return true;
  }
  return false;
};

const validatePhone = (value: string) => {
  const phoneNumberRegex = /^((00|\+)[1-9]{2}|0)[1-9\s\-][0-9\s\-]*$/;
  if (!phoneNumberRegex.test(value)) {
    return true;
  }
  return false;
};

export {
  validateNamePattern,
  validateMinMaxLength,
  validateEmailPattern,
  validatePhone,
};

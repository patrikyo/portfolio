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

const getValidationError = (name: string, value: string): string => {
  switch (name) {
    case "firstName":
    case "lastName":
      if (validateNamePattern(value)) {
        return `${
          name === "firstName" ? "First" : "Last"
        } name can only contain Letters (a-z,å,ä,ö)`;
      } else if (validateMinMaxLength(value, 2, 50)) {
        return `${
          name === "firstName" ? "First" : "Last"
        } name must be between 2 and 50 characters Long`;
      }
      return "";
    case "emailAdress":
      if (validateEmailPattern(value)) {
        return "Please enter a valid email adress";
      } else if (validateMinMaxLength(value, 5, 254)) {
        return "Email must be between 5 and 254 characters Long";
      }
      return "";
    case "phoneNumber":
      if (validatePhone(value)) {
        return "Phone number must be in a valid format";
      } else if (validateMinMaxLength(value, 7, 20)) {
        return "Phone number must be between 7 and 20 characters Long";
      }
      return "";
    case "userMessage":
      if (validateMinMaxLength(value, 10, 1000)) {
        return "Message must be at least 10 characters Long";
      }
      return "";
    default:
      return "";
  }
};

export {
  validateNamePattern,
  validateMinMaxLength,
  validateEmailPattern,
  validatePhone,
  getValidationError,
};

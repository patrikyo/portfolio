import ContactField from "../models/enums/ContactField.enum";

const fields = [
  {
    key: ContactField.FirstName,
    label: "First Name",
    type: "text",
    required: true,
    autoComplete: "given-name",
    autoFocus: true,
  },
  {
    key: ContactField.LastName,
    label: "Last Name",
    type: "text",
    required: true,
    autoComplete: "family-name",
  },
  {
    key: ContactField.EmailAddress,
    label: "Email",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    key: ContactField.PhoneNumber,
    label: "Phone Number",
    type: "tel",
    required: false,
    autoComplete: "tel",
  },
];

export default fields;

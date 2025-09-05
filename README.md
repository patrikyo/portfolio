This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

API
This project uses the following backend API:

API Repository: https://github.com/patrikyo/contact-api

Mocking the POST Endpoint
For simplified local development, the contact form's POST request is temporarily mocked. This allows the form to work as expected without a running backend.

To use the mock, the fetch call in Contact.tsx has been replaced with a setTimeout function.

To activate the mock:
Ensure your handleSubmit function in Contact.tsx looks like this:

TypeScript

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  // MOCK LOGIC - REMOVE TO USE REAL API
  setTimeout(() => {
    setSubmitStatus(Status.Success);
    setFormData({
      [ContactField.FirstName]: "",
      [ContactField.LastName]: "",
      [ContactField.EmailAddress]: "",
      [ContactField.PhoneNumber]: "",
      [ContactField.UserMessage]: "",
    });
    setIsFormValid({
      [ContactField.FirstName]: "",
      [ContactField.LastName]: "",
      [ContactField.EmailAddress]: "",
      [ContactField.PhoneNumber]: "",
      [ContactField.UserMessage]: "",
    });
    setIsLoading(false);
    router.push("/thanks");
  }, 500); // Simulates a 0.5s network delay
};
To use the real API:
To switch back to using the live API, simply comment out the setTimeout block and uncomment the fetch call.

Your handleSubmit function should then look like this:

TypeScript

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  const form = JSON.stringify(formData);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: form,
  };

  // REAL API CALL - UNCOMMENT TO USE
  fetch("[https://contact-api-3l0q.onrender.com/api/contacts](https://contact-api-3l0q.onrender.com/api/contacts)", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      setSubmitStatus(Status.Success);
      setFormData({
        [ContactField.FirstName]: "",
        [ContactField.LastName]: "",
        [ContactField.EmailAddress]: "",
        [ContactField.PhoneNumber]: "",
        [ContactField.UserMessage]: "",
      });
      setIsFormValid({
        [ContactField.FirstName]: "",
        [ContactField.LastName]: "",
        [ContactField.EmailAddress]: "",
        [ContactField.PhoneNumber]: "",
        [ContactField.UserMessage]: "",
      });
      setIsLoading(false);
      router.push("/thanks");
    })
    .catch(() => {
      setSubmitStatus(Status.Error);
      setIsLoading(false);
    });
};
```

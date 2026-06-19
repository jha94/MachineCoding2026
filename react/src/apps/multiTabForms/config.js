export const formConfig = {
  Profile: [
    {
      label: "Age",
      type: "number",
      name: "age",
      validation: {
        required: true,
        pattern: /^[0-9]+$/,
        errorMsg: "Age is required and must be numeric",
      },
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      validation: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMsg: "Enter a valid email",
      },
    },
  ],
  Interest: [
    {
      lebel: "Hobbies",
      type: "checkbox",
      name: "hobbies",
      options: ["Reading", "Travelling", "Coding"],
      validation: {
        required: true,
        errorMsg: "Please at least select one hobby.",
      },
    },
    {
      label: "Preferred language",
      type: "radio",
      name: "language",
      options: ["JS", "Python", "C++"],
      validation: {
        required: true,
        errorMsg: "Select a preferred language",
      },
    },
  ],
  Settings: [
    {
      lebel: "Receive Newsletters",
      type: "dropdown",
      name: "newsletter",
      options: ["Yes", "No"],
      validation: {
        required: true,
        errorMsg: "Select an option",
      },
    },
  ],
};

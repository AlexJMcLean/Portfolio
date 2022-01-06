import React from "react";

import PageTitle from "../components/PageTitle";
import ContactForm from "../components/ContactForm";

export default function Contact(props) {
  return (
    <div>
      <PageTitle text="Contact" />
      <ContactForm />
    </div>
  );
}

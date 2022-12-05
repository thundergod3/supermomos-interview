import React from "react";

import Document from "components/Document";
import CreateSocialForm from "pageComponents/CreateSocialForm";

export default function CreateSocialPage() {
  return (
    <>
      <Document title="Create Social" description="Create Social" />
      <CreateSocialForm />
    </>
  );
}

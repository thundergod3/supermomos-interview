import React, { ReactElement } from "react";
import Head from "next/head";

import { DocumentProps } from "./document.schema";

const Document: React.FC<DocumentProps> = ({
  title,
  description,
}): ReactElement => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Document;

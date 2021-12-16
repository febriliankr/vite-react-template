import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
interface Props {
  className?: string;
  children: any;
  title?: string;
}

function Container({ className, children, title = "" }: Props): ReactElement {
  return (
    <div>
      <Helmet>
        <title>{title ? `${title} | SaaS` : "SaaS"}</title>
        <meta name="description" content={`App`} />
      </Helmet>
      <div className={className}>{children}</div>
      <Footer />
    </div>
  );
}

export default Container;

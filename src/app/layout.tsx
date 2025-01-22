import { Layout as ILayout } from "../types";
import "./globals.scss";

export const metadata = {
  title: "everly",
};

const Layout: ILayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>everly</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;

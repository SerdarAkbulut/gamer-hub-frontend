import "./globals.css";
import { ToastContainer } from "react-toastify";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import ConditionalLayout from "./conditionalLayout";
import Header from "./components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full mh-h-screen">
      <body className=" min-h-screen flex flex-col max-w-screen">
        <Header />
        <ConditionalLayout>{children}</ConditionalLayout>

        <ToastContainer
          position="bottom-right"
          hideProgressBar
          theme="colored"
        />
      </body>
    </html>
  );
}

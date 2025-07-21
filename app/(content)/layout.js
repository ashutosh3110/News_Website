import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import MainHeader from "@/Components/main-header.js"

export const metadata={
  title:"Next.Js Page Routing and Rendering",
  description:"Learn how to route to different page",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
        {children}
        </div>
      </body>
    </html>
  );
}

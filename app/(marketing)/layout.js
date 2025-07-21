
import "../globals.css";


export const metadata={
  title:"Next.Js Page Routing and Rendering",
  description:"Learn how to route to different page",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
       
      </body>
    </html>
  );
}

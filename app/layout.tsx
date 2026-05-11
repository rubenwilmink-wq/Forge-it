import "./globals.css";

export const metadata = {
  title: "Forge-it | One input. Infinite empire.",
  description: "Agentic AI die je hele content-imperium bouwt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}

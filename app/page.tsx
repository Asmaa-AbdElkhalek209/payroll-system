/**
 * Home component - Main page component of the Next.js application
 * @returns {JSX.Element} The rendered Home component
 */
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/en/dashboard");
}

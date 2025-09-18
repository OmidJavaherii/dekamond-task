import { redirect } from "next/navigation";
// redirect to login
export default function NotFound() {
    redirect("/login");
    return null;
}
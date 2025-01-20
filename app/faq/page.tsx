import { Category } from "@/constants/faq";
import { redirect } from "next/navigation";

export default function FAQRedirect() {
    redirect(`/faq/${Category.ALL}`);
}

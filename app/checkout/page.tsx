"use client";
import {
    FormContactSection,
    FormDeliverySection,
    FormPaymentSection,
    FormShippingSection,
    OrderSummarySection,
} from "@/components/CheckoutForm";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function Checkout() {
    const quantity = useSearchParams().get("quantity");

    return (
        <div className="container mx-auto flex flex-row gap-10 p-10">
            {/* Left Side */}
            <div className="flex flex-[2] flex-col gap-10">
                <FormContactSection />
                <FormDeliverySection />
                <FormShippingSection />
                <FormPaymentSection />
                <Button className="w-1/3 text-lg font-semibold">Pay Now</Button>
            </div>

            {/* Divider */}
            <div className="mx-auto w-px flex-none bg-muted-foreground"></div>

            {/* Right Side */}
            <div className="flex-[1]">
                <OrderSummarySection quantity={Number(quantity)} />
            </div>
        </div>
    );
}

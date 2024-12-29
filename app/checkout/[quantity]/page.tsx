import {
    FormContactSection,
    FormDeliverySection,
    FormPaymentSection,
    FormShippingSection,
    OrderSummarySection,
} from "@/components/CheckoutForm";
import { Button } from "@/components/ui/button";

export default function Checkout({ params }: { params: { quantity: number } }) {
    return (
        <div className="container mx-auto flex flex-col-reverse gap-10 md:flex-row">
            {/* <Button onClick={shippoTest}>Test</Button> */}

            {/* Left Side */}
            <div className="flex flex-[2] flex-col gap-10">
                <FormContactSection />
                <FormDeliverySection />
                <FormShippingSection />
                <FormPaymentSection />
                <Button className="text-lg font-semibold">Pay Now</Button>
            </div>

            {/* Divider */}
            <div className="mx-auto hidden w-px flex-none bg-muted-foreground md:block"></div>
            <div className="h-px flex-auto bg-muted-foreground md:hidden"></div>

            {/* Right Side */}
            <div className="flex-[1]">
                <OrderSummarySection quantity={params.quantity} />
            </div>
        </div>
    );
}

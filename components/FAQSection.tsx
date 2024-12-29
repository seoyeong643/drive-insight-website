import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="text-center">Frequently Asked Questions</h2>
                <p className="text-center">Learn more about our product.</p>
            </div>
            <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-3">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is my car compatible?</AccordionTrigger>
                    <AccordionContent>
                        Please check the compatibility section for more
                        information.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Where do I find the OBD port?
                    </AccordionTrigger>
                    <AccordionContent>
                        The OBD port is usually located on the driver's side of
                        the car. Please refer to your car manual for more
                        information.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        How do I connect my car?
                    </AccordionTrigger>
                    <AccordionContent>
                        Plug the device into the OBD port and turn on the car.
                        Then setup the device using the instructions on the app.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* <Link href="/faq">
                <h6 style={{ textAlign: "right", color: "blue" }}>
                    Click here for more information
                </h6>
            </Link> */}
        </div>
    );
};

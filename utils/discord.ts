import { ContactFormData } from "@/schema/contactSchema";
import { postData } from "./fetch";

/**
 * Sends a message to a Discord channel using a webhook.
 * @param {string} message - The message content to send.
 * @returns {Promise<void>}
 */
export const sendDiscordMessage = async (formData: ContactFormData): Promise<boolean> => {
	const webhookUrl = "https://discord.com/api/webhooks/1308251119796879360/t85BWP4gSKjanulH206_8hhvc0UttahJbc_s7P6L4TcQPWfR8j_mbIHZXPtteVaQPihm";

	// call embedMessage function with formData
	const data = { embeds: embedMessage(formData) };
    
    // Use the postData function to send the message
    const success = await postData(webhookUrl, data);

	return success;
};




const embedMessage = (contactFormData: ContactFormData) => {
	return [
	  {
		title: "New Contact Form Submission",
		description: `A new message was submitted via the contact form.`,
		fields: [
		  { name: "Name", value: `${contactFormData.firstName} ${contactFormData.lastName}`, inline: true },
		  { name: "Email", value: contactFormData.email, inline: true },
		  { name: "Country", value: contactFormData.countryCode, inline: true },
		  { name: "Phone", value: contactFormData.phoneNumber, inline: true },
		  { name: "Message", value: contactFormData.message, inline: false }
		],
		color: 3447003 // Optional: Embed color (blue)
	  }
	]
};

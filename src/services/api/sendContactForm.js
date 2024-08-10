const webhook = import.meta.env.VITE_ZAPIER_WEBHOOK_URL;

export const sendContactForm = async (data) => {
  const response = await fetch(webhook, {
    method: "POST",
    body: JSON.stringify(data),
  });
  const bodyResponse = await response.json();
  if (bodyResponse.status !== "success") throw new Error("Error :c");
  return bodyResponse;
};

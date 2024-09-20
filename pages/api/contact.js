// server actions don't exist, must call these api endpoints manually from React components
// these api endpoints run on server (can be called from Postman)

import { insertDataintoContact } from "@/lib/data-service";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ success: false, message: "only POST request is allowed!" });

  const contactData = JSON.parse(req.body);

  const { error } = await insertDataintoContact(contactData);
  if (error) res.status(500).json({ success: false, message: "Failed..." });

  // success message
  res.status(200).json({ success: true, message: "Thanks..." });
}

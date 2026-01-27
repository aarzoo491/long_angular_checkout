const axios = require("axios");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const form = new URLSearchParams();
    form.append("transaction_id", Date.now().toString());
    form.append("sales_amount", body.amount);
    form.append("email", body.email);

    console.log("🔥 Firing request to webhook...");
    console.log("➡️ URL:", "https://visioptdev.com/app/webhook_capture_custom/MTA0MC00MjMtMTMyLVc=");
    console.log("➡️ Request Body:", form.toString());

    const response = await axios.post(
      "https://visioptdev.com/app/webhook_capture_custom/MTA0MC00MjMtMTMyLVc=",
      form,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    console.log("✅ Webhook response received:");
    console.log("Status:", response.status);
    console.log("Headers:", response.headers);
    console.log("Data:", response.data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        status: response.status,
        webhookResponse: response.data
      })
    };

  } catch (err) {
    console.error("❌ Error while sending webhook:", err);

    if (err.response) {
      console.error("Server responded with:");
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
    }

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message,
        serverError: err.response ? err.response.data : null
      })
    };
  }
};

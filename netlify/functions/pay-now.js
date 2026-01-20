const axios = require("axios");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    // Form data (NOT JSON)
    const form = new URLSearchParams();
    form.append("transaction_id", Date.now().toString());
    form.append("sales_amount", body.amount);
    form.append("email", body.email);

    const response = await axios.post(
      "https://visioptdev.com/app/webhook_capture_custom/MTA0MC00MjMtMTMyLVc=",
      form.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        webhookResponse: response.data || "OK"
      })
    };

  } catch (err) {
    console.error("Error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message
      })
    };
  }
};

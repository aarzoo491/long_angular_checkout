const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const body = JSON.parse(event.body);

    const payload = {
      transaction_id: Date.now(),
      sales_amount: body.amount,
      email: body.email
    };

    const response = await axios.post(
      "https://visiopt.com/app/webhook_capture_custom/MTAzMy0yNTQtNTItVw==",
      payload,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        webhookResponse: response.data
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: err.message
      })
    };
  }
};

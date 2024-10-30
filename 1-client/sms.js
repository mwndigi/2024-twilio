const twilio = require("twilio");

// Twilio API nøgler
const accountSid = "xxxx";
const authToken = "xxxx";
const client = twilio(accountSid, authToken);

async function createText() {
  const message = await client.messages.create({
    from: "+xxxx",
    to: "+xxxx",
    body: "Hej det er Joe and The Juice som skriver. I dag er der tilbud på Juicen til dig.",
  });

  console.log(message);
}

createText();

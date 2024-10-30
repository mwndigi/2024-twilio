const twilio = require("twilio");

// Twilio API nøgler
const accountSid = "xxxx";
const authToken = "xxx";
const client = twilio(accountSid, authToken);

async function createText() {
  const message = await client.messages.create({
    from: 'whatsapp:+xxxx',
    contentSid: 'HXb5b62575e6e4ff6129ad7c8efe1f983e',
    contentVariables: '{"1":"12/1","2":"3pm"}',
    to: 'whatsapp:+xxxx',
  });

  console.log(message);
}

createText();

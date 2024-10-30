const twilio = require("twilio");

// Twilio API nøgler
const accountSid = "xxxx";
const authToken = "xxxx";
const client = twilio(accountSid, authToken);

async function createCall() {
  const call = await client.calls.create({
    from: "+xxxx",
    to: "+xxxx",
    twiml:
      "<Response><Say>Hello this is Joe and The Juice calling. Today we have a special offer on juice for you.</Say></Response>",
  });

  console.log(call);
}

createCall();

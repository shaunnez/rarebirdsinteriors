// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SMTPClient } from "emailjs";

export default function handler(req, res) {
  const { email } = req.body;
  // console.log(process.env)

  const client = new SMTPClient({
    user: "shaunnesbittuk@gmail.com",
    password: "IvyNesbitt2020!",
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    client.send({
      text: `Just for testing purpose`,
      from: "shaunnesbittuk@gmail.com",
      to: email,
      subject: "testing emailjs",
    });
  } catch (e) {
    console.log(e);
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}

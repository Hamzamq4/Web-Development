const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const nodemailer = require("nodemailer");
require("dotenv").config();

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());

const authToken = process.env.SECRET_KEY;
const web_Testimonials = process.env.TESTIMONIALS;
const web_Projects = process.env.PROJECTS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const notion = new Client({ auth: authToken });

app.post("/sendEmail", jsonParser, async (req, res) => {
  const { fullName, email, topic, message } = req.body;
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    replyTo: email,
    subject: `New Contact Form Submission from ${fullName} - ${topic}`,
    html: `<p>You have a new contact request from:</p>
           <ul>
             <li>Name: <br> ${fullName}</li>
             <li>Email: <br> ${email}</li>
             <li>Topic: <br> ${topic}</li>
             <li>Message: <br> ${message}</li>
           </ul>`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully!", result });
  } catch (error) {
    console.error("Failed to send email", error);
    res.status(500).send({ message: "Failed to send email", error });
  }
});

app.post("/Post", jsonParser, async (req, res) => {
  const { Name, Review } = req.body;
  try {
    const response = await notion.pages.create({
      parent: { database_id: web_Testimonials },
      properties: {
        Name: { title: [{ text: { content: Name } }] },
        Review: { rich_text: [{ text: { content: Review } }] },
      },
    });
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to post testimonial" });
  }
});

app.get("/Testimonials", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: web_Testimonials,
      sorts: [{ timestamp: "created_time", direction: "descending" }],
    });
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to retrieve testimonials" });
  }
});

app.get("/Projects", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: web_Projects,
      sorts: [{ timestamp: "created_time", direction: "descending" }],
    });
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to retrieve projects" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

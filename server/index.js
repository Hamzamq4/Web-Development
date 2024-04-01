const express = require("express");
const { Client } = require("@notionhq/client");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const port = process.env.PORT || 8000;
require("dotenv").config();

const app = express();
app.use(cors());

const authToken = process.env.SECRET_KEY;
const notionDbID = process.env.TESTIMONIALS_HAMZA;

const notion = new Client({ auth: authToken });

app.post("/NotionAPIPost", jsonParser, async (req, res) => {
  const { Name, Review } = req.body;
  console.log(Name, Review);
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: notionDbID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: Name,
              },
            },
          ],
        },
        Review: {
          rich_text: [
            {
              text: {
                content: Review,
              },
            },
          ],
        },
      },
    });
    res.send(response);
    console.log(response);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
});

app.get("/NotionAPIGet", async (req, res) => {
  try {
    const response = await notion.databases.query({
      database_id: notionDbID,
      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
    });
    res.send(response);
    const { results } = response;
    console.log("success");
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("server listening on port 8000!");
});

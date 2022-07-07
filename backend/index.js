const express = require("express");
var cors = require('cors')
const { google } = require("googleapis");
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
app.use(cors())

const getAuthSheets = async () => {
  const auth = new google.auth.GoogleAuth({
    keyfile: "esportes.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  })

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: "v4",
    auth: client,
  })

  const spreadsheetId = "1NxL0azsu46G2XGp6vaRSEbnafi3Fx3BNjQgJowp6lao"

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId
  }

}

app.get("/metadata", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const metadata = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  res.send(metadata.data);
});

app.post("/esportes", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
  console.log(req.body)
  const { values } = req.body;

  const row = await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Página1",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
    },
  });

  res.send(row.data);
});

app.listen(3001, ()=> console.log('Rodando na porta 3001'))
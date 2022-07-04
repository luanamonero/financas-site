const express = require("express");
const { google } = require("googleapis");

const app = express()

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

app.get("/getRows", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Página1",
    valueRenderOption: "UNFORMATTED_VALUE",
    dateTimeRenderOption: "FORMATTED_STRING",
  });

  res.send(getRows.data);
});

app.post("/addRow", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

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

app.post("/updateValue", async (req, res) => {
  const { googleSheets, spreadsheetId } = await getAuthSheets();

  const { values } = req.body;

  const updateValue = await googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range: "Página1!A2:C2",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
    },
  });

  res.send(updateValue.data);
});

app.listen(3001, ()=> console.log('Rodando na porta 3001'))
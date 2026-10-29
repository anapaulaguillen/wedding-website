// Paste this into your Google Sheet: Extensions > Apps Script.
// Then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
// Each reply from the save-the-date site is added as a new row.

const HEADERS = ["Received", "Name", "Coming", "Guests", "Language"];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  const d = JSON.parse(e.postData.contents);
  const clean = v => String(v || "").slice(0, 200).replace(/^[=+\-@]/, "'$&"); // stop formulas being injected
  const coming = d.attending === "yes";
  const guests = coming ? Math.min(Math.max(Number(d.guests) || 1, 1), 10) : 0;
  sheet.appendRow([new Date(), clean(d.name), coming ? "Yes" : "No", guests, d.lang === "es" ? "Español" : "English"]);
  return ContentService.createTextOutput("ok");
}

/**
 * Syncs with google docs to check if there are any new data.
 */
const google = require('googleapis')
const googleAuth = require('google-auth-library')
const sheets = google.sheets('v4')

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE) + '/.credentials/'
const TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json'

export function sync (event, cb) {
  // Requires
  // - google doc details
  // - user's folder on the S3 bucket.

  sheets.spreadsheets.get({
    auth: event.auth,
    spreadsheetId: event.spreadsheetId,
  }, (err, res) => {
    if (err) {
      console.log('The API returned an error: ' + err)
      return
    }

    var rows = response.values
    if (rows.length == 0) {
      console.log('No data found.')
    } else {
      console.log('Name, Major:')
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i]
        // Print columns A and E, which correspond to indices 0 and 4.
        console.log('%s, %s', row[0], row[4])
      }

      return cb(rows)
    }
  })
  // Fetch S3 and Google spreadsheet data
  // Convert spreadsheet data to JSON
  // Compare data to the last version on S3
  // - If this is a new version, then create a new version
  // - Validate the new version - show the users errors in it
  // - Have a button to refresh the version
  // - Have the ability to switch to a previous version
  // - Upload the new version regardless of validation
  // Name the newest version  a specific name so that it is always accessible... or put it in a specific folder on the S3 bucket.
}

export function auth (clientId, token, cb) {
  const auth = new googleAuth()
  const client = new auth.OAuth2(clientId)
  client.verifyIdToken(token, clientId, (err, login) => {
    if (err) return cb(err);
    client.credentials = JSON.parse(token)
    return cb(null, client)
  })
}

function read() {

}
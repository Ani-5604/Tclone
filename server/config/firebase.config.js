import admin from "firebase-admin";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1fdDh7G8pEQHc\naaFI3eCQb6qKLuB3yOAUwduT29/7hcTHFXP3ycx2WaV9pOke6fyhTB2K0ci4ycIv\n1QegkWyeQAc+y/ZYlZ6r/eduWdJ+U4EWDmGdqCGpWZDevqrzWYdHnVh/AJTf0fb9\nsGTK9EYQnzugNi8oEoDxcJAI9DgMRu4Xu/qvXUEi86Gxfr3nzZnJH9jh2Ha+h1OK\np3n0dtHiPQL2zQYhGuhd2r2DthhUdGIZoJTntgscRQcnYDJJqFKZiuuzuLPHx174\nDViTBUklPkUmfFKmU0HWFTEdvo6nZO3rCnrtBT3fVY1m3eR8cPwTdJv/jFmkzvj7\nQRZt8RIdAgMBAAECggEAA1A/OoizBNhrJMeG6somOezX+7rcXUN9F9PsOthWUATC\nsXHKUrlL8tMzKsaSfP5/nsBBf9HRrNH+KhplD8Dn70GzACoAHuDoazJxAbpBFg5X\nOnxbuuGhb7KTawWnIFc/mYadYYA0t5thO4N3a58nElGd6JBkrwIbeYz5DDjNNygi\nbTBb7E4zq03Sjr5X7j9ZZncspbA77TYXTwKoqTwhrGai7gnvtyKyHYh7ef5NJuwf\nY+0kui7/+QEkiHgMzp1ChyivU8rhAEWTCf2wMpBFvCPR0bjKianvY/7iGvUxI0vG\nI6f79uVi2waUB5gxeB9s6reyAAMplh6cPvVbhGiskQKBgQD0FkE38UAnbrlhg+4J\nsRE8gN3r27ywZ95hFO3OFVqXjJb3V/eNLRQMo04GYSODqf3jqp1vRIzwF5HvKIhq\nq1AiUXNFYfQEvFwyNem1d9PDelcPotzyZ7qZfKQM6HKV3S29pvToKZffVfgM0Rn7\n8iLVOOE91e4AFpmSAKeEJMmkFQKBgQC+WXY+X/IZs+iMcI4ZZWz0YDRsJNY2yOjP\nIpwby0GwpWNvErhtRvRMHUUlAeJ2czP+Q0Ay8JCFP0yZoTgAY5lO5RdwTM2bb212\nPR22hcAq9+qIvBVsxUnNfF2K8RZ2R0ri73ANLDD6vow9ePC4AuSOKiTP8YbmfjoH\n95UVYneP6QKBgGJIl8hD31ZBcmn+qpnCb7NSHIn9N/Q8TsH+oGbMGGdPl/ZOuIJj\nNWCFXUSaVqeMiovixnPoQWvnwb5wLsXs5156N5UnhQ9nHSSmqs2ES4O5vlaweJEv\nDWcCVjhQXNtVbTahhJn7LYkjX7chd3oInNgIiEHS43urnfi5RLqj6YGlAoGBAJ1w\nZWrF9PrpYUj3t7CtwWaHRBTGix+ZIWZh2/jpLxYqVYoDU+OesmVaOFyZqHQMaU6+\n1RTNANwVNQhE3osD1kP5HF/YRp9vlHwdpLvY+M8Raz1ZQ+dJbve1C7HmIowF/5yg\nKm/aw1BB1sDpjUDFs8EafoQ34zo14U3Bq9+aKAYxAoGARe7fTAuSrmGk5DpT01eG\nI8B95EwAJBHo8fwFeLfH1/5nn7+Bf4aqMxAJhVtfY9HCwvKy0I2Jzng11ubAoOZA\ndB+ehiarwsP9FvaKXlapH4RZS9V3IuBDntRM4zKPFBQYVXioMzFW3TrbNtkxDGcy\nnUZMInRlO/o7odqnifiZU7k=\n-----END PRIVATE KEY-----\n",
      client_email: "firebase-adminsdk-xfx4j@twiller-960e0.iam.gserviceaccount.com",
      project_id: "twiller-960e0",
    }),
  });
}

export default admin;
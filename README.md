This is a sample project to integrate a facebook messange with a nodejs app that process google dialogflow NLP.

///////////// Steps

1- You need to run ngrok local with the command "ngrok http 5000", your NodeJS app should run on PORT=5000
2- Take the https url from ngrok then set it at facebook page "Callback URL" and set the "Verify Token" to "VERIFY_TOKEN" in file "src/webhook.js"
3- Config ur dialogflow agent.

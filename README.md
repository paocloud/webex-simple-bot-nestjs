## Cisco Webex Simple Bot by Nest JS

## Description
This is simple webhook server for recived incoming request by webex server, and post message into webex team room.

### Add webhook endpoint
1. Add webhook endpoint , You can follo [developer.webex.com](https://developer.webex.com)
2. for example endpoint
   URL : https://webhook-webex.mycompany.co.th/webhook
SECRET : mysupersecuresecret1234!

### How to run this project
1. Clone this project
2. Edit .env 
SECRET=mycrazysecret1234 //set up secret for validation (if you add webhook endpoint and add secret)
TOKEN=XXXXXXXXXXX //token from webex app
3. npm install
4. npm run start:dev
    Webhook bot should start from port 3039
    or other port if you change it from .env file
5. you should set up https , you can use nginx for revers proxy , cloudflare , etc.


### Let's Play
1. Add bot in to webex team.
2. Say 'hello' directly into your bot.
3. Add bot to your group room and say 'my @<your_bot_name>'.
4. Enjoy !!!
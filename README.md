# Simple Webex bot by Nest.JS

For this project i wiil show you how to start webex bot (develop by [Nest.JS](https://nestjs.com) framework, coding with [Type Script](https://www.typescriptlang.org)) and use [AWS EC2](https://aws.amazon.com/ec2/) for running webhook server , [AWS API Gateway](https://aws.amazon.com/api-gateway/) for enable HTTPS and set up custom domain for webhook endpoint.


# Preparing

1. We need to have a client. To download the client, follow to the link: https://www.webex.com/downloads.html and click the download button for the Webex Teams client. Alternatively you can use the web browser client which can be found at: https://teams.webex.com.
2. Then for creating the bot. We must mention To create the bot and obtain its access token, navigate to the My Apps page of your account https://developer.webex.com/my-apps select Create New App and when prompted choose the Bot type then complete the form which asks for Username / Bot Name, Bot Icon and a short description. Once submitted, you will then be given the access token.
3. Now the most important part , Creating the webhook. Go to www.developer.webex.com. Select Documentation -> API Reference -> Webhooks -> Create a Webhook.
Here we specify what event we're listening out for:
Authorization Use the bot's bearer token which you copied earlier
name: Create any name for your webhook
targetUrl: https://webexbot.mycompany.com/webhook
resource: 'messages',event: 'created',filter: , Then SECRET=mycrazysecret1234

For target url you can use url from AWS API Gateway.

For secret , i recommend to set up it for better security, your secret should follow how to create password in best practise.

## Prepare Infrastructure

1. Launch new AWS EC2 instance ,
- AMI Image => "Ubuntu 18.04"
- VPC => you can use default vpc config.
- Subnet => you can use default subnet.
- Enable Public IP => "yes"
- Security Group => Enable SSH and TCP port 9000 from 0.0.0.0/0
- EBS Size => 8GB or grather if you want.
- Tag => not necessary. you can ignore it.
- Key pair => select your key pair for SSH to this EC2 instance.


2. Create AWS API Gateway endpoint
- Go to AWS API Gateway service.
- Click create api , select REST API and click build.
- Select New API , type api name and description , select edge optimize for endpoint type.
- Go to resources , click action select create resource type "webhook" for resource name and enable api gateway cors.
- On the resource "webhook" click action select "creat methods" select "POST" type.
- Go to method request select http proxy and type "http://<your-aws-ec2-instance-public-ip>:9000/webhook" and save this config.
![Method request config to origin server](https://statics.paocloud.co.th/webex-simple-bot-cisco-devnet/1.png)
- Go to method request and add "x-spark-signature" for pass this header into webhook server in "http request header config" and select required.
![Method request setting for http request header](https://statics.paocloud.co.th/webex-simple-bot-cisco-devnet/2.png)
- Click action and select deploy API , select stage name (if you not have stage you can create new stage) and click deploy for save all api gateway config.

3. Set up custom domain name for api gateway
- Add certificate for enable https in AWS certificate manager. (if you have alreday certificate , you can use it for this project).
- Go to API gateway and select custom domain mame.
- Click create.
- Type your domain name for example "webexbot.mycompany.com".
- Select endpoint type , i suggest edge optimize type.
- Select certificate.
- Click create domain name
![Custom domain api endpoint](https://statics.paocloud.co.th/webex-simple-bot-cisco-devnet/3.png)
- Click your endpoint and map domain name with your stage
![api mapping with custom domain name](https://statics.paocloud.co.th/webex-simple-bot-cisco-devnet/5.png)
- Go to dns management for your domain and add cname record and point to api gateway endpoint from api gateway
![api gateway domain name](https://statics.paocloud.co.th/webex-simple-bot-cisco-devnet/4.png)

## Deploy simple code
- Secure Shell to AWS EC2 instance, you can follow this link for how to connect : https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html
- Clone this project by command "git clone https://github.com/paocloud/webex-simple-bot-nestjs.git"
- Install [node.js](https://nodejs.org/en/) if you not aready installed.
- Use linux command "cd <project_directory>" and type "npm install" for install necessary dependencies.
- Edit .env file for TOKEN and SECRET value.
- Run this project by using this command "npm run start:dev"
- You should to see startup message "Webex Bot by NestJS Server running at port 9000"
![startup message](https://statics.paocloud.co.th/webex-simple-bot-cisco-devnet/6.png)

## Try to play with bot
- Open Cisco Webex Team, log in to system if need.
- Add bot to your group by type bot name.
- Type "hello" and mention with "@<your-botname>"
- Your should to see responce message.
- Have a fun with Webex bot !!
![webex team](https://statics.paocloud.co.th/webex-simple-bot-cisco-devnet/7.png)


## Reference
- https://docs.aws.amazon.com/efs/latest/ug/gs-step-one-create-ec2-resources.html
- https://docs.aws.amazon.com/apigateway/index.html
- https://developer.webex.com/docs/platform-introduction


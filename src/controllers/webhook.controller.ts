import { Controller, Req,Post, Body, Headers } from '@nestjs/common';
import { WebHookService } from '../services/webhook.service';

@Controller()
export class WebHookController {
  constructor(
    private readonly webhookService: WebHookService,
  ) {}
  
  @Post('/webhook')
  postWebhook(@Headers() requestHeader: object, @Req() req: any,@Body() webhookDto: any): object {
    return this.webhookService.postWebhook(req.rawBody,webhookDto,requestHeader);
  }
}
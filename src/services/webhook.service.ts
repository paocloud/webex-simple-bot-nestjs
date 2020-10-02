import { Injectable } from '@nestjs/common';
import { handleRoomtype } from '../functions/handleRoomtype.function';
import { validateSignature } from '../utils/validateSignature.util';
import { config } from '../configs/webex.config';

@Injectable()
export class WebHookService {
  async postWebhook(rawRequestBody: string, webhookDto: any,requestHeader: object): Promise<any> {
      if(validateSignature(webhookDto, config.secret, requestHeader['x-spark-signature'])){
        return await handleRoomtype(webhookDto);
      }
  }
}

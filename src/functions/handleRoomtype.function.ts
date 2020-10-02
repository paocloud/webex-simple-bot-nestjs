import { decryptMessage } from './decryptMessage.function';
import { handleMessage } from './handleMessage.function';
import { removeBotName } from '../utils/removeBotName.util';

export async function handleRoomtype(event: any): Promise<any> {
   let desData = await decryptMessage(event.data.id);

   /* Remove Bot name if roomType = group*/
   if(desData.roomType === 'group'){
      return await handleMessage(desData, removeBotName(desData.text))
   }
   else {
      return await handleMessage(desData, desData.text)
   }
}
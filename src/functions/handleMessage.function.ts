import { sendMessage } from './events/sendMessage.event';
import { getPersonProfile } from './events/getPersonProfile.event';

export async function handleMessage(desData, msg) {
    if(msg === 'hello'){
        sendMessage(desData.roomId, 'Hello , How are you ?')
    }
    else if(msg === 'my'){
        let profile = await getPersonProfile(desData.personId)
        sendMessage(desData.roomId, `Your name is ${profile.displayName}`)
    }
    else {
        sendMessage(desData.roomId, `Cisco Webex the best.`)
    }
}
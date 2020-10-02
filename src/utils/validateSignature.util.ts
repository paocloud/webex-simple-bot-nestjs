import * as crypto from 'crypto';

export async function validateSignature(webhookDto, secret, sparkHeader) {
    const hmac = crypto.createHmac('sha1', secret);
    const payload = JSON.stringify(webhookDto);
    hmac.update(payload);

    const digest = hmac.digest('hex');
    const n = digest.localeCompare(sparkHeader);
    
    if(n == 0){
        return true;
    }
    else {
        return false;
    }

}

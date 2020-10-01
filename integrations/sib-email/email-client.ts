import { AccountStatement, Identity } from "integrations/stitch/types";

export async function sendStatementEmail(userIdentity?: Identity, statements?: AccountStatement[]) {
    console.log('executing sendStatementEmail')

    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("api-key", "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");
    myHeaders.append("content-type", "application/json");

    let body = {
        "sender":{  
            "name":"Stitch Money",
            "email":"priyen@stitch.money"
         },
         "to":[  
            {  
               "email":`priyenpillay@outlook.com`,
               "name":`Mars Sales Team`
            }
         ],
         "subject":"FNB Statement for Priyen Pillay",
         "htmlContent":`<html><head></head><body><p>Hello,</p>Please find the attached statement for ${userIdentity?.fullName}.</p></body></html>`,
         "attachment": [
             {
                 "content": statements![0]?.payload ?? "",
                 "name": `${name}-statement.pdf`
             }
         ]
    };

    const bodyString = JSON.stringify(body);

    const response = await fetch(`https://api.sendinblue.com/v3/smtp/email`, {
        method: 'post',
        headers: myHeaders,
        body: bodyString
    });
    
    console.log(`response status: ${response.status}`)
    console.log(`response: ${await response.text()}`)
    
    return true;
}
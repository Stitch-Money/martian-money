import { AccountStatement, Identity } from "integrations/stitch/types";

type EmailAttributes = {
    FULLNAME: string
    IDNUMBER: string
};

type EmailAttachment = {
    content: string
    name: string
};

type EmailBody = {
    emailTo: string[]
    attributes: EmailAttributes
    attachment?: EmailAttachment[]
};

export async function sendStatementEmail(userIdentity?: Identity, statements?: AccountStatement[]) {
    console.log('executing sendStatementEmail')

    var myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("api-key", "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");
    myHeaders.append("content-type", "application/json");

    let body: EmailBody = {
        emailTo: ["priyenwork@gmail.com"],
        attributes: {
            FULLNAME: userIdentity?.fullName!,
            IDNUMBER: userIdentity?.identifyingDocument?.number!
        }
    };

    if (statements) {
        body.attachment = [];
        statements.forEach(statement => {
            const attachment: EmailAttachment = {
                content: statement.payload,
                name: statement.name
            }
            body.attachment!.push(attachment);
        });
    }

    const bodyString = JSON.stringify(body);

    const response = await fetch(`https://api.sendinblue.com/v3/smtp/templates/1/send`, {
        method: 'post',
        headers: myHeaders,
        body: bodyString
    });
    
    console.log(`response status: ${response.status}`)
    console.log(`response: ${await response.text()}`)
    
    return true;
}
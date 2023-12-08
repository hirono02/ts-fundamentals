export type SubmitRequest = {
    transactionId: string,
    personal: {
        title: string,
        firstName: string,
        lastName: string,
        previousAliases: {
            firstName: string,
            middleName: string,
            lastName: string,
        }[],
    },
    email: string,
    phone: string,
    gender: string,
    payment: {
        creditCardToken: string,
    }
}

// Syntax for type lookup is type[property], can be a type alias as well

type PaymentRequest = SubmitRequest['payment'];
type PreviousAliasRequest = SubmitRequest['personal']['previousAliases'][0];

export function getPayment(): SubmitRequest['payment'] {
    return {
        creditCardToken: '123df9sd1br923sas',
    }
}

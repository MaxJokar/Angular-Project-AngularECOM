//for Request
export interface ContactInterface {
    name:string ,
    email:string ,
    description :string
}

// for Response
export interface ContactFeedbackInterface {
    status: boolean,
    message?:string ,
    data?: any
}
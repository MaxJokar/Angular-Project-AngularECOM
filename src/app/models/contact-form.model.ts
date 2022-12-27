export interface ContactInterface {
    name:string ,
    email:string ,
    description :string
}


export interface ContactFeedbackInterface {
    status: boolean,
    message?:string ,
    data?: any
}
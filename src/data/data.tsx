export type Data ={
    question: string,
    answer: {
        yes: string,
        no:string
    }
}

export const data: Data = {
    question: "Do you like React ?",
    answer: {
        yes: "Good choice!",
        no: "Damn!"
    }
}
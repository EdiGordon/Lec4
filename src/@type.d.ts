// to make the file a module and avoid the TypeScript error
export { }


export type Role = {
    name: string
}

export type Car = {
    vandor: string,
    model: string,
    color: string,
    image?: string
}

declare global {//google: add prop to request in typescript
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}





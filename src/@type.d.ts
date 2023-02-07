// to make the file a module and avoid the TypeScript error
export { }

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}


//google: add prop to request in typescript
export type Person = {
    fname: string,
    lname?: string,
    // age: Number,
    isMarried: boolean,
    children?: string [],
    getFullName: () => string,
    getAge?: (num:number, name:string) => number
}

// make accessible
// export {Person}
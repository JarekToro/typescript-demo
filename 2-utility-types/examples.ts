

interface UserProfile {
    name: string,
    id: number,
    favoriteQuote?:string,
    permissions: String[]
}
//Part of standard Typescript Lib

let obj: UserProfile

let partialObj: Partial<UserProfile>

let requiredObj: Required<UserProfile>

let readonlyObj: Readonly<UserProfile>

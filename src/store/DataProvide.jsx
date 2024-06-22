import { Data } from "./context"

export default function DataProvider({children}){
    const posts = [
        {
            id:1,
            title:'post 1',
        },
        {
            id:2,
            title: 'post 2',
        },
    ]

    return <Data.Provider value={{posts}}>{children}</Data.Provider>;
}
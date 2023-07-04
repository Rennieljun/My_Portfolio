import { useEffect, useState } from "react"
import { getResumeUrl } from "../api/auth/[...nextauth]/route";

export const DownloadURL = () => {
const [dl, setDl] = useState('')

    useEffect(()=>{
        const data = getResumeUrl();
        data.then((item) => {
            setDl(item.Link);
        })
    },[])
    
    return dl;
}

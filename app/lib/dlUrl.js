import { useEffect, useState } from "react"
import { dlLink } from "../api/auth/[...nextauth]/route"


export const DownloadURL = () => {
const [dl, setDl] = useState('')

useEffect(()=> {
    dlLink.then((url) => setDl(url));
}, [])

return dl;
}

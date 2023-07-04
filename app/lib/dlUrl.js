import { useEffect, useState } from "react"
import {resumePath} from '@/app/api/auth/[...nextauth]/route'
import { getDownloadURL } from "firebase/storage"

export const DownloadURL = () => {
const [dl, setDl] = useState('')

    useEffect(()=> {
        getDownloadURL(resumePath).then((url) => {
            setDl(url);
        })
    }, [])

    return dl;
}

import { useEffect, useState } from "react"
import { app } from "../api/auth/[...nextauth]/route"
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export const DownloadURL = () => {
const [dl, setDl] = useState('')

const storage = getStorage(app);
const resumePath = ref(storage, 'resume/MyResume.pdf');

useEffect(()=> {
getDownloadURL(resumePath).then((data) => {
    setDl(data);
})
},[])

return dl
}

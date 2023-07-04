import { useEffect, useState } from "react"
import { app } from "../api/auth/[...nextauth]/route"
import { getDownloadURL, getStorage, ref } from "firebase/storage";


const storage = getStorage(app);
const resumePath = ref(storage, 'resume/MyResume.pdf');

export const DownloadURL = () => {
const [dl, setDl] = useState('')

getDownloadURL(resumePath).then(data => setDl(data))

return dl
}

import { useEffect, useState } from "react"

const useVerify = email => {
    const [isVerified, setIsVerified] = useState([]);
    const [isVerifiedLoading, setIsVerifiedLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://bikevally-app-server.vercel.app/usersbyemail/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsVerified(data);
                    setIsVerifiedLoading(false)
                })
        }
    }, [email])
    return [isVerified, isVerifiedLoading]
}

export default useVerify;
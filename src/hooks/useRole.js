import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [role, setRole] = useState([])
    const [roleLoading, setRoleLoading] = useState(true);
    console.log(role);

    useEffect(() => {
        if (email) {
            fetch(`https://bikevally-app-server.vercel.app/usersbyemail/${email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.users?.role)
                    setRoleLoading(false)
                })
        }
    }, [email])
    return [role, roleLoading];
};

export default useRole;
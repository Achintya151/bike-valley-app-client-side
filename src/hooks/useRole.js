import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [role, setRole] = useState([])
    const [roleLoading, setRoleLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setRole(data.users?.role)
                    setRoleLoading(false)
                })
        }
    }, [email])
    return [role, roleLoading];
};

export default useRole;
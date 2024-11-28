import { useState, useCallback } from 'react'
const useGetData = ({defaultUser, defaultRepos}) => {
    const [username, setUsername] = useState({})
    const [user, setUser] = useState(defaultUser)
    const [repos, setRepos] = useState(defaultRepos)
    const getName = useCallback(async (name) => {
        const responseUsername = await fetch(`https://api.github.com/users/${name}`)
        const dataUsername = await responseUsername.json()
        setUsername(dataUsername)
    }, [])

    const getUser = useCallback(async (name) => {
        const responseUser = await fetch(`https://api.github.com/users/${name}`)
        const dataUser = await responseUser.json()
        setUser(dataUser)
        const responseRepos = await fetch(`https://api.github.com/users/${name}/repos`)
        const dataRepos = await responseRepos.json()
        setRepos(dataRepos)
    }, [])
    return {
        getName,
        getUser,
        username,
        user,
        repos,
        setUsername
    }
}

export default useGetData
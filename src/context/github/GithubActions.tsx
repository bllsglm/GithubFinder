import axios from "axios"


const GITHUB_URL = import.meta.env.VITE_URL
const GITHUB_TOKEN = import.meta.env.VITE_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {Authorization: `token ${GITHUB_TOKEN}`}
})


  // Get Initial  Users (testing purposes)
  export const fetchUsers = async(text: string) => {

    const params = new URLSearchParams({q: text})

    const response = await github.get(`/search/users?${params}`)
    return response.data.items
   
  } 


    // Get single user
    // Get User repos

  export const getUserandRepos = async(login: string) => {

    const [user,repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`)
    ])

    return {user : user.data, repos: repos.data}
  }
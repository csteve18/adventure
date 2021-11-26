interface User {
    id: number
    name: string
}

function getUsers(): Promise<User[]> {
    return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => { return json as User[] })
}

const result = document.getElementById('result')

getUsers()
    .then(users => {
        if(result != null){
            result.innerHTML = users.map(u => u.name).toString()
        }
    })
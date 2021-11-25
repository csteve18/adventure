interface User {
    id: number
    name: string
}

function getUsers(): Promise<User[]> {

    // For now, consider the data is stored on a static `users.json` file
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => { return json as User[] })
}

const result = document.getElementById('result')
getUsers()
    .then(users => {
            console.log(users)
    })
interface User {
    id: number
    name: string
}

function getUsers(): Promise<User[]> {

    // For now, consider the data is stored on a static `users.json` file
    return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => { return json as User[] })
}

let element = <HTMLInputElement>document.getElementById("result");
element.value = "Text you want to give";

getUsers()
    .then(users => {
            console.log(users)
    })
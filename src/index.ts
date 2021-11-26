interface User {
    id: number
    latitude: number
    longitude: number 
    hitDate: Date
}

function getUsers(): Promise<User[]> {
    return fetch('https://localhost:5001/gpscoordinate')
            .then(response => response.json())
            .then(json => { return json as User[] })
}

const result = document.getElementById('result')

getUsers()
    .then(users => {
        if(result != null){
            result.innerHTML = users.map(u => u.hitDate).toString()
        }
    })
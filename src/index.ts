interface GPSCoordinate {
    id: number
    longitude: number
    latitude: number
    hitDate: Date
}

function getGPSCoordinates(): Promise<GPSCoordinate[]> {

    return fetch('localhost:51328/adventure')
            .then(response => response.json())
            .then(json => { return json as GPSCoordinate[] })
}


function addGPSCoordinate(gpsCoord: GPSCoordinate): Promise<GPSCoordinate> {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                latitude: gpsCoord.latitude,
                longitude: gpsCoord.longitude,
                hitDate: gpsCoord.hitDate,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then(json => { return json as GPSCoordinate});
}

const result = document.getElementById('result')

getGPSCoordinates()
    .then(users => {
        if(result != null){
            result.innerHTML = users.map(u => u.id).toString()
        }
    })

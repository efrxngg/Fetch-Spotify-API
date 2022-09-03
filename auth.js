var token = "";

const getJWT = async () => {
    let cliente_id = '';
    let clinte_key = '';

    options = {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa(cliente_id + ":" + clinte_key)}`,
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: "grant_type=client_credentials"
    };

    const response = await fetch("https://accounts.spotify.com/api/token", options);
    console.log(response.status)
    const data = await response.json();
    console.log(data);
    token = data.access_token;
};

const findAllArtitas = async() => {
    let url = "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6 ";
    options = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
            
        },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data.artists);
    data.artists.forEach(artista => {
        console.log(artista);
        
    });
    

};



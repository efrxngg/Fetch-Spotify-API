const authUser = async() => {

    let url = 'https://accounts.spotify.com/authorize?';
    url += 'client_id=6991557a70ff4fef80417efdacd770bb&';
    url += 'response_type=code&';
    url += 'redirect_uri=http://127.0.0.1:5500/auth.html&';
    window.location.href = url;
}


const getJWT = async() => {
    cliente_id = '6991557a70ff4fef80417efdacd770bb';
    clinte_key = 'b2ed10dbad94493a96939d3ae8058744';

    options = {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${btoa(cliente_id + ':'+ clinte_key)}`,
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            code: "AQBtS0HodISYGHIsi-E9-I_XXJ4tpiITiii0LKXdp8_YvhsPl-3uI3-NY1fDckvw9jfaFZEnIhWazZemSK3warYHvCsMgLE52eAYqtJpa82MFmQ4hswKOJn1CS7J7D5OGHkpkgfSrA24dcK26Yl9Ofl_im6FqGJmnEaUCUxsOYtLQJ4",
            redirect_uri: "http://127.0.0.1:5500/auth.html",
            grant_type: "'authorization_code",
        }),
        json: true

        
    };

    const request = await fetch("https://accounts.spotify.com/api/token", options);
    console.log(request.status);
    alert(request.status);
};


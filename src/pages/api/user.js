const axios = require('axios');

export default async function handler(req, res) {
    console.log(req.headers)
    const response = await fetch(
        `https://mono.west-wing.ws/api/dashboard/getData/filter/all`,
        {
            headers: {
                cookie: 'm=; country=DE; locale=en_GB; PHPSESSID=hd43h6ion8rmcn0r9u7n4f81ac; ww_uid=387; __client_id=387; 5695f09fbf927ac13fd06d9cb332935a=4341d3ac230f4a969df553b5a537f4f0bb084c28a%3A4%3A%7Bi%3A0%3Bs%3A3%3A%22387%22%3Bi%3A1%3Bs%3A7%3A%22mono_pl%22%3Bi%3A2%3Bi%3A10800%3Bi%3A3%3Ba%3A6%3A%7Bs%3A8%3A%22location%22%3Bs%3A4%3A%22ELC1%22%3Bs%3A7%3A%22country%22%3Bs%3A2%3A%22DE%22%3Bs%3A5%3A%22group%22%3Bs%3A8%3A%22monouser%22%3Bs%3A5%3A%22roles%22%3Bs%3A64%3A%22app-user%2Cpocheck-user%2Cepod-user-private-label%2Ctransshipment-user%22%3Bs%3A9%3A%22isTstUser%22%3Bs%3A1%3A%221%22%3Bs%3A6%3A%22locale%22%3Bs%3A5%3A%22en_GB%22%3B%7D%7D',
                'Authorization': 'Bearer 7uzRmIokrhW8tJO1YwaeP3KYiTYcJ083UKV/PpQd8Lk=', // req.headers.authorization //"Bearer 7uzRmIokrhW8tJO1YwaeP3KYiTYcJ083UKV/PpQd8Lk="
            },
        }
    )
    const data = await response.json()

    if (!data) {
        res.status(404).json({error: 404, message: 'not found'});
    }

    res.status(200).json(data);
    // axios.get('https://mono.west-wing.ws/api/dashboard/getData/filter/all', {
    //     headers: {
    //         'Authorization': "Bearer 7uzRmIokrhW8tJO1YwaeP3KYiTYcJ083UKV/PpQd8Lk=" //req.headers.authorization 
    //     } 
    // })
    // .then(function (response) {
    //     // handle success
    //     res.status(200).json({ data: response.data});
    // })
    // .catch(function (error) {
    //     // handle error
    //     console.log('error');
    //     res.status(404)
    // })
    // .then(function () {
    //     // always executed
    // });

}

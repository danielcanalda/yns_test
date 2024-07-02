const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const response = [
    {
        "owner": {
            "id": "uQrnqsqyh8FjSXAPc7oA",
            "email": "emilie.lambert@example.com",
            "title": "mrs",
            "picture": "https://randomuser.me/api/portraits/women/93.jpg",
            "firstName": "Emilie",
            "lastName": "Lambert"
        },
        "id": "UWdcOFTc7DfzOhI6LpI4",
        "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
        "publishDate": "2020-05-24T14:53:17.598Z",
        "text": "Contentísima con mi aumento de labios",
        "link": "https://www.multiestetica.com/aumento-labios/experiencias/contentisima-doctor-bentue-172717",
        "comments": 43
    }, {
        "owner": {
            "id": "t3k3dx7zDMAKjCEeXl9Q",
            "title": "mr",
            "picture": "https://randomuser.me/api/portraits/men/54.jpg",
            "firstName": "Marius",
            "email": "marius.larsen@example.com",
            "lastName": "Larsen"
        },
        "id": "VGyIwGVWeeurHv5bSZgx",
        "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
        "publishDate": "2020-05-24T07:44:17.738Z",
        "text": "Me encantan mis labios!! Gracias al equipo de Dorsia 💖",
        "link": "https://www.multiestetica.com/aumento-labios/experiencias/me-encantan-mis-labios-gracias-al-equipo-de-dorsia-173968",
        "comments": 31
    }, {
        "owner": {
            "id": "a9IzuhtufH0GNRAyHCoT",
            "firstName": "Karoline",
            "lastName": "Sviggum",
            "picture": "https://randomuser.me/api/portraits/women/61.jpg",
            "title": "mrs",
            "email": "karoline.sviggum@example.com"
        },
        "id": "RjkVphYP4p3N5SC5JOXh",
        "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
        "publishDate": "2020-05-23T22:56:11.424Z",
        "text": "Mi aumento de labios con ácido hialurónico",
        "link": "https://www.multiestetica.com/aumento-labios/experiencias/increible-mas-confianza-mucha-mas-ganas-de-tomarme-fotos-de-sentirme-comoda-un-cambio-160328",
        "comments": 7
    }, {
        "owner": {
            "id": "1pRsh5nXDIH3pjEOZ17A",
            "lastName": "Vicente",
            "title": "miss",
            "firstName": "Margarita",
            "email": "margarita.vicente@example.com",
            "picture": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        "id": "5zNq7oqJ0RWtPcY5ZiWR",
        "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
        "publishDate": "2020-05-23T18:52:32.613Z",
        "text": "Increíble, más confianza, mucha más ganas de tomarme fotos de sentirme cómoda, un cambio",
        "link": "https://www.multiestetica.com/aumento-labios/experiencias/mi-aumento-de-labios-con-acido-hialuronico-149335/",
        "comments": 28
    }, {
        "owner": {
            "id": "GorKRYsi8zHkLq9siyfU",
            "title": "miss",
            "picture": "https://randomuser.me/api/portraits/women/13.jpg",
            "firstName": "Kayla",
            "lastName": "Bredesen",
            "email": "kayla.bredesen@example.com"
        },
        "id": "f8FuXRIKHhPN3kgcMIEf",
        "image": "https://img.dummyapi.io/photo-1498534928137-473daa67f5c4.jpg",
        "publishDate": "2020-05-23T14:42:22.808Z",
        "text": "Mi experiencia de aumento de labios con ácido hialurónico",
        "link": "https://www.multiestetica.com/aumento-labios/experiencias/mi-experiencia-de-aumento-de-labios-con-acido-hialuronico-147505",
        "comments": 18
    }
];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

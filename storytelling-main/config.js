from dotenv import load_dotenv
import os
load_dotenv()

token = os.getenv('token')

var config = {
    style: 'mapbox://styles/tgnewikow/cmdnimw9n001b01sg61y7a5hy',
    accessToken: token,
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'How are California high schools named?',
    subtitle: 'Some common themes arise for schools in the Golden State.',
    byline: 'By Tara Gnewikow',
    footer: 'Source: California Department of Education <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'all-schools',
            alignment: 'left',
            hidden: false,
            title: 'There are 881 public high schools in California, excluding charter and magnet schools.',
            image: './assets/pencil-art-resized.png',
            //description: '',
            location: {
                center: [-123.45156, 37.95943],
                zoom: 4.78,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'All schools',
                     opacity: 1,
                     duration: 500
                }
            ],
            onChapterExit: [
                {
                     layer: 'All schools',
                     opacity: 0,
                     duration: 500
                }
            ]
        },
        {
            id: 'place-names',
            alignment: 'left',
            hidden: false,
            title: 'About three in five schools are named after a place, most commonly the city the school is in.',
            image: './assets/berkeley-sign.png',
            //description: '',
            location: {
                center: [-123.45156, 37.95943],
                zoom: 4.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'Place names',
                     opacity: 1,
                     duration: 500
                }
            ],
            onChapterExit: [
                {
                     layer: 'Place names',
                     opacity: 0,
                     duration: 500
                }
            ]
        },
        {
            id: 'person-names',
            alignment: 'left',
            hidden: false,
            title: 'Only about 17 percent of schools are named after a person.',
            image: './assets/jfk-drawing.png',
            //description: '',
            location: {
                center: [-123.45156, 37.95943],
                zoom: 4.78,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'Person names',
                     opacity: 1,
                     duration: 500
                }
            ],
            onChapterExit: [
                {
                     layer: 'Person names',
                     opacity: 0,
                     duration: 500
                }
            ]
        },
        {
            id: 'other-names',
            alignment: 'left',
            hidden: false,
            title: 'And about one in four schools are named after something else.',
            //description: '',
            location: {
                center: [-123.45156, 37.95943],
                zoom: 4.78,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'Other names',
                     opacity: 1,
                     duration: 500
                }
            ],
            onChapterExit: [
                {
                     layer: 'Other names',
                     opacity: 0,
                     duration: 500
                }
            ]
        },
        {
            id: 'spanish-names',
            alignment: 'left',
            hidden: false,
            title: 'Almost one-fourth of schools have Spanish names.',
            //description: '',
            location: {
                center: [-123.45156, 37.95943],
                zoom: 4.78,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'Spanish names',
                     opacity: 1,
                     duration: 500
                }
            ],
            onChapterExit: [
                {
                     layer: 'Spanish names',
                     opacity: 0,
                     duration: 500
                }
            ]
        }
    ]
};

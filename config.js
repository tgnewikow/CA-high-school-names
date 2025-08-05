var config = {
    style: 'mapbox://styles/tgnewikow/cmdnimw9n001b01sg61y7a5hy',
    accessToken: 'pk.eyJ1IjoidGduZXdpa293IiwiYSI6ImNseXl1NHVydDA4Ym8yam10MXBobTZsYmkifQ.bYbynMzR-x5d1NHr3tOICw',
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
    footer: 'Source: California Department of Education <br> You can find the <a href="https://github.com/tgnewikow/CA-high-school-names" target="_blank">GitHub repository for this analysis here</a>.',
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
            title: 'About three in five schools are named after a <span style="color:#70b44b;">place</span>, most commonly the city the school is in.',
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
            title: 'Only about 17 percent of schools are named after a <span style="color:#8f4bb4;">person</span>.',
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
            title: 'And about one in four schools are named after <span style="color:#4ba4b4;">something else</span>.',
            image: './assets/tree-art.png',
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
            title: 'Almost one-fourth of schools have <span style="color:#b45b4b;">Spanish</span> names.',
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
        },
        {
            id: 'spanish-names-la',
            alignment: 'left',
            hidden: false,
            title: 'Los Angeles County has the most schools with Spanish names.',
            //description: '',
            location: {
                center: [-118.51414, 34.18457],
                zoom: 7.80,
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
                     opacity: 1,
                     duration: 500
                }
            ]
        }
    ]
};

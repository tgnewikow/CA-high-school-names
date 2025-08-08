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
    byline: 'By <a href="https://github.com/tgnewikow" target="_blank">Tara Gnewikow</a>',
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
                },
                {
                     layer: 'Person names',
                     opacity: 0,
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
            onChapterExit: []
        },
        {
            id: 'person-names-sf',
            alignment: 'left',
            hidden: false,
            title: 'In San Fransisco County, 90 percent of schools are named after a <span style="color:#8f4bb4;">person</span>. <br> <br>Among the people schools were named after, politician was the most common occupation.',
            image: './assets/person-chart-drawn.png',
            location: {
                center: [-122.47754, 37.76058],
                zoom: 11.21,
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
            onChapterExit: []
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
                     layer: 'Person names',
                     opacity: 0,
                     duration: 500
                },
                {
                     layer: 'Spanish names',
                     opacity: 0,
                     duration: 500
                },
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
            image: './assets/bella-vista-art.png',
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
            onChapterExit: []
        },
        {
            id: 'spanish-names-la',
            alignment: 'left',
            hidden: false,
            title: 'San Luis Obispo had the highest percentage of schools with <span style="color:#b45b4b;">Spanish </span> names at 50 percent.',
            //description: '',
            location: {
                center: [-120.81462, 35.32419],
                zoom: 8.17,
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
            onChapterExit: []
        }
    ]
};

let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.753220, 37.622513],
        zoom: 15,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark([55.749717, 37.604118], {
        hintContent: '',
    }, {
        draggable: false,
        iconLayout: 'default#imageWithContent',
        iconImageHref: "./img/pointmap.svg",
        iconImageSize: [58, 73],
        iconImageOffset: [-16, -16]
    },
    );
    myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init);
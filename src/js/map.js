// import jquery from 'jquery';

function init_mapcatalog() {
    var myPlacemarks = get_placemarks();
    myMap = new ymaps.Map("map", {
        center: [56.260364, 50.019876],
        zoom: 5
    });
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('trafficControl');
  
    myPlacemarks.forEach(function(Placemark) {
        var myPlacemark = new ymaps.Placemark([
            Placemark.latitude, Placemark.longitude
        ], {
            data: [
                { weight: Placemark.count, color: Placemark.color }
            ],
            hintContent: Placemark.name + '<br>'+ Placemark.hint
        }, {
            iconLayout: 'default#pieChart',
            iconPieChartRadius: 20,
            iconPieChartCoreRadius: 15
        });
        myPlacemark.events.add('click', function () {
            show_group(Placemark.id);
        });
        myMap.geoObjects.add(myPlacemark);
    });
  
    // $(document).on('click', '.mapcatalog-modal.warehousegroup', function (e) {
    //     if ($(document).find(e.target).length && !$(e.target).parents('.mapcatalog-modal-content').length) {
    //         hide_group($($(e.target).parents('.mapcatalog-modal')[0] || $(e.target)[0]));
    //     }
    // });
  
    // $('.close').on('click', function (e) {
    //     hide_group($(e.target).parents('.mapcatalog-modal'));
    // });
  }
  
  function get_placemarks() {
    var myPlacemarks = [
        {
          "count": 1,
          "name": "Алтайская (РЖД)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "83.926246",
          "latitude": 53.404339,
          "id": 181
        },
        {
          "count": 5,
          "name": "Арзамас (ВРК-3)",
          "hint": "Рама боковая: 5",
          "color": "#ffab00",
          "longitude": "43.866146",
          "latitude": 55.42283,
          "id": 156
        },
        {
          "count": 128,
          "name": "Артём-Приморский",
          "hint": "Балка надрессорная: 61 <br>Рама боковая: 67",
          "color": "#89ff00",
          "longitude": "132.192412",
          "latitude": 43.380496,
          "id": 261
        },
        {
          "count": 56,
          "name": "Арчеда (Фролово)",
          "hint": "АП Фрикционный: 41 <br>АП Эластомерный: 15",
          "color": "#ffff00",
          "longitude": "43.62997",
          "latitude": 49.766594,
          "id": 259
        },
        {
          "count": 1,
          "name": "Аскиз (ВРК-2)",
          "hint": "Рама боковая: 1",
          "color": "#ffa500",
          "longitude": "90.420446",
          "latitude": 53.13192,
          "id": 81
        },
        {
          "count": 1,
          "name": "Бензин (ВРК-2)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "56.090734",
          "latitude": 54.837545,
          "id": 83
        },
        {
          "count": 1,
          "name": "Бирюлево (РЖД)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "37.717797",
          "latitude": 55.660805,
          "id": 185
        },
        {
          "count": 7,
          "name": "Боготол (РЖД)",
          "hint": "Колесная пара б/у: 7",
          "color": "#ffae00",
          "longitude": "89.525499",
          "latitude": 56.210352,
          "id": 105
        },
        {
          "count": 2,
          "name": "Бологое (ВРК-3)",
          "hint": "Колесная пара б/у: 2",
          "color": "#ffa600",
          "longitude": "34.086385",
          "latitude": 57.879248,
          "id": 151
        },
        {
          "count": 5,
          "name": "Борзя (РЖД)",
          "hint": "Колесная пара б/у: 4 <br>Рама боковая: 1",
          "color": "#ffab00",
          "longitude": "116.519209",
          "latitude": 50.390856,
          "id": 186
        },
        {
          "count": 2,
          "name": "Буй (РЖД)",
          "hint": "Балка надрессорная: 2",
          "color": "#ffa600",
          "longitude": "41.563853",
          "latitude": 58.456742,
          "id": 223
        },
        {
          "count": 3,
          "name": "Вихоревка (ВРК-3)",
          "hint": "Рама боковая: 3",
          "color": "#ffa800",
          "longitude": "101.170396",
          "latitude": 56.120718,
          "id": 148
        },
        {
          "count": 104,
          "name": "ВКМ Старый Оскол",
          "hint": "Балка надрессорная: 61 <br>Рама боковая: 43",
          "color": "#b0ff00",
          "longitude": "37.909337",
          "latitude": 51.230606,
          "id": 267
        },
        {
          "count": 30,
          "name": "Волховстрой (ВРК-2)",
          "hint": "Балка надрессорная: 22 <br>Рама боковая: 8",
          "color": "#ffd400",
          "longitude": "32.301073",
          "latitude": 59.921777,
          "id": 187
        },
        {
          "count": 12,
          "name": "ВРП Магдагачи ",
          "hint": "Балка надрессорная: 1 <br>Колесная пара б/у: 8 <br>Рама боковая: 3",
          "color": "#ffb700",
          "longitude": "125.807371",
          "latitude": 53.451135,
          "id": 263
        },
        {
          "count": 1,
          "name": "ВРП «Новотранс» (ст. Белая)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "None",
          "latitude": null,
          "id": 274
        },
        {
          "count": 211,
          "name": "ВРП Новотранс (Ч)",
          "hint": "Балка надрессорная: 46 <br>Рама боковая: 165",
          "color": "#00ff00",
          "longitude": "103.478051",
          "latitude": 52.866131,
          "id": 19
        },
        {
          "count": 3,
          "name": "ВРП Черемхово (ТМХ)",
          "hint": "Рама боковая: 3",
          "color": "#ffa800",
          "longitude": "103.081131",
          "latitude": 53.15373,
          "id": 264
        },
        {
          "count": 1,
          "name": "ВЧД-19 Костанай",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "None",
          "latitude": null,
          "id": 277
        },
        {
          "count": 1,
          "name": "ВЧД-1 Атырау",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "None",
          "latitude": null,
          "id": 276
        },
        {
          "count": 1,
          "name": "ВЧД-30 Арысь",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "None",
          "latitude": null,
          "id": 278
        },
        {
          "count": 4,
          "name": "ВЧД-34 Курорт-Боровое",
          "hint": "Колесная пара б/у: 4",
          "color": "#ffa900",
          "longitude": "None",
          "latitude": null,
          "id": 279
        },
        {
          "count": 1,
          "name": "ВЧД-8 Астана",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "None",
          "latitude": null,
          "id": 280
        },
        {
          "count": 1,
          "name": "ВЧД Защита",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "None",
          "latitude": null,
          "id": 275
        },
        {
          "count": 1,
          "name": "Вязьма (ВРК-2)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "34.316309",
          "latitude": 55.193324,
          "id": 205
        },
        {
          "count": 1,
          "name": "Гороблагодатская (ВРК-3)",
          "hint": "Балка надрессорная: 1",
          "color": "#ffa500",
          "longitude": "59.70799",
          "latitude": 58.268099,
          "id": 145
        },
        {
          "count": 1,
          "name": "Дальвагоноремонт (Павелец) (Ч)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "39.216897",
          "latitude": 53.840228,
          "id": 20
        },
        {
          "count": 1,
          "name": "Депо-ЕвроХим",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "None",
          "latitude": null,
          "id": 281
        },
        {
          "count": 3,
          "name": "Зелецино (ВРК-2)",
          "hint": "Рама боковая: 3",
          "color": "#ffa800",
          "longitude": "44.206751",
          "latitude": 56.15067,
          "id": 207
        },
        {
          "count": 21,
          "name": "Зима (ВРК-3)",
          "hint": "Балка надрессорная: 4 <br>Рама боковая: 17",
          "color": "#ffc500",
          "longitude": "102.051051",
          "latitude": 53.921266,
          "id": 218
        },
        {
          "count": 12,
          "name": "Иланская (ВРК-1)",
          "hint": "Колесная пара б/у: 8 <br>Рама боковая: 4",
          "color": "#ffb700",
          "longitude": "96.059503",
          "latitude": 56.243465,
          "id": 74
        },
        {
          "count": 4,
          "name": "Иркутск-Сортировочный (ВРК-2)",
          "hint": "Рама боковая: 4",
          "color": "#ffa900",
          "longitude": "104.281047",
          "latitude": 52.287054,
          "id": 192
        },
        {
          "count": 7,
          "name": "Иркутск – Сортировочный (РЖД)",
          "hint": "Рама боковая: 7",
          "color": "#ffae00",
          "longitude": "104.281047",
          "latitude": 52.287054,
          "id": 193
        },
        {
          "count": 1,
          "name": "Исакогорка (РЖД)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "40.605899",
          "latitude": 64.431138,
          "id": 194
        },
        {
          "count": 4,
          "name": "Калининград (РЖД)",
          "hint": "Колесная пара б/у: 4",
          "color": "#ffa900",
          "longitude": "20.488856",
          "latitude": 54.691761,
          "id": 224
        },
        {
          "count": 1,
          "name": "КВРЗ Новотранс",
          "hint": "Балка надрессорная: 1",
          "color": "#ffa500",
          "longitude": "38.262134",
          "latitude": 54.814378,
          "id": 268
        },
        {
          "count": 28,
          "name": "КВРП Новотранс (Ч)",
          "hint": "Балка надрессорная: 28",
          "color": "#ffd100",
          "longitude": "103.478051",
          "latitude": 52.866131,
          "id": 23
        },
        {
          "count": 1,
          "name": "Кемь (ВРК-3)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "34.57974",
          "latitude": 64.959804,
          "id": 138
        },
        {
          "count": 98,
          "name": "Колпино",
          "hint": "Балка надрессорная: 41 <br>Рама боковая: 57",
          "color": "#baff00",
          "longitude": "30.614873",
          "latitude": 59.749668,
          "id": 258
        },
        {
          "count": 36,
          "name": "Комсомольск-на-Амуре (ВРК-2)",
          "hint": "Балка надрессорная: 10 <br>Рама боковая: 26",
          "color": "#ffde00",
          "longitude": "136.988877",
          "latitude": 50.555417,
          "id": 136
        },
        {
          "count": 1,
          "name": "Кочетовка (ВРК-2)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "40.486962",
          "latitude": 52.960863,
          "id": 159
        },
        {
          "count": 1,
          "name": "Краснодар (РЖД)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "38.995229",
          "latitude": 45.020067,
          "id": 52
        },
        {
          "count": 1,
          "name": "Красноярск-Восточный (РЖД)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "93.11364",
          "latitude": 55.997094,
          "id": 158
        },
        {
          "count": 13,
          "name": "Люблино (ВРК-1)",
          "hint": "Колесная пара б/у: 13",
          "color": "#ffb800",
          "longitude": "37.617635",
          "latitude": 55.755814,
          "id": 46
        },
        {
          "count": 2,
          "name": "Лянгасово (ВРК-1)",
          "hint": "Рама боковая: 2",
          "color": "#ffa600",
          "longitude": "49.453613",
          "latitude": 58.519746,
          "id": 43
        },
        {
          "count": 1,
          "name": "Могоча (РЖД)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "119.766816",
          "latitude": 53.745573,
          "id": 129
        },
        {
          "count": 25,
          "name": "Москва",
          "hint": "АП Эластомерный: 25",
          "color": "#ffcc00",
          "longitude": "37.715911",
          "latitude": 55.70284,
          "id": 260
        },
        {
          "count": 15,
          "name": "Муром (ВРК-3)",
          "hint": "Рама боковая: 15",
          "color": "#ffbc00",
          "longitude": "42.032558",
          "latitude": 55.56867,
          "id": 176
        },
        {
          "count": 19,
          "name": "Находка",
          "hint": "Балка надрессорная: 19",
          "color": "#ffc200",
          "longitude": "132.961412",
          "latitude": 42.850004,
          "id": 265
        },
        {
          "count": 6,
          "name": "Нижнеудинск (ВРК-1)",
          "hint": "Колесная пара б/у: 4 <br>Рама боковая: 2",
          "color": "#ffad00",
          "longitude": "99.0109",
          "latitude": 54.907351,
          "id": 73
        },
        {
          "count": 25,
          "name": "Новосибирск-Западный",
          "hint": "Балка надрессорная: 25",
          "color": "#ffcc00",
          "longitude": "82.854602",
          "latitude": 54.995496,
          "id": 266
        },
        {
          "count": 15,
          "name": "Орехово-Зуево (РЖД)",
          "hint": "Колесная пара б/у: 15",
          "color": "#ffbc00",
          "longitude": "38.976382",
          "latitude": 55.786384,
          "id": 29
        },
        {
          "count": 44,
          "name": "Партизанск (ВРК-2)",
          "hint": "Балка надрессорная: 17 <br>Рама боковая: 27",
          "color": "#ffeb00",
          "longitude": "133.142821",
          "latitude": 43.145229,
          "id": 174
        },
        {
          "count": 47,
          "name": "Пермь (частный склад)",
          "hint": "Балка надрессорная: 13 <br>Колесная пара б/у: 19 <br>Рама боковая: 15",
          "color": "#fff000",
          "longitude": "56.133342",
          "latitude": 58.034954,
          "id": 273
        },
        {
          "count": 1,
          "name": "Петрозаводск (РЖД)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "34.324052",
          "latitude": 61.79701,
          "id": 94
        },
        {
          "count": 1,
          "name": "Псков (ВРК-1)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "28.38688",
          "latitude": 57.808209,
          "id": 49
        },
        {
          "count": 1,
          "name": "Рубцовск (ВРК-3)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "81.196473",
          "latitude": 51.512133,
          "id": 168
        },
        {
          "count": 20,
          "name": "Ружино (ВРК-1)",
          "hint": "Балка надрессорная: 4 <br>Рама боковая: 16",
          "color": "#ffc400",
          "longitude": "133.439974",
          "latitude": 45.498851,
          "id": 67
        },
        {
          "count": 1,
          "name": "Рузаевка (ВРК-3)",
          "hint": "Рама боковая: 1",
          "color": "#ffa500",
          "longitude": "44.932859",
          "latitude": 54.054119,
          "id": 167
        },
        {
          "count": 63,
          "name": "Санкт-Петербург-Сортировочный-Витебский (ВРК-2)",
          "hint": "Балка надрессорная: 24 <br>Рама боковая: 39",
          "color": "#f4ff00",
          "longitude": "30.348989",
          "latitude": 59.89074,
          "id": 100
        },
        {
          "count": 1,
          "name": "Северобайкальск (РЖД)",
          "hint": "Рама боковая: 1",
          "color": "#ffa500",
          "longitude": "109.345488",
          "latitude": 55.636148,
          "id": 228
        },
        {
          "count": 2,
          "name": "Сургут (РЖД)",
          "hint": "Колесная пара б/у: 2",
          "color": "#ffa600",
          "longitude": "73.32105",
          "latitude": 61.289137,
          "id": 118
        },
        {
          "count": 3,
          "name": "Тайшет  (ВРК-1)",
          "hint": "Колесная пара б/у: 3",
          "color": "#ffa800",
          "longitude": "98.018963",
          "latitude": 55.926449,
          "id": 72
        },
        {
          "count": 2,
          "name": "Тайшет (РЖД)",
          "hint": "Колесная пара б/у: 1 <br>Рама боковая: 1",
          "color": "#ffa600",
          "longitude": "98.028089",
          "latitude": 55.930413,
          "id": 86
        },
        {
          "count": 1,
          "name": "Тверь (ВЧД)",
          "hint": "Балка надрессорная: 1",
          "color": "#ffa500",
          "longitude": "35.883276",
          "latitude": 56.838184,
          "id": 247
        },
        {
          "count": 8,
          "name": "Ужур (ВРК-3)",
          "hint": "Балка надрессорная: 5 <br>Колесная пара б/у: 2 <br>Рама боковая: 1",
          "color": "#ffb000",
          "longitude": "89.841302",
          "latitude": 55.301997,
          "id": 199
        },
        {
          "count": 13,
          "name": "Улан-Удэ (ВРК-1)",
          "hint": "Балка надрессорная: 1 <br>Колесная пара б/у: 10 <br>Рама боковая: 2",
          "color": "#ffb800",
          "longitude": "107.582445",
          "latitude": 51.839556,
          "id": 70
        },
        {
          "count": 48,
          "name": "Уссурийск (ВРК-1)",
          "hint": "Балка надрессорная: 11 <br>Колесная пара б/у: 16 <br>Рама боковая: 21",
          "color": "#fff200",
          "longitude": "131.980068",
          "latitude": 43.821876,
          "id": 66
        },
        {
          "count": 67,
          "name": "Хабаровск2",
          "hint": "Балка надрессорная: 42 <br>Рама боковая: 25",
          "color": "#edff00",
          "longitude": "135.127286",
          "latitude": 48.426018,
          "id": 271
        },
        {
          "count": 9,
          "name": "Хабаровск (ВРК-1)",
          "hint": "Балка надрессорная: 3 <br>Колесная пара б/у: 2 <br>Рама боковая: 4",
          "color": "#ffb200",
          "longitude": "135.128053",
          "latitude": 48.429026,
          "id": 68
        },
        {
          "count": 10,
          "name": "Чемской",
          "hint": "Балка надрессорная: 10",
          "color": "#ffb300",
          "longitude": "82.962013",
          "latitude": 54.952069,
          "id": 272
        },
        {
          "count": 8,
          "name": "Череповец (ВРК-2)",
          "hint": "Балка надрессорная: 4 <br>Колесная пара б/у: 1 <br>Рама боковая: 3",
          "color": "#ffb000",
          "longitude": "37.919927",
          "latitude": 59.14433,
          "id": 200
        },
        {
          "count": 1,
          "name": "Юдино (РЖД)",
          "hint": "Колесная пара б/у: 1",
          "color": "#ffa500",
          "longitude": "48.8970417",
          "latitude": 55.8092505,
          "id": 112
        },
        {
          "count": 8,
          "name": "Ярославль (ВРК-2)",
          "hint": "Балка надрессорная: 8",
          "color": "#ffb000",
          "longitude": "39.868786",
          "latitude": 57.597131,
          "id": 104
        }
      ];
      return myPlacemarks;
  }
  
  function show_group(id) {
    var params = get_params();
    params.view_mode = 'list';
    params.page = 1;
    params.warehouses = id;
  
    var group = $("#group_" + id);
  
    group
        .find('.modal-content-body')
        .html('<div class="row catalog-preloader"><img src="/static/images/preloader.gif"></div>');
  
    $.ajax({
        url: window.location.pathname,
        type: 'GET',
        data: params,
        traditional: true,
        success: function (data) {
            var group = $("#group_" + id);
            set_default_sorting_param(group);
            group.find('.modal-content-body').html(data);
            group.find('.product--item-list').removeClass('hide')
        }
    });
  
    setTimeout(function () {
        $('#page-container').css({zIndex: '1031'});
        $("#group_" + id).show();
    }, 100);
  }
  
  ymaps.ready(function(){
    init_mapcatalog();
  }) 
  
let dataOrderList = [];
    dataOrderList[0] = {
        title: "London",
        subtitle: "180-182 Regent Street, London, W1B 5BT",   
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.",
        address: "180-182 Regent Street, London, W1B 5BT",
        phone: "0123-456-789",
        website: "www.yourwebsite.com",
        email: "support@yourwebsite.com",
        workingHours: "Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm"
    }; 
    
    dataOrderList[1] = {
        title: "New York",
        subtitle: "109 Columbus Circle, New York, NY 10023",   
        text: "Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non",
        address: "109 Columbus Circle, New York, NY 10023",
        phone: "0456-315-200",
        website: "www.oursite.com",
        email: "support@oursite.com",
        workingHours: "Monday-Friday: 8am to 5pm  Saturday: 9am to 5pm  Sunday: 10am to 3pm"
    }; 
    
    
    dataOrderList[2] = {
        title: "Paris",
        subtitle: "2133 Rue Saint-Honoré, 75001 Paris",   
        text: "Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncus eleifend. Curabitur laoreet nisl eget rutruml auctor. Vestibulum ante ipsum primis in faucibus orcip luctus et ultrices posuere cubilia curae cras ligula.",
        address: "2133 Rue Saint-Honoré, 75001 Paris",
        phone: "0146-453-999",
        website: "www.pariswebsite.com",
        email: "support@pariswebsite.com",
        workingHours: "Monday-Friday: 10am to 7pm  Saturday: 12am to 7pm  Sunday: 12am to 4pm"
    }; 
    
function getMapDescHtml(mapDescObject){
    let descHtml="";
    
   descHtml+="<h2 class='map__title title title_pos'>"+mapDescObject.title+"</h2>";
   descHtml+="<h3 class='map__subtitle subtitle subtitle_pos'>"+mapDescObject.subtitle+"</h3>";
   descHtml+="<p class='map__text text text_pos'>"+mapDescObject.text+"</p>";
   descHtml+="<div>";
   descHtml+="<ul class='map__contact'>";
   descHtml+="<li>";
   descHtml+="<p class='text'><i class='fa fa-map-marker fa-fw'></i>&nbsp;"+mapDescObject.address+"</p>";
   descHtml+="</li>";
   descHtml+="<li>";
   descHtml+="<p class='text'><i class='fa fa-phone fa-fw'></i>&nbsp;"+mapDescObject.phone+"</p>";
   descHtml+="</li>";
   descHtml+="<li>";
   descHtml+="<p class='text'><i class='fa fa-code-fork fa-fw'></i>&nbsp;"+mapDescObject.website+"</p>";
   descHtml+="</li>";
   descHtml+="<li>";
   descHtml+="<p class='text'><i class='fa fa-envelope-o fa-fw'></i>&nbsp;"+mapDescObject.email+"</p>";
   descHtml+="</li>";
   descHtml+="<li>";
   descHtml+="<p class='text'><i class='fa fa-clock-o fa-fw'></i>&nbsp;"+mapDescObject.workingHours+"</p>";
   descHtml+="</li>";
   descHtml+="</ul>";
   descHtml+="</div>";
   descHtml+="<div class='map__socials'>";
   descHtml+="<a href=''><i class='fa fa-facebook fa-fw'></i></a>";
   descHtml+="<a href=''><i class='fa fa-twitter fa-fw'></i></a>";
   descHtml+="<a href=''><i class='fa fa-instagram fa-fw'></i></a>";
   descHtml+="<a href=''><i class='fa fa-pinterest fa-fw'></i></a>";
   descHtml+="</div>";
    
    return descHtml;
}




$(document).ready(function() {
    
    $(".burger-menu__burger").click(function(event) {
        $(".burger-menu__burger, .header-menu, .header-row2").toggleClass("active");
        $("body").toggleClass("lock");
    });
    
   $(".header-menu__full").click(function(event) {
        $(".header-menu__submenu, .dropdown-arrow", this).toggleClass("active");
    });
    
    
    
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [51.513074, -0.140709],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
        
        myMap.controls
                .remove('geolocationControl')
                .remove('searchControl')
                .remove('trafficControl')
                .remove('typeSelector')
                .remove('fullscreenControl')
                .remove('zoomControl')
                .remove('rulerControl');
 
        var myPlacemark1 = new ymaps.Placemark([51.513074, -0.140709], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'images/pin-2.gif',
            iconImageSize: [24, 36],
            iconImageOffset: [-12, -36]
        });
        
        var myPlacemark2 = new ymaps.Placemark([40.767955, -73.982360], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'images/pin-2.gif',
            iconImageSize: [24, 36],
            iconImageOffset: [-12, -36]
        });
        
         var myPlacemark3 = new ymaps.Placemark([48.872862, 2.315821], {}, {
            iconLayout: 'default#image',
            iconImageHref: 'images/pin-2.gif',
            iconImageSize: [24, 36],
            iconImageOffset: [-12, -36]
        });
        
        myMap.geoObjects.add(myPlacemark1);
        myMap.geoObjects.add(myPlacemark2);
        myMap.geoObjects.add(myPlacemark3);
        
    $(".city__btn1").click(function(event) {
         myMap.setCenter([51.513074, -0.140709]);
         let descHtml = getMapDescHtml(dataOrderList[0]);
         $(".map__desc").html(descHtml);
         location.hash = "#map";
   
    });
    
    $(".city__btn2").click(function(event) {
        myMap.setCenter([40.767955, -73.982360]);
        let descHtml = getMapDescHtml(dataOrderList[1]);
        $(".map__desc").html(descHtml);
        location.hash = "#map";
    });
    
    $(".city__btn3").click(function(event) {
        myMap.setCenter([48.872862, 2.315821]);
        let descHtml = getMapDescHtml(dataOrderList[2]);
        $(".map__desc").html(descHtml);
        location.hash = "#map";
    });
  
    } 
    
   
    //Слайдер
    
    
 
    $('.product__slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
//        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev">&#xf104;</button>',
        nextArrow: '<button type="button" class="slick-next">&#xf105;</button>',
    });
    
    
    /*Select number*/
    
    (function quantityProducts(){
        let $quantityArrowMinus = $(".quantity__arrow-minus");
        let $quantityArrowPlus = $(".quantity__arrow-plus");
        let $quantityNum = $(".quantity__num");
        
        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);
        
        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val()-1);
                }
        }
        
        function quantityPlus() {
            
                $quantityNum.val(+$quantityNum.val()+1);
                }
        
        
        
    })();
    
      /*Кнопка корзины*/
    
    $(".cart-btn__body").click(function(event) {
        $(".cart-box, .cart-arrow-down, .cart-arrow-up").toggleClass("active");
    });
    
});




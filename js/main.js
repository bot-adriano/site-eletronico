//$('.slider-principal').slick();  //pegamos o modelo tb daquele site de js e como é ". "antes de single teremos que atribuir uma classe etrocaremos  por slider principal que é a clasee que criamos
$('.slider-principal').slick({
    dots:true,
    infinite:true,
    speed:300,
    slideToShow:1,
    autoplay: true,
    autoplaySpeed:2000
});
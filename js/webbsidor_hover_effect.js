const backgroundElements = document.getElementsByClassName("main_content_card glass_background");
const foregroundElements = document.getElementsByClassName("main_content_card glass_foreground");
const cardImgElements = document.getElementsByClassName("main_content_card_img");

addEventListener("mouseover", (event) => {
    for (let elementNmr = 0; elementNmr < backgroundElements.length; elementNmr++) {
        if (backgroundElements[elementNmr].matches(":hover") === true || foregroundElements[elementNmr].matches(":hover") === true) {
            backgroundElements[elementNmr].classList.add("backgroundcard_hover_active");
            foregroundElements[elementNmr].classList.add("foregroundcard_hover_active");
            cardImgElements[elementNmr].classList.add("main_content_card_img_hover_active");
        } else {
            backgroundElements[elementNmr].classList.remove("backgroundcard_hover_active");
            foregroundElements[elementNmr].classList.remove("foregroundcard_hover_active"); 
            cardImgElements[elementNmr].classList.remove("main_content_card_img_hover_active");
        };
    };
});
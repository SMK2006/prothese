document.addEventListener('DOMContentLoaded', function () {
  var creatorSection = document.querySelector('.ultra-cool-creator-section');

  creatorSection.addEventListener('click', function () {
    // Toggle the 'animate-border' class on click
    creatorSection.classList.toggle('animate-border');
  });
});


$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: false,
    arrows: false,
    dots: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
}

carousel();

// Get all elements with the class "read-more"
var readMoreLinks = document.querySelectorAll(".read-more");

// Iterate through each element and add the click event listener
readMoreLinks.forEach(function (readMoreLink) {
    readMoreLink.addEventListener("click", function (event) {
        event.preventDefault();

        // Find the closest ".timeline-carousel__item-inner" relative to the clicked link
        var itemInner = readMoreLink.closest('.timeline-carousel__item-inner');

        // Find the ".additional-text" element within the current ".timeline-carousel__item-inner"
        var additionalText = itemInner.querySelector('.hidden');

        // Toggle the "hidden" class on the additional text
        additionalText.classList.toggle("hidden");

        // Change the text of the clicked link based on the visibility of the additional text
        readMoreLink.innerHTML = additionalText.classList.contains("hidden") ? "Lees verder" : "";

        // If "Lees minder" is clicked, close other open additional text when clicking a new button
        if (!additionalText.classList.contains("hidden")) {
            readMoreLinks.forEach(function (otherLink) {
                if (otherLink !== readMoreLink) {
                    var otherItemInner = otherLink.closest('.timeline-carousel__item-inner');
                    var otherAdditionalText = otherItemInner.querySelector('.hidden');
                    otherAdditionalText.classList.add("hidden");
                    otherLink.innerHTML = "Lees verder";
                }
            });
        }
    });
});





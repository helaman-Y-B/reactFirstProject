const navigatorButton = document.getElementById("openNavigator");

navigatorButton.addEventListener("click", function(event) {
    if (event.target.matches("#openNavigator")) {
        const elements = document.querySelectorAll("#openNavigator p");
        elements.forEach((el) => {
            if (el.style.display === "none") {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });

        if (elements[0].style.display === "block") {
            navigatorButton.id = "closeNavigator";
            return;
        }
    }
});
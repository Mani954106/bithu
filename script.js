 (() => {
            let remaining = 8 * 86400 + 25 * 3600 + 49 * 60 + 3;
            const endTime = Date.now() + remaining * 1000;

            function updateTimer() {
                remaining = Math.max(
                    0,
                    Math.ceil((endTime - Date.now()) / 1000)
                );

                document.getElementById("days").textContent =
                    String(Math.floor(remaining / 86400)).padStart(2, "0");

                document.getElementById("hours").textContent =
                    String(Math.floor((remaining % 86400) / 3600)).padStart(2, "0");

                document.getElementById("minutes").textContent =
                    String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");

                document.getElementById("seconds").textContent =
                    String(remaining % 60).padStart(2, "0");
            }

            updateTimer();
            setInterval(updateTimer, 250);
        })();





        // input plus minus//

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const quantity = document.getElementById("quantity");

minusBtn.addEventListener("click", function () {
    let value = Number(quantity.value);

    if (value > Number(quantity.min)) {
        quantity.value = value - 1;
    }
});

plusBtn.addEventListener("click", function () {
    quantity.value = Number(quantity.value) + 1;
});




// accordion //

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".icon");

    // Open the second item by default
    if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "−";
        header.setAttribute("aria-expanded", "true");
    } else {
        header.setAttribute("aria-expanded", "false");
    }

    header.addEventListener("click", () => {

        accordionItems.forEach((otherItem) => {
            const otherContent =
                otherItem.querySelector(".accordion-content");
            const otherIcon = otherItem.querySelector(".icon");
            const otherHeader =
                otherItem.querySelector(".accordion-header");

            if (otherItem !== item) {
                otherItem.classList.remove("active");
                otherContent.style.maxHeight = null;
                otherIcon.textContent = "+";
                otherHeader.setAttribute("aria-expanded", "false");
            }
        });

        const isOpen = item.classList.contains("active");

        if (isOpen) {
            item.classList.remove("active");
            content.style.maxHeight = null;
            icon.textContent = "+";
            header.setAttribute("aria-expanded", "false");
        } else {
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = "−";
            header.setAttribute("aria-expanded", "true");
        }
    });
});

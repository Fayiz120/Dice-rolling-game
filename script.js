document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("roll-btn");
    const dice = document.getElementById("dice");

    rollButton.addEventListener("click", function () {
        // Generate a random number between 1 and 6 (simulate a dice roll)
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        var img1 = "images/dice"+randomNumber+".png";

        // Update the dice display
        dice.textContent = randomNumber;
        document.querySelector("img").setAttribute("src",img1);

    });
});
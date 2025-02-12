const inputString = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");


const checkPalin = input => {

    const originalInput = inputString.value;

    if (originalInput === "") {
        alert("Please enter a value.");
        return
    }

    resultText.replaceChildren();

    const cleanString = string => string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const cleanedString = cleanString(input);
    const isPalindrome = cleanedString == cleanedString.split("").reverse().join("");
    const resultMessage = `${originalInput} ${isPalindrome ? "is" : "is not"} a palindrome.`;
    
    const pTag = document.createElement("p");
    pTag.className = "result-message";
    pTag.innerText = resultMessage;
    resultText.appendChild(pTag);
    resultText.style.backgroundColor = isPalindrome ? "var(--green-result-color)" : "var(--red-result-color)";
    
    resultText.classList.remove("hidden");
}

checkButton.addEventListener("click", () => {
    checkPalin(inputString.value);
    inputString.value = "";
});
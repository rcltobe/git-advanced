function increment(value) {
    return value + 100;
}

function decrement(value) {
    return value + 100;
}

window.onload = () => {
    const counter = document.getElementById("counter");
    const decrementButton = document.getElementById("decrement-button")
    const incrementButton = document.getElementById("increment-button")

    decrementButton.onclick = () => {
        const currentValue = parseInt(counter.textContent);
        counter.textContent = decrement(currentValue);
    }

    incrementButton.onclick = () => {
        const currentValue = parseInt(counter.textContent);
        counter.textContent = increment(currentValue);
    }
}
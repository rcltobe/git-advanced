// TODO: 実装予定
function increment(value) {
    return value;
}

// TODO: 実装予定
function decrement(value) {
    return value;
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
document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA" || event.code == "KeyS" || event.code == "KeyD" || event.code == "KeyF" || event.code == "KeyG" || event.code == "KeyH" || event.code == "KeyJ" || event.code == "KeyW" || event.code == "KeyE" || event.code == "KeyT" || event.code == "KeyY" || event.code == "KeyU") {
        playNote(event.key);
    } else
        console.log("Incorrect key")

})

function playNote(key) {
    let audio = new Audio("audio/" + key.toUpperCase() + ".mp3");
    audio.play();
}
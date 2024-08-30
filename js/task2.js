// повертає хвилини у форматі 01:30
function formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const modifiedHours = String(hours).padStart(2,0);
    const minutes = totalMinutes % 60;
    const modifiedMinutes = String(minutes).padStart(2, 0);
    return `${modifiedHours}:${modifiedMinutes}`;

}
console.log (formatTime(622));
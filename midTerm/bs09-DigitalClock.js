function digitalClock(sec) {
    const h = Math.floor((sec / 3600) % 24);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;

    const formatH = String(h).padStart(2,'0');
    const formatM = m < 10 ? '0' + m : m;
    const formatS = String(s).padStart(2,'0');

    return `${formatH}:${formatM}:${formatS}`;
}

console.log(digitalClock(5025)); // 5025 sec. is 01:23:45
console.log(digitalClock(61201)); // 24h format: 17:00:01
console.log(digitalClock(87000)); // 00:10:00 is 00.10 next day.

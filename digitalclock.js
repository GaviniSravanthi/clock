//Digital clock
function updateclock()
{
    const date=new Date();
    let hours=date.getHours();
    const meridiem=hours>=12?'PM':'Am';
    hours=hours%12||12;
    hours=hours.toString().padStart(2,0);
    const minitues=date.getMinutes().toString().padStart(2,0);
    const seconds=date.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${minitues}:${seconds}${meridiem}`;
    document.getElementById('clock').textContent=timestring;
}
updateclock();
setInterval(updateclock,1000);
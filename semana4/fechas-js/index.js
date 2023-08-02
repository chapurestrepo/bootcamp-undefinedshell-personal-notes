import dayjs from "dayjs";
import { relativeTime } from "dayjs/plugin/relativeTime";

await import("dayjs/locale/es-us.js")
dayjs.locale("es-us")
dayjs.extend(relativeTime)

console.log(dayjs().format("YYYY-MM-DD"))


function dateHuman(date){
    const wrappedDate = dayjs(date)
    const diffDays = Math.abs(wrappedDate.diff(Date.now(), "days"))

    const isCurrentYear = wrappedDate.year() === dayjs().year();

    if (!isCurrentYear){
        return wrappedDate.format("MMMM DD, YYYY")
    } else if(diffDays <= 30){
        return wrappedDate.fromNow();
    } else{
        return wrappedDate.format("MMMM DD")
    }
}

console.log( dateHuman(Date.now()));
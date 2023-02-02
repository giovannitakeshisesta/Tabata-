    export function secToMin(sec){
        let seconds = String(sec%60)
        let minutes = String(Math.round(sec/60))
        seconds= seconds<10? "0"+seconds : seconds
        minutes= minutes<10? "0"+minutes : minutes
        return `${minutes}:${seconds}`
    }
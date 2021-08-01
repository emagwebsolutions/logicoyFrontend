export default function DateFormats(){

    /*############################# 
    * Y-m-d Date Format
    #############################*/
    function ymd(date){
        const d = new Date(date)
        const year =  d.getFullYear()
        const month = d.getMonth()+1
        const day = d.getDate()
        const mnt = month < 10? "0"+month : month
        const dy = day < 10 ? "0"+day : day
        return `${year}-${mnt}-${dy}`
    }

    return {ymd}
}
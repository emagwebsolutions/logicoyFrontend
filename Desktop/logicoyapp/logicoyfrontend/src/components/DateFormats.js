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

    function ym(date){
        const d = new Date(date)
        const year =  d.getFullYear()
        const month = d.getMonth()+1
        const mnt = month < 10? "0"+month : month
        return `${year}-${mnt}`
    }

    function months(m){
        var month
        switch(m){
            case 1:
            month = 'Jan';
            break;
            case 2:
            month = 'Feb';
            break;
            case 3:
            month = 'Mar';
            break;
            case 4:
            month = 'Apr';
            break;
            case  5:
            month = 'May';
            break;
            case 6:
            month = 'Jun';
            break;
            case 7:
            month = 'Jul';
            break;
            case 8:
            month = 'Aug';
            break;
            case 9:
            month = 'Sep';
            break;
            case 10:
            month = 'Oct';
            break;
            case 11:
            month = 'Nov';
            break;
            case 12:
            month = 'Dec';
            break;
            default:
            break;
        }
        return month
    }

    function formatDate(dateObject) {
        var d = new Date(dateObject);
        const day = d.getDate();
        const m = d.getMonth() + 1;

        const year = d.getFullYear();
        const dy = (day < 10)? "0"+day : day;
   
        var date = dy + " " + months(m) + " " + year;
        return date;
    };

    return {ymd,formatDate,months,ym}
}
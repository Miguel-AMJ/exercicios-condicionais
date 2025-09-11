let day = 5;
let resp;

if (day <= 0 || day >= 8){
    resp = "day invalid";
} else {
    switch (day){
        case 1 :
            resp = "Sunday";
            break;
        case 2 :
            resp = "monday";
            break;
        case 3 :
                resp = "tuesday";
                break;
        case 4 :
                    resp = "wednesday";
                    break;
        case 5 :
                        resp = "thursday";
                        break;
        case 6 :
                            resp = "friday";
                            break;
        case 7 :
                                resp = "Saturday";
                                break;
    }
}
console.log(resp);
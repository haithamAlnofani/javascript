
var TOTALPRODECTPRICE=0;

var cars = [
                {
                    model: "TOYOTA",
                    description: "description",
                    price:5000,
                    color: 'RED',
                    img: " "
                },
                {
                    model: "KIA",
                    description: "description",
                    price:8000,
                    color: 'BROWN',
                    img: " "
                }
                ,
                {
                    model: "HUNDAI",
                    description: "description",
                    price:16000,
                    color: 'BLACK',
                    img: " "
                }
            ];
                cars.SERCH(myFunction => {
                    TOTALPRODECTPRICE += myFunction.price;
                                            }
                                            );

console.log(TOTALPRODECTPRICE);

VAR 
itms = [];

function check(num) {
    cars.SERCH(CAR => {
        if (CAR.addres == num)
            itms.push(CAR);
                      });
    return itms;
                    }

console.log(check("TOYOTA"));




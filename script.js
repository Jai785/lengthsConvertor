let a = document.getElementById('input-1');
let b = document.getElementById('input-2');
let c = document.getElementById('parameters-1');
let d = document.getElementById('parameters-2');


let km = document.getElementById("Kilometre");
let m = document.getElementById('Meter');
let cm = document.getElementById('Centimeter');
let mm = document.getElementById('Millimetre');
let micm = document.getElementById('Micrometres');
let nm = document.getElementById('Nanometre');
let mile = document.getElementById('Mile');
let yard = document.getElementById('Yard');
let feet = document.getElementById('Foot');
let inch = document.getElementById('Inch');
let nautm = document.getElementById('Nautical mile');

let km1 = document.getElementById("Kilometre1");
let m1 = document.getElementById('Meter1');
let cm1 = document.getElementById('Centimeter1');
let mm1 = document.getElementById('Millimetre1');
let micm1 = document.getElementById('Micrometres1');
let nm1 = document.getElementById('Nanometre1');
let mile1 = document.getElementById('Mile1');
let yard1 = document.getElementById('Yard1');
let feet1 = document.getElementById('Foot1');
let inch1 = document.getElementById('Inch1');
let nautm1 = document.getElementById('Nautical mile1');

let spn = document.getElementById('span-1')
let spn1 = document.getElementById('span-2')
let spn2 = document.getElementById('span-3');

let button = document.getElementById('btn')
let button1 = document.getElementById('btn1')








km.addEventListener('click', (e) => {
    (spn).innerHTML = km.value;

})
km1.addEventListener('click', (e) => {
    (spn1).innerHTML = km1.value;
})

m.addEventListener('click', (e) => {
    (spn).innerHTML = m.value;
})
m1.addEventListener('click', (e) => {
    (spn1).innerHTML = m1.value;
})

cm.addEventListener('click', (e) => {
    (spn).innerHTML = cm.value;
})
cm1.addEventListener('click', (e) => {
    (spn1).innerHTML = cm1.value;
})


mm.addEventListener('click', (e) => {
    (spn).innerHTML = mm.value;
})
mm1.addEventListener('click', (e) => {
    (spn1).innerHTML = mm1.value;
})

micm.addEventListener('click', (e) => {
    (spn).innerHTML = micm.value;
})
micm1.addEventListener('click', (e) => {
    (spn1).innerHTML = micm1.value;
})

nm.addEventListener('click', (e) => {
    (spn).innerHTML = nm.value;
})
nm1.addEventListener('click', (e) => {
    (spn1).innerHTML = nm1.value;
})

mile.addEventListener('click', (e) => {
    (spn).innerHTML = mile.value;
})
mile1.addEventListener('click', (e) => {
    (spn1).innerHTML = mile1.value;
})

yard.addEventListener('click', (e) => {
    (spn).innerHTML = yard.value;
})
yard1.addEventListener('click', (e) => {
    (spn1).innerHTML = yard1.value;
})

feet.addEventListener('click', (e) => {
    (spn).innerHTML = feet.value;
})
feet1.addEventListener('click', (e) => {
    (spn1).innerHTML = feet1.value;
})

inch.addEventListener('click', (e) => {
    (spn).innerHTML = inch.value;
})
inch1.addEventListener('click', (e) => {
    (spn1).innerHTML = inch1.value;
})

nautm.addEventListener('click', (e) => {
    (spn).innerHTML = nautm.value;
})
nautm1.addEventListener('click', (e) => {
    (spn1).innerHTML = nautm1.value;
})



button.addEventListener('click', (e) => {
    let text = spn.innerText;
    let text1 = spn1.innerText;
a.value = 0;
b.value = 0;
    switch (true) {
        case ("Kilometre" === text):

            spn2.innerHTML = " ";


            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let m = km;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let km = m;
                    a.value = km;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let m = km * 1000;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let km = m / 1000;
                    a.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 1000";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let cm = km * 100000;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let km = cm / 100000;
                    a.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 100000";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let mm = km * 1e+6;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let km = mm / 1e+6;
                    a.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 1e+6";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let micm = km * 1e+9;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let km = micm / 1e+9;
                    a.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 1e+9";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let nm = km * 1e+12;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let km = nm / 1e+12;
                    a.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 1e+12";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let mile = km / 1.609;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let km = mile * 1.609;
                    a.value = km;
                });
                spn2.innerHTML = "Divide the length value by 1.609";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let yard = km * 1094;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let km = yard / 1094;
                    a.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 1094";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let feet = km * 3281;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let km = feet / 3281;
                    a.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 3281";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let inch = km * 39370;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let km = inch / 39370;
                    a.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 39370";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let km = this.value;
                    let nautm = km / 1.852;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let km = nautm * 1.852;
                    a.value = km;
                });
                spn2.innerHTML = "Divide the length value by 1.852";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Meter" === text):
            spn2.innerHTML = " ";
            spn2.innerHTML = "Please select second parametre also.";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let km = m / 1000;
                    b.value = km;
                })
                b.addEventListener('input', function () {
                    let km = this.value;
                    let meter = km * 1000;
                    a.value = meter;
                });
                spn2.innerHTML = "Divide the length value by 1000";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let m1 = m;
                    b.value = m1;
                })
                b.addEventListener('input', function () {
                    let m1 = this.value;
                    let m = m1;
                    a.value = m;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let cm = m * 100;
                    b.value = cm;
                })
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let m = cm / 100;
                    a.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 100";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let mm = m * 1000;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let m = mm / 1000;
                    a.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 1000";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let micm = m * 1e+6;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let m = micm / 1e+6;
                    a.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 1e+6";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let nm = m * 1e+9;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let m = nm / 1e+9;
                    a.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 1e+9";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let mile = m / 1609;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let m = mile * 1609;
                    a.value = m;
                });
                spn2.innerHTML = "Divide the length value by 1609";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let yard = m * 1.094;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let m = yard / 1.094;
                    a.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 1.094";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let feet = m * 3.281;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let m = feet / 3.281;
                    a.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 3.281";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let inch = m * 39.37;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let m = inch / 39.37;
                    a.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 39.37";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let m = this.value;
                    let nautm = m / 1852;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let m = nautm * 1852;
                    a.value = m;
                });
                spn2.innerHTML = "Divide the length value by 1852";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Centimeter" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let km = cm / 100000;
                    b.value = km;
                })
                b.addEventListener('input', function () {
                    let km = this.value;
                    let cm = km * 100000;
                    a.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 100000";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let m = cm / 100;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let cm = m * 100;
                    a.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 100";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let cm1 = cm;
                    b.value = cm1;
                });
                b.addEventListener('input', function () {
                    let cm1 = this.value;
                    let cm = cm1;
                    a.value = cm;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let mm = cm * 10;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let cm = mm / 10;
                    a.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 10";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let micm = cm * 10000;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let cm = micm / 10000;
                    a.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 10000";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let nm = cm * 1e+7;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let cm = nm / 1e+7;
                    a.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+7";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let mile = cm / 160900;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let cm = mile * 160900;
                    a.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 160900";

            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let yard = cm / 91.44;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let cm = yard * 91.44;
                    a.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 91.44";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let feet = cm / 30.48;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let cm = feet * 30.48;
                    a.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 30.48";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let inch = cm / 2.54;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let cm = inch * 2.54;
                    a.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 2.54";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let nautm = cm / 185200;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let cm = nautm * 185200;
                    a.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 185200";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Millimetre" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let km = mm / 1e+6;
                    b.value = km;
                })
                b.addEventListener('input', function () {
                    let km = this.value;
                    let mm = km * 1e+6;
                    a.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 1e+6";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let m = mm / 1000;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let mm = m * 1000;
                    a.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 1000";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let cm = mm / 10;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let mm = cm * 10;
                    a.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 10";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let mm1 = this.value;
                    let mm = mm1;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm1 = this.value;
                    let mm = mm1;
                    a.value = mm;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let micm = mm * 1000;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let mm = micm / 1000;
                    a.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 1000";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let nm = mm * 1e+6;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let mm = nm / 1e+6;
                    a.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+6";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let mile = mm / 1.609e+6;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let mm = mile * 1.609e+6;
                    a.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 1.609e+6";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let yard = mm / 914.4;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let mm = yard * 914.4;
                    a.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 914.4";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let feet = mm / 304.8;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let mm = feet * 304.8;
                    a.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 304.8";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let inch = mm / 25.4;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let mm = inch * 25.4;
                    a.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 25.4";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let nautm = mm / 1.852e+6;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let mm = nautm * 1.852e+6;
                    a.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 1.852e+6";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Micrometres" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let m = micm / 1e+9;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let micm = m * 1e+9;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 1e+9";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let m = micm / 1e+6;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let micm = m * 1e+6;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 1e+6";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let cm = micm / 10000;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let micm = cm * 10000;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 10000";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let mm = micm / 1000;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let micm = mm * 1000;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 1000";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let micm1 = micm;
                    b.value = micm1;
                })
                b.addEventListener('input', function () {
                    let micm1 = this.value;
                    let micm = micm1;
                    a.value = micm;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let nm = micm * 1000;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let micm = nm / 1000;
                    a.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 1000";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let mile = micm / 1.609e+9;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let micm = mile * 1.609e+9;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 1.609e+9";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let yard = micm / 914400;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let micm = yard * 914400;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 914400";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let feet = micm / 304800;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let micm = feet * 304800;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 304800";

            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let inch = micm / 25400;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let micm = inch * 25400;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 25400";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let nautm = micm / 1.852e+9;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let micm = nautm * 1.852e+9;
                    a.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 1.852e+9";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Nanometre" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let m = nm / 1e+12;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let nm = m * 1e+12;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 1e+12";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let m = nm / 1e+9;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let nm = m * 1e+9;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 1e+9";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let cm = nm / 1e+7;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let nm = cm * 1e+7;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 1e+7";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let mm = nm / 1e+6;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let nm = mm * 1e+6;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 1e+6";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let micm = nm / 1000;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let nm = micm * 1000;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 1000";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let nm1 = nm;
                    b.value = nm1;
                })
                b.addEventListener('input', function () {
                    let nm1 = this.value;
                    let nm = nm1;
                    a.value = nm;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let mile = nm / 1.609e+12;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let nm = mile * 1.609e+12;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 1.609e+12";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let yard = nm / 9.144e+8;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let nm = yard * 9.144e+8;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 9.144e+8";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let feet = nm / 3.048e+8;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let nm = feet * 3.048e+8;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 3.048e+8";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let inch = nm / 2.54e+7;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let nm = inch * 2.54e+7;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 2.54e+7";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let nautm = nm / 1.852e+12;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let nm = nautm * 1.852e+12;
                    a.value = nm;
                });
                spn2.innerHTML = "Divide the length value by 1.852e+12";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Mile" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let m = Mile * 1.609;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let Mile = m / 1.609;
                    a.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 1.609";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let m = Mile * 1609;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let Mile = m / 1609;
                    a.value = Mile;
                });
                spn2.innerHTML = " Multiply the length value by 1609";

            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let cm = Mile * 160900;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let Mile = cm / 160900;
                    a.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 160900";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let mm = Mile * 1.609e+6;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let Mile = mm / 1.609e+6;
                    a.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 1.609e+6";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let micm = Mile * 1.609e+9;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let Mile = micm / 1.609e+9;
                    a.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 1.609e+9";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let nm = Mile * 1.609e+12;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let Mile = nm / 1.609e+12;
                    a.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 1.609e+12";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let mile = Mile;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let Mile = mile;
                    a.value = Mile;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let yard = Mile * 1760;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let Mile = yard / 1760;
                    a.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 1760";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let feet = Mile * 5280;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let Mile = feet / 5280;
                    a.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 5280";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let inch = Mile * 63360;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let Mile = inch / 63360;
                    a.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 63360";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let Mile = this.value;
                    let nautm = Mile / 1.151;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let Mile = nautm * 1.151;
                    a.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 1.151";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Yard" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let m = Yard / 1094;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let Yard = m * 1094;
                    a.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 1094";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let m = Yard / 1.094;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let Yard = m * 1.094;
                    a.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 1.094";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let cm = Yard * 91.44;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let Yard = cm / 91.44;
                    a.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 91.44";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let mm = Yard * 914.4;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let Yard = mm / 914.4;
                    a.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 914.4";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let micm = Yard * 914400;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let Yard = micm / 914400;
                    a.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 914400";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let nm = Yard * 9.144e+8;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let Yard = nm / 9.144e+8;
                    a.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 9.144e+8";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let mile = Yard / 1760;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let Yard = mile * 1760;
                    a.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 1760";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let yard = Yard;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let Yard = yard;
                    a.value = Yard;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let feet = Yard * 3;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let Yard = feet / 3;
                    a.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 3";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let inch = Yard * 36;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let Yard = inch / 36;
                    a.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 36";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let Yard = this.value;
                    let nautm = Yard * 2025;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let Yard = nautm / 2025;
                    a.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 2025";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Foot" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let m = Foot / 3281;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let Foot = m * 3281;
                    a.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 3281";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let m = Foot / 3.281;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let Foot = m * 3.281;
                    a.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 3.281";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let cm = Foot * 30.48;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let Foot = cm / 30.48;
                    a.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 30.48";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let mm = Foot * 304.8;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let Foot = mm / 304.8;
                    a.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 304.8";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let micm = Foot * 304800;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let Foot = micm / 304800;
                    a.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 304800";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let nm = Foot * 3.048e+8;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let Foot = nm / 3.048e+8;
                    a.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 3.048e+8";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let mile = Foot / 5280;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let Foot = mile * 5280;
                    a.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 5280";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let yard = Foot / 3;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let Foot = yard * 3;
                    a.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 3";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let feet = Foot;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let Foot = feet;
                    a.value = Foot;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let inch = Foot * 12;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let Foot = inch / 12;
                    a.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 12";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let Foot = this.value;
                    let nautm = Foot / 6076;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let Foot = nautm * 6076;
                    a.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 6076";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Inch" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let m = Inch / 39370;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let Inch = m * 39370;
                    a.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 39370";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let m = Inch / 39.37;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let Inch = m * 39.37;
                    a.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 39.37";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let cm = Inch * 2.54;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let Inch = cm / 2.54;
                    a.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 2.5";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let mm = Inch * 25.4;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let Inch = mm / 25.4;
                    a.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 25.4";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let micm = Inch * 25400;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let Inch = micm / 25400;
                    a.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 25400";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let nm = Inch * 2.54e+7;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let Inch = nm / 2.54e+7;
                    a.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 2.54e+7";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let mile = Inch / 63360;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let Inch = mile * 63360;
                    a.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 63360";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let yard = Inch / 36;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let Inch = yard * 36;
                    a.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 36";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let feet = Inch / 12;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let Inch = feet * 12;
                    a.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 12";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let inch = Inch;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let Inch = inch;
                    a.value = Inch;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let Inch = this.value;
                    let nautm = Inch / 72910;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let Inch = nautm * 72910;
                    a.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 72910";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Nautical mile" === text):
            spn2.innerHTML = " ";

            if ('Kilometre' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let m = NautM * 1.852;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let NautM = m / 1.852;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 1.852";
            }
            else if ('Meter' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let m = NautM * 1852;
                    b.value = m;
                })
                b.addEventListener('input', function () {
                    let m = this.value;
                    let NautM = m / 1852;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 1852";
            }
            else if ('Centimeter' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let cm = NautM * 185200;
                    b.value = cm;
                });
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let NautM = cm / 185200;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 185200";
            }
            else if ('Millimetre' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let mm = NautM * 1.852e+6;
                    b.value = mm;
                })
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let NautM = mm / 1.852e+6;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 1.852e+6";
            }
            else if ('Micrometres' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let micm = NautM * 1.852e+9;
                    b.value = micm;
                })
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let NautM = micm / 1.852e+9;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 1.852e+9";
            }
            else if ('Nanometre' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let nm = NautM * 1.852e+12;
                    b.value = nm;
                })
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let NautM = nm / 1.852e+12;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 1.852e+12";
            }
            else if ('Mile' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let mile = NautM * 1.151;
                    b.value = mile;
                })
                b.addEventListener('input', function () {
                    let mile = this.value;
                    let NautM = mile / 1.151;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 1.151";
            }
            else if ('Yard' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let yard = NautM * 2025;
                    b.value = yard;
                })
                b.addEventListener('input', function () {
                    let yard = this.value;
                    let NautM = yard / 2025;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 2025";
            }
            else if ('Foot' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let feet = NautM * 6076;
                    b.value = feet;
                })
                b.addEventListener('input', function () {
                    let feet = this.value;
                    let NautM = feet / 6076;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 6076";
            }
            else if ('Inch' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let inch = NautM * 72910;
                    b.value = inch;
                })
                b.addEventListener('input', function () {
                    let inch = this.value;
                    let NautM = inch / 72910;
                    a.value = NautM;
                });
                spn2.innerHTML = "Multiply the length value by 72910";
            }
            else if ('Nautical mile' === text1) {
                a.addEventListener('input', function () {
                    let NautM = this.value;
                    let nautm = NautM;
                    b.value = nautm;
                })
                b.addEventListener('input', function () {
                    let nautm = this.value;
                    let NautM = nautm;
                    a.value = NautM;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        default:
            break;
    }
});


button1.addEventListener('click', (e) => {
    let text = spn.innerText;
    let text1 = spn1.innerText;
b.value = 0;
a.value = 0;

    switch (true) {
        case ("Kilometre" === text1):

            spn2.innerHTML = " ";


            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let m = km;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let km = m;
                    b.value = km;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let m = km * 1000;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let km = m / 1000;
                    b.value = km;
                });
                spn2.innerHTML = "Divide the length value by 1000";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let cm = km * 100000;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let km = cm / 100000;
                    b.value = km;
                });
                spn2.innerHTML = "Divide the length value by 100000";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let mm = km * 1e+6;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let km = mm / 1e+6;
                    b.value = km;
                });
                spn2.innerHTML = "Divide the length value by 1e+6";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let micm = km * 1e+9;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let km = micm / 1e+9;
                    b.value = km;
                });
                spn2.innerHTML = "Divide the length value by 1e+9";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let nm = km * 1e+12;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let km = nm / 1e+12;
                    b.value = km;
                });
                spn2.innerHTML = "Divide the length value by 1e+12";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let mile = km / 1.609;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let km = mile * 1.609;
                    b.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 1.609";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let yard = km * 1094;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let km = yard / 1094;
                    b.value = km;
                });
                spn2.innerHTML = "Divide the length value by 1094";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let feet = km * 3281;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let km = feet / 3281;
                    b.value = km;
                });
                spn2.innerHTML = "Divide the length value by 3281";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let inch = km * 39370;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let km = inch / 39370;
                    b.value = km;
                });
                spn2.innerHTML = "Divide the length value by 39370";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let km = this.value;
                    let nautm = km / 1.852;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let km = nautm * 1.852;
                    b.value = km;
                });
                spn2.innerHTML = "Multiply the length value by 1.852";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Meter" === text1):
            spn2.innerHTML = " ";
            spn2.innerHTML = "Please select second parametre also.";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let km = m / 1000;
                    a.value = km;
                })
                a.addEventListener('input', function () {
                    let km = this.value;
                    let meter = km * 1000;
                    b.value = meter;
                });
                spn2.innerHTML = "Multiply the length value by 1000";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let m1 = m;
                    a.value = m1;
                })
                a.addEventListener('input', function () {
                    let m1 = this.value;
                    let m = m1;
                    b.value = m;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let cm = m * 100;
                    a.value = cm;
                })
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let m = cm / 100;
                    b.value = m;
                });
                spn2.innerHTML = "Divide the length value by 100";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let mm = m * 1000;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let m = mm / 1000;
                    b.value = m;
                });
                spn2.innerHTML = "Divide the length value by 1000";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let micm = m * 1e+6;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let m = micm / 1e+6;
                    b.value = m;
                });
                spn2.innerHTML = "Divide the length value by 1e+6";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let nm = m * 1e+9;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let m = nm / 1e+9;
                    b.value = m;
                });
                spn2.innerHTML = "Divide the length value by 1e+9";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let mile = m / 1609;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let m = mile * 1609;
                    b.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 1609";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let yard = m * 1.094;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let m = yard / 1.094;
                    b.value = m;
                });
                spn2.innerHTML = "Divide the length value by 1.094";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let feet = m * 3.281;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let m = feet / 3.281;
                    b.value = m;
                });
                spn2.innerHTML = "Divide the length value by 3.281";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let inch = m * 39.37;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let m = inch / 39.37;
                    b.value = m;
                });
                spn2.innerHTML = "Divide the length value by 39.37";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let m = this.value;
                    let nautm = m / 1852;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let m = nautm * 1852;
                    b.value = m;
                });
                spn2.innerHTML = "Multiply the length value by 1852";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Centimeter" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let km = cm / 100000;
                    a.value = km;
                })
                a.addEventListener('input', function () {
                    let km = this.value;
                    let cm = km * 100000;
                    b.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 100000";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let m = cm / 100;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let cm = m * 100;
                    b.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 100";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let cm1 = cm;
                    a.value = cm1;
                });
                a.addEventListener('input', function () {
                    let cm1 = this.value;
                    let cm = cm1;
                    b.value = cm;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let mm = cm * 10;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let cm = mm / 10;
                    b.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 10";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let micm = cm * 10000;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let cm = micm / 10000;
                    b.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 10000";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let nm = cm * 1e+7;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let cm = nm / 1e+7;
                    b.value = cm;
                });
                spn2.innerHTML = "Divide the length value by 1e+7";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let mile = cm / 160900;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let cm = mile * 160900;
                    b.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 160900";

            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let yard = cm / 91.44;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let cm = yard * 91.44;
                    b.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 91.44";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let feet = cm / 30.48;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let cm = feet * 30.48;
                    b.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 30.48";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let inch = cm / 2.54;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let cm = inch * 2.54;
                    b.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 2.54";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let cm = this.value;
                    let nautm = cm / 185200;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let cm = nautm * 185200;
                    b.value = cm;
                });
                spn2.innerHTML = "Multiply the length value by 185200";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Millimetre" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let km = mm / 1e+6;
                    a.value = km;
                })
                a.addEventListener('input', function () {
                    let km = this.value;
                    let mm = km * 1e+6;
                    b.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+6";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let m = mm / 1000;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let mm = m * 1000;
                    b.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 1000";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let cm = mm / 10;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let mm = cm * 10;
                    b.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 10";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let mm1 = this.value;
                    let mm = mm1;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm1 = this.value;
                    let mm = mm1;
                    b.value = mm;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let micm = mm * 1000;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let mm = micm / 1000;
                    b.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 1000";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let nm = mm * 1e+6;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let mm = nm / 1e+6;
                    b.value = mm;
                });
                spn2.innerHTML = "Divide the length value by 1e+6";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let mile = mm / 1.609e+6;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let mm = mile * 1.609e+6;
                    b.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 1.609e+6";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let yard = mm / 914.4;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let mm = yard * 914.4;
                    b.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 914.4";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let feet = mm / 304.8;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let mm = feet * 304.8;
                    b.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 304.8";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let inch = mm / 25.4;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let mm = inch * 25.4;
                    b.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 25.4";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let mm = this.value;
                    let nautm = mm / 1.852e+6;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let mm = nautm * 1.852e+6;
                    b.value = mm;
                });
                spn2.innerHTML = "Multiply the length value by 1.852e+6";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Micrometres" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let m = micm / 1e+9;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let micm = m * 1e+9;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+9";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let m = micm / 1e+6;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let micm = m * 1e+6;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+6";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let cm = micm / 10000;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let micm = cm * 10000;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 10000";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let mm = micm / 1000;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let micm = mm * 1000;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 1000";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let micm1 = micm;
                    a.value = micm1;
                })
                a.addEventListener('input', function () {
                    let micm1 = this.value;
                    let micm = micm1;
                    b.value = micm;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let nm = micm * 1000;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let micm = nm / 1000;
                    b.value = micm;
                });
                spn2.innerHTML = "Divide the length value by 1000";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let mile = micm / 1.609e+9;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let micm = mile * 1.609e+9;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 1.609e+9";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let yard = micm / 914400;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let micm = yard * 914400;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 914400";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let feet = micm / 304800;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let micm = feet * 304800;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 304800";

            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let inch = micm / 25400;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let micm = inch * 25400;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 25400";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let micm = this.value;
                    let nautm = micm / 1.852e+9;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let micm = nautm * 1.852e+9;
                    b.value = micm;
                });
                spn2.innerHTML = "Multiply the length value by 1.852e+9";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Nanometre" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let m = nm / 1e+12;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let nm = m * 1e+12;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+12";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let m = nm / 1e+9;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let nm = m * 1e+9;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+9";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let cm = nm / 1e+7;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let nm = cm * 1e+7;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+7";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let mm = nm / 1e+6;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let nm = mm * 1e+6;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 1e+6";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let micm = nm / 1000;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let nm = micm * 1000;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 1000";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let nm1 = nm;
                    a.value = nm1;
                })
                a.addEventListener('input', function () {
                    let nm1 = this.value;
                    let nm = nm1;
                    b.value = nm;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let mile = nm / 1.609e+12;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let nm = mile * 1.609e+12;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 1.609e+12";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let yard = nm / 9.144e+8;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let nm = yard * 9.144e+8;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 9.144e+8";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let feet = nm / 3.048e+8;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let nm = feet * 3.048e+8;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 3.048e+8";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let inch = nm / 2.54e+7;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let nm = inch * 2.54e+7;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 2.54e+7";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let nm = this.value;
                    let nautm = nm / 1.852e+12;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let nm = nautm * 1.852e+12;
                    b.value = nm;
                });
                spn2.innerHTML = "Multiply the length value by 1.852e+12";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Mile" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let m = Mile * 1.609;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let Mile = m / 1.609;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 1.609";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let m = Mile * 1609;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let Mile = m / 1609;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 1609";

            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let cm = Mile * 160900;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let Mile = cm / 160900;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 160900";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let mm = Mile * 1.609e+6;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let Mile = mm / 1.609e+6;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 1.609e+6";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let micm = Mile * 1.609e+9;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let Mile = micm / 1.609e+9;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 1.609e+9";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let nm = Mile * 1.609e+12;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let Mile = nm / 1.609e+12;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 1.609e+12";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let mile = Mile;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let Mile = mile;
                    b.value = Mile;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let yard = Mile * 1760;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let Mile = yard / 1760;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 1760";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let feet = Mile * 5280;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let Mile = feet / 5280;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 5280";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let inch = Mile * 63360;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let Mile = inch / 63360;
                    b.value = Mile;
                });
                spn2.innerHTML = "Divide the length value by 63360";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let Mile = this.value;
                    let nautm = Mile / 1.151;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let Mile = nautm * 1.151;
                    b.value = Mile;
                });
                spn2.innerHTML = "Multiply the length value by 1.151";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Yard" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let m = Yard / 1094;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let Yard = m * 1094;
                    b.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 1094";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let m = Yard / 1.094;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let Yard = m * 1.094;
                    b.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 1.094";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let cm = Yard * 91.44;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let Yard = cm / 91.44;
                    b.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 91.44";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let mm = Yard * 914.4;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let Yard = mm / 914.4;
                    b.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 914.4";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let micm = Yard * 914400;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let Yard = micm / 914400;
                    b.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 914400";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let nm = Yard * 9.144e+8;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let Yard = nm / 9.144e+8;
                    b.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 9.144e+8";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let mile = Yard / 1760;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let Yard = mile * 1760;
                    b.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 1760";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let yard = Yard;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let Yard = yard;
                    b.value = Yard;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let feet = Yard * 3;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let Yard = feet / 3;
                    b.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 3";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let inch = Yard * 36;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let Yard = inch / 36;
                    b.value = Yard;
                });
                spn2.innerHTML = "Divide the length value by 36";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let Yard = this.value;
                    let nautm = Yard * 2025;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let Yard = nautm / 2025;
                    b.value = Yard;
                });
                spn2.innerHTML = "Multiply the length value by 2025";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Foot" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let m = Foot / 3281;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let Foot = m * 3281;
                    b.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 3281";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let m = Foot / 3.281;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let Foot = m * 3.281;
                    b.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 3.281";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let cm = Foot * 30.48;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let Foot = cm / 30.48;
                    b.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 30.48";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let mm = Foot * 304.8;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let Foot = mm / 304.8;
                    b.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 304.8";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let micm = Foot * 304800;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let Foot = micm / 304800;
                    b.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 304800";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let nm = Foot * 3.048e+8;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let Foot = nm / 3.048e+8;
                    b.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 3.048e+8";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let mile = Foot / 5280;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let Foot = mile * 5280;
                    b.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 5280";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let yard = Foot / 3;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let Foot = yard * 3;
                    b.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 3";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let feet = Foot;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let Foot = feet;
                    b.value = Foot;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let inch = Foot * 12;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let Foot = inch / 12;
                    b.value = Foot;
                });
                spn2.innerHTML = "Divide the length value by 12";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let Foot = this.value;
                    let nautm = Foot / 6076;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let Foot = nautm * 6076;
                    b.value = Foot;
                });
                spn2.innerHTML = "Multiply the length value by 6076";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Inch" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let m = Inch / 39370;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let Inch = m * 39370;
                    b.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 39370";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let m = Inch / 39.37;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let Inch = m * 39.37;
                    b.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 39.37";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let cm = Inch * 2.54;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let Inch = cm / 2.54;
                    b.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 2.5";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let mm = Inch * 25.4;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let Inch = mm / 25.4;
                    b.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 25.4";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let micm = Inch * 25400;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let Inch = micm / 25400;
                    b.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 25400";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let nm = Inch * 2.54e+7;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let Inch = nm / 2.54e+7;
                    b.value = Inch;
                });
                spn2.innerHTML = "Divide the length value by 2.54e+7";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let mile = Inch / 63360;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let Inch = mile * 63360;
                    b.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 63360";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let yard = Inch / 36;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let Inch = yard * 36;
                    b.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 36";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let feet = Inch / 12;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let Inch = feet * 12;
                    b.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 12";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let inch = Inch;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let Inch = inch;
                    b.value = Inch;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let Inch = this.value;
                    let nautm = Inch / 72910;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let Inch = nautm * 72910;
                    b.value = Inch;
                });
                spn2.innerHTML = "Multiply the length value by 72910";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        case ("Nautical mile" === text1):
            spn2.innerHTML = " ";

            if ('Kilometre' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let m = NautM * 1.852;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let NautM = m / 1.852;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 1.852";
            }
            else if ('Meter' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let m = NautM * 1852;
                    a.value = m;
                })
                a.addEventListener('input', function () {
                    let m = this.value;
                    let NautM = m / 1852;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 1852";
            }
            else if ('Centimeter' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let cm = NautM * 185200;
                    a.value = cm;
                });
                a.addEventListener('input', function () {
                    let cm = this.value;
                    let NautM = cm / 185200;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 185200";
            }
            else if ('Millimetre' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let mm = NautM * 1.852e+6;
                    a.value = mm;
                })
                a.addEventListener('input', function () {
                    let mm = this.value;
                    let NautM = mm / 1.852e+6;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 1.852e+6";
            }
            else if ('Micrometres' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let micm = NautM * 1.852e+9;
                    a.value = micm;
                })
                a.addEventListener('input', function () {
                    let micm = this.value;
                    let NautM = micm / 1.852e+9;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 1.852e+9";
            }
            else if ('Nanometre' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let nm = NautM * 1.852e+12;
                    a.value = nm;
                })
                a.addEventListener('input', function () {
                    let nm = this.value;
                    let NautM = nm / 1.852e+12;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 1.852e+12";
            }
            else if ('Mile' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let mile = NautM * 1.151;
                    a.value = mile;
                })
                a.addEventListener('input', function () {
                    let mile = this.value;
                    let NautM = mile / 1.151;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 1.151";
            }
            else if ('Yard' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let yard = NautM * 2025;
                    a.value = yard;
                })
                a.addEventListener('input', function () {
                    let yard = this.value;
                    let NautM = yard / 2025;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 2025";
            }
            else if ('Foot' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let feet = NautM * 6076;
                    a.value = feet;
                })
                a.addEventListener('input', function () {
                    let feet = this.value;
                    let NautM = feet / 6076;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 6076";
            }
            else if ('Inch' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let inch = NautM * 72910;
                    a.value = inch;
                })
                a.addEventListener('input', function () {
                    let inch = this.value;
                    let NautM = inch / 72910;
                    b.value = NautM;
                });
                spn2.innerHTML = "Divide the length value by 72910";
            }
            else if ('Nautical mile' === text) {
                b.addEventListener('input', function () {
                    let NautM = this.value;
                    let nautm = NautM;
                    a.value = nautm;
                })
                a.addEventListener('input', function () {
                    let nautm = this.value;
                    let NautM = nautm;
                    b.value = NautM;
                });
                spn2.innerHTML = "Equal values because the parametre is same.";
            }
            else {
                spn2.innerHTML = "Please select second parametre also.";
            }
            break;

        default:
            break;
    }
});


a.addEventListener('input', function () {
    let Foot = this.value;
    let inch = Foot * 12;
    b.value = inch;
})
b.addEventListener('input', function () {
    let inch = this.value;
    let Foot = inch / 12;
    a.value = Foot;
});
spn2.innerHTML = "Multiply the length value by 12";

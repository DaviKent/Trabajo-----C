let anio = 2024;

if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0 )) {
    console.log(anio + " es un año bisiesto.")
} else{
    console.log(anio + " no es año bisiesto.")
}
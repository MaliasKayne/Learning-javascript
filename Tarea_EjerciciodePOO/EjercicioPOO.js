class Descuentos {

    tecnologia = '60%';
    muebles = '50%';
    descMinimo = '10%';
    

    blackFriday() {
        return 'Solo disponible durante el ultimo fin de semana de Noviembre, Black Friday con descuentos de hasta el ';
    }
    autumnSale() {
        return 'Solo disponible durante el mes de Septiembre, las Rebajas de Otoño con descuentos de hasta el ';
    }
    oficeImplementsWholeSale() {
        return 'Descuentos especiales durante el mes de abril para compras al por mayor en implementos de oficina desde el ';
    }
}

const desTecnologia = new Descuentos();
const desMuebles = new Descuentos();
const dsWholesale = new Descuentos();

document.write('<h2>Promociones de Descuentos</h2>');
document.write('<p> -' + desTecnologia.blackFriday() + desTecnologia.tecnologia + '</p>');
document.write('<p> -' + desMuebles.autumnSale() + desMuebles.muebles + '</p>');
document.write('<p> -' + dsWholesale.oficeImplementsWholeSale() + dsWholesale.descMinimo + ' hasta el ' + dsWholesale.muebles + '</p>');
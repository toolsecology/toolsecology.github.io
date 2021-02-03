/* Copyright 2021 Nicolas Joyeux */
const PI=3.141592653589793238;

const unitLength = {Meters:1, Centimeters:1/100, Feet:0.3048, Inches:0.3048/12, Kilometers:1000, 
    Miles:1609.34, Millimeters:1/1000, Yards:0.9143972421696};

const unitArea = {'Square Meters':1, 'Acres':4046.86, 'Hectares':10000, 'Square Centimeters':1/10000, 'Square Feet':0.092903,
    'Square Inches':0.00064516, 'Square Kilometers':1000000, 'Square Miles':2.59e+6, 'Square Millimeters':1/1000000, 'Square Yards':0.836127};

const unitVolume = {'Cubic Meters':1, 'Cubic Centimeters':1e-6, 'Cubic Feet':0.0283168,
    'Cubic Inches':1.6387e-5, 'Cubic Kilometers':1e9, 'Cubic Miles':4.168e+9, 'Cubic Millimeters':1e-9, 'Cubic Yards':0.764555,
    'Fluid Ounces':2.8413e-5, 'Imperial Gallons':0.00454609, 'Liter':0.001, 'Milliliters': 1e-6, 'US Legal Cups':0.00024, 'US Liquid Gallons':0.00378541};

const comparisonLength = {'a football field': 91.44};

const comparisonArea = {'a Lincoln penny':2.85160E-4, 'a pinball':2.83E-3,'a tennis ball': 0.056, 'a bowling ball':0.15,
 'a full mattress':2.61, 'a standard parking space':16.7, 'an American football field':5.35E+03,
 'Monaco':1.95E+06, 'Macau':2.82E+07, 'Bermuda':5.00E+07, 'Liechtenstein':1.60E+08, 'Hong Kong':1.09E+09,
 'Lebanon':1.04E+10, 'Iceland':1.03E+11, 'Egypt':1.00E+12, 'Russia':1.71E+13, 'Mars':1.45E+14, 'the Earth':5.10E+14, 
 'Neptune':7.64E+15, 'Saturn':4.27E+16, 'the Sun':6.09E+18};

 const comparisonVolume = {'a large drop of water':1e-6, 'a tablespoon':1.5e-5, 'a pop can':0.00035, 'a large milk carton':0.002, 
 'an American football': 0.004471, 'a standard beer cooler':0.025, 'a fridge':0.5, 'an olympic swimming pool':2500, 
 'the great pyramid of Giza':2.6e6, 'the Moon':2.1968e+19, 'the Earth':1.0832e+21, 'the Sun':1.4092e+27};

function initUnits (el, unit) {

    for (var u in unit) {
        var option = document.createElement("option");
        option.text = u;
        el.add(option);
    }
}

function toFloat(x) {
    x=x.trim();
    x=x.replace(",", ".");
    x=parseFloat(x);
    if( isNaN(x) )  x=0;

    return x;
}

function findComparisonLength (length) {
    var closestObject="";
    var closestValue=Infinity;
    var closestScale=1;

    for (var obj in comparisonLength) {
        if(comparisonLength[obj] < closestValue) {
            closestObject=obj;
            closestValue = Math.abs(comparisonLength[obj]-length);
            closestScale = length/comparisonLength[obj];
        }
    }

    return {object:closestObject, scale:parseFloat(closestScale.toFixed(1))};
}

function findComparisonArea (area) {
    var closestObject="";
    var closestValue=Infinity;
    var closestScale=1;

    for (var obj in comparisonArea) {
        if(comparisonArea[obj] < closestValue) {
            closestObject=obj;
            closestValue = Math.abs(comparisonArea[obj]-area);
            closestScale = area/comparisonArea[obj];
        }
    }

    return {object:closestObject, scale:parseFloat(closestScale.toFixed(1))};
}

function findComparisonVolume (volume) {
    var closestObject="";
    var closestValue=Infinity;
    var closestScale=1;

    for (var obj in comparisonVolume) {
        if(comparisonVolume[obj] < closestValue) {
            closestObject=obj;
            closestValue = Math.abs(comparisonVolume[obj]-volume);
            closestScale = volume/comparisonVolume[obj];
        }
    }

    return {object:closestObject, scale:parseFloat(closestScale.toFixed(1))};
}
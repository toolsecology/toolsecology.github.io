const PI=3.141592653589793238;

const unitLength = {Meters:1, Centimeters:1/100, Feet:0.3048, Inches:0.3048/12, Kilometers:1000, 
    Miles:1609.34, Millimeters:1/1000, Yards:0.9143972421696};

const unitArea = {'Square Meters':1, 'Acres':4046.86, 'Hectares':10000.00884, 'Square Centimeters':1/10000, 'Square Feet':0.092903,
    'Square Inches':0.00064516, 'Square Kilometers':1000000, 'Square Miles':2.59e+6, 'Square Millimeters':1/1000000, 'Square Yards':0.836127};

const comparisonLength = {'a football field': 91.44};

const comparisonArea = {'a Lincoln penny':2.85160E-4, 'a pinball':2.83E-3,'a tennis ball': 0.056, 'a bowling ball':0.15, 'a full mattress':2.61, 'a standard parking space':16.7, 'an American football field':5.35E+03,
 'Monaco':1.95E+06, 'Macau':2.82E+07, 'Bermuda':5.00E+07, 'Liechtenstein':1.60E+08, 'Hong Kong':1.09E+09,
 'Lebanon':1.04E+10, 'Iceland':1.03E+11, 'Egypt':1.00E+12, 'Russia':1.71E+13, 'Mars':1.45E+14, 'the Earth':5.10E+14, 
 'Neptune':7.64E+15, 'Saturn':4.27E+16, 'the Sun':6.09E+18};

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
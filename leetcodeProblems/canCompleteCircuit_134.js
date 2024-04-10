/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let sumCost = cost.reduce(
        (partialSum, a) => partialSum + a,
        0
    );
    let sumGas = gas.reduce(
        (partialSum, a) => partialSum + a,
        0
    );
    // Check if it is possible to complete the journey
    // based on total gas and cost.
    if (sumCost > sumGas) {
        return -1;
    }

    // Initialize variables for tracking total gas and
    // starting index.
    let currentGas = 0;
    let startingIndex = 0;

    // Iterate over all gas stations in the list.
    for (let i = 0; i < gas.length; i++) {
        // Update current gas level by adding gas and
        // subtracting cost at current station.
        currentGas = currentGas + (gas[i] - cost[i]);
        // If the current gas level is negative, reset it to
        // zero and update the starting index.
        if (currentGas < 0) {
            currentGas = 0;
            startingIndex = i + 1;
        }
    }
    // Return starting index of gas station that allows
    // journey to be completed.
    return startingIndex;
};


console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))


let arr = [
    {
        "key_id": 7915,
        "key_value": "Marisol Infra Power Private Limited"
    },
    {
        "key_id": 8067,
        "key_value": "Creative Power Solution"
    },
    {
        "key_id": 8630,
        "key_value": "Amogeo ITeS India Limited"
    },
    {
        "key_id": 8718,
        "key_value": "BLUTH SERVICES LLP"
    },
    {
        "key_id": 8770,
        "key_value": "RESS Solar Private Limited"
    },
    {
        "key_id": 8788,
        "key_value": "Balaji Automation"
    },
    {
        "key_id": 8864,
        "key_value": "Shree Paramjyoti Enterprises"
    },
    {
        "key_id": 8878,
        "key_value": "Pushti Mata Associates"
    },
    {
        "key_id": 8912,
        "key_value": "Rajesh Enterprises"
    },
    {
        "key_id": 9048,
        "key_value": "Sunrise Solar Solutions"
    },
    {
        "key_id": 9049,
        "key_value": "Energy Care and Efficiency"
    },
    {
        "key_id": 9220,
        "key_value": "R R Solar Power Solutions"
    },
    {
        "key_id": 9238,
        "key_value": "IVCM Star India Private Limited"
    },
    {
        "key_id": 9239,
        "key_value": "Hegatech Private Limited"
    },
    {
        "key_id": 9262,
        "key_value": "FEEWA Energy Pvt. Ltd."
    },
    {
        "key_id": 9290,
        "key_value": "Bankey Bihari Solar India"
    },
    {
        "key_id": 9337,
        "key_value": "Friends Electricals"
    },
    {
        "key_id": 9364,
        "key_value": "Shashi Solar Power Technologies"
    },
    {
        "key_id": 9418,
        "key_value": "Divine Power World"
    },
    {
        "key_id": 9455,
        "key_value": "S M Enterprises"
    },
    {
        "key_id": 9507,
        "key_value": "Sudha Solar Tech"
    },
    {
        "key_id": 9541,
        "key_value": "Jitendra SIngh Rawat COntractor & Supplier"
    },
    {
        "key_id": 9544,
        "key_value": "Sai Sunrise Enterprises"
    },
    {
        "key_id": 9546,
        "key_value": "Manral Associates"
    },
    {
        "key_id": 9790,
        "key_value": "Sanvi Associates"
    },
    {
        "key_id": 9791,
        "key_value": "Heliacal Urja"
    },
    {
        "key_id": 9792,
        "key_value": "Tejaswini Solar System Pvt. Ltd."
    },
    {
        "key_id": 9793,
        "key_value": "Rana Traders"
    },
    {
        "key_id": 9817,
        "key_value": "Shri Renewable Energy RE Consultants & Contractors"
    },
    {
        "key_id": 9818,
        "key_value": "Balaji Solar"
    },
    {
        "key_id": 9867,
        "key_value": "BES Technology"
    },
    {
        "key_id": 9888,
        "key_value": "Solar Powertech"
    },
    {
        "key_id": 9952,
        "key_value": "Vindhya Solar and Lighting Solutions"
    },
    {
        "key_id": 9960,
        "key_value": "Joshi Batteries and Solar Works"
    },
    {
        "key_id": 10075,
        "key_value": "Sita Communication"
    },
    {
        "key_id": 10113,
        "key_value": "Power Solutions"
    },
    {
        "key_id": 10117,
        "key_value": "K S Latwal and Sons"
    },
    {
        "key_id": 10221,
        "key_value": "Hamza Electro Shopee"
    },
    {
        "key_id": 10325,
        "key_value": "Balaji Enterprises"
    },
    {
        "key_id": 10326,
        "key_value": "Universal Power Solutions"
    },
    {
        "key_id": 10469,
        "key_value": "Word power Solutions"
    },
    {
        "key_id": 10470,
        "key_value": "Turning Point"
    },
    {
        "key_id": 10471,
        "key_value": "Kumoun Batteries"
    },
    {
        "key_id": 10472,
        "key_value": "harsh Electronics"
    },
    {
        "key_id": 10474,
        "key_value": "City Heart Communications"
    },
    {
        "key_id": 10571,
        "key_value": "Sahara Traders"
    },
    {
        "key_id": 10634,
        "key_value": "Fusion AI Solutions"
    },
    {
        "key_id": 10639,
        "key_value": "Rays Energy Solutions"
    },
    {
        "key_id": 10728,
        "key_value": "Devrishi Solar System LLP"
    },
    {
        "key_id": 10733,
        "key_value": "Shri Narayan Enterprises"
    },
    {
        "key_id": 10764,
        "key_value": "Kaushik Enterprises"
    },
    {
        "key_id": 10804,
        "key_value": "Namo Solar Energy Experts"
    },
    {
        "key_id": 10862,
        "key_value": "M&Y Solar Pvt. ltd."
    },
    {
        "key_id": 10863,
        "key_value": "Aditya Green power"
    },
    {
        "key_id": 10882,
        "key_value": "Bhilangna Henwal Power Associates"
    },
    {
        "key_id": 10918,
        "key_value": "Vivswan Energies Pvt. Ltd."
    },
    {
        "key_id": 10919,
        "key_value": "Shyam Power Services"
    },
    {
        "key_id": 11377,
        "key_value": "BNM SOLAR"
    },
    {
        "key_id": 11378,
        "key_value": "AM TO PM  SOLAR"
    },
    {
        "key_id": 11430,
        "key_value": "BHANDARI SOLAR ENERGY SOLUTIONS"
    },
    {
        "key_id": 11431,
        "key_value": "TECHNOLOGY SOLUTIONS GROUP"
    },
    {
        "key_id": 11600,
        "key_value": "PARMEET TRADERS"
    },
    {
        "key_id": 11800,
        "key_value": "shivam construction"
    },
    {
        "key_id": 11814,
        "key_value": "UTTARAKHAND SOLAR AND ELECTRICAL SOLUTIONS"
    },
    {
        "key_id": 11815,
        "key_value": "Chamoli enterprises"
    },
    {
        "key_id": 11925,
        "key_value": "Geosun power pvt limited."
    },
    {
        "key_id": 13019,
        "key_value": "lucky traders"
    },
    {
        "key_id": 13022,
        "key_value": "TRICSUN ENERGY SOLUTIONS"
    },
    {
        "key_id": 13025,
        "key_value": "SHREEJA ENTERPRISES"
    },
    {
        "key_id": 13027,
        "key_value": "SUNREN INDUSTRIES PRIVATE LIMITED"
    },
    {
        "key_id": 13150,
        "key_value": "Y2K ENTERPRISES"
    },
    {
        "key_id": 13151,
        "key_value": "VIGI VENTURES"
    },
    {
        "key_id": 13532,
        "key_value": "I-RA TECH SOLUTIONS"
    },
    {
        "key_id": 13533,
        "key_value": "bineshwar green energy solutions"
    },
    {
        "key_id": 13534,
        "key_value": "manmohan singh anand"
    },
    {
        "key_id": 13535,
        "key_value": "solar world inc"
    },
    {
        "key_id": 14027,
        "key_value": "AQUARIAN SOLAR SOLUTIONS PRIVATE LIMITED"
    },
    {
        "key_id": 14031,
        "key_value": "lalit enterprises"
    },
    {
        "key_id": 14032,
        "key_value": "micro power system"
    },
    {
        "key_id": 14100,
        "key_value": "NIPUN ENTERPRISES"
    },
    {
        "key_id": 14103,
        "key_value": "APAR SOLAR mitra.in"
    },
    {
        "key_id": 14104,
        "key_value": "GA SOLARTECH"
    },
    {
        "key_id": 14105,
        "key_value": "rana solar solution"
    },
    {
        "key_id": 14106,
        "key_value": "surya solar solutions"
    },
    {
        "key_id": 15097,
        "key_value": "bhatt engineering works &supplier"
    },
    {
        "key_id": 15321,
        "key_value": "sevenhorses energy india pvt ltd"
    },
    {
        "key_id": 16109,
        "key_value": "BRIGHTSKY SOLAR SOLUTIONS"
    },
    {
        "key_id": 16115,
        "key_value": "tejas renewpower LLP"
    },
    {
        "key_id": 16116,
        "key_value": "RAMA GLOBAL LIGHTING ROORKEE"
    },
    {
        "key_id": 16181,
        "key_value": "MS GLOBAL GROUP"
    },
    {
        "key_id": 16184,
        "key_value": "mathur enterprises"
    },
    {
        "key_id": 16601,
        "key_value": "BHARAT SOLAR POWER"
    },
    {
        "key_id": 16603,
        "key_value": "HQ LAMPS MANUFACTURING CO PVT LTD"
    },
    {
        "key_id": 16606,
        "key_value": "shivshakti enterprises"
    },
    {
        "key_id": 16787,
        "key_value": "mahesh micro\\'s &electrical"
    },
    {
        "key_id": 16951,
        "key_value": "Himalaya age solar solution"
    },
    {
        "key_id": 17001,
        "key_value": "HINDUSTAN VIDYUT UDYOG"
    },
    {
        "key_id": 17018,
        "key_value": "ANSP RENEWABLE ENERGY"
    },
    {
        "key_id": 17019,
        "key_value": "YUVRAJ TRADERS"
    },
    {
        "key_id": 17020,
        "key_value": "KB ELECTRONICS"
    },
    {
        "key_id": 17021,
        "key_value": "BANKEY BIHARI RENEWABLE ENERGY INDIA PRIVATE LIMITED"
    },
    {
        "key_id": 17024,
        "key_value": "XO3 TECHNOLOGIES PVT LTD"
    },
    {
        "key_id": 17025,
        "key_value": "Trishoolin innovations private limited"
    },
    {
        "key_id": 17026,
        "key_value": "SURYA GREEN ENERGY"
    },
    {
        "key_id": 17027,
        "key_value": "rishiga engineering technologies pvt ltd"
    },
    {
        "key_id": 17028,
        "key_value": "NR SOLAR SOLUTIONS"
    },
    {
        "key_id": 17042,
        "key_value": "SHRI RAM SOLUTIONS"
    }
];


console.log(arr.map((key) => console.log(`https://www.google.com/search?q=` + key.key_value)))
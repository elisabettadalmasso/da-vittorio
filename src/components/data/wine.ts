export interface Wine {
    id: number;
    country: string;
    region: string;
    winery: string;
    name: string;
    year: string;
    price: number;
    grapes: string;
}

export const wines: Wine[] = [
    // FRANCE - CHAMPAGNE
    {
        id: 1,
        country: "Francia",
        region: "Champagne - Reims / Village Trois-Puits",
        winery: "Larnaudie – Hirault",
        name: "Champagne Brut Tradition 'Les 3 Puys' Premier Cru",
        year: "s.a.",
        price: 70,
        grapes: "Chardonnay – Pinot Noir – Pinot Meunier"
    },
    {
        id: 2,
        country: "Francia",
        region: "Champagne - Reims / Village Trois-Puits",
        winery: "Larnaudie – Hirault",
        name: "Champagne Brut Nature 'Zero Dosage' Premier Cru",
        year: "s.a.",
        price: 75,
        grapes: "Chardonnay – Pinot Noir – Pinot Meunier"
    },
    {
        id: 3,
        country: "Francia",
        region: "Champagne - Reims / Village Trois-Puits",
        winery: "Larnaudie – Hirault",
        name: "Champagne Rosé Premier Cru",
        year: "s.a.",
        price: 72,
        grapes: "Chardonnay – Pinot Noir – Pinot Meunier"
    },
    {
        id: 4,
        country: "Francia",
        region: "Champagne - Vertus / Côte des Blancs",
        winery: "Larmandier Père et Fils",
        name: "Champagne Brut N°1 Premier Cru",
        year: "s.a.",
        price: 80,
        grapes: "100% Chardonnay"
    },
    {
        id: 5,
        country: "Francia",
        region: "Champagne - Vertus / Côte des Blancs",
        winery: "Larmandier Père et Fils",
        name: "Champagne Rosé & Blanc Brut Premier Cru",
        year: "s.a.",
        price: 95,
        grapes: "92,5% Chardonnay – 7,5% Pinot Noir"
    },
    {
        id: 6,
        country: "Francia",
        region: "Champagne - Côte des Blancs / Cramant, Chouilly, Oger, Cuis et Vertus",
        winery: "Veuve Fourny & Fils",
        name: "Champagne Brut 'Grand Terroirs' Premier Cru",
        year: "s.a.",
        price: 80,
        grapes: "80% Chardonnay – 20% Pinot Noir"
    },
    {
        id: 7,
        country: "Francia",
        region: "Champagne - Côte des Blancs / Cramant, Chouilly, Oger, Cuis et Vertus",
        winery: "Veuve Fourny & Fils",
        name: "Champagne Blanc de Blancs Extra Brut Premier Cru",
        year: "s.a.",
        price: 85,
        grapes: "100% Chardonnay"
    },
    {
        id: 8,
        country: "Francia",
        region: "Champagne - Côte des Blancs / Cramant, Chouilly, Oger, Cuis et Vertus",
        winery: "Veuve Fourny & Fils",
        name: "Champagne Rosé Brut Premier Cru",
        year: "s.a.",
        price: 90,
        grapes: "70% Pinot Noir – 30% Chardonnay"
    },
    {
        id: 9,
        country: "Francia",
        region: "Champagne - Mailly / Montagne de Reims",
        winery: "Mailly Grand Cru",
        name: "Champagne Brut Réserve Grand Cru",
        year: "s.a.",
        price: 75,
        grapes: "75% Pinot Noir – 25% Chardonnay"
    },
    {
        id: 10,
        country: "Francia",
        region: "Alsace - Barr",
        winery: "Alsace Willm",
        name: "Crémant d'Alsace Brut",
        year: "s.a.",
        price: 28,
        grapes: "Chardonnay – Riesling – Pinot Gris – Pinot Blanc – Pinot Noir"
    },
    // FRANCE - OTHER REGIONS
    {
        id: 11,
        country: "Francia",
        region: "Valle della Loira - Banlieu-sur-Layon",
        winery: "Chateau Soucherie",
        name: "Anjou Blanc Ivoire",
        year: "2022",
        price: 40,
        grapes: "100% Chenin Blanc"
    },
    {
        id: 12,
        country: "Francia",
        region: "Bourgogne - Dezize Lès Maranges / Maranges / Santenay",
        winery: "Domaine Regnaudot",
        name: "Bourgogne Aligoté",
        year: "2023",
        price: 30,
        grapes: "100% Aligoté"
    },
    {
        id: 13,
        country: "Francia",
        region: "Valle della Loira - Vouvray",
        winery: "Domaine Champalou",
        name: "Vouvray 'Les Fondraux' demi-sec",
        year: "2019",
        price: 37,
        grapes: "100% Chenin Blanc"
    },
    {
        id: 14,
        country: "Francia",
        region: "Valle della Loira - Loges",
        winery: "Pierre Marchand & Fils Vignerons",
        name: "Pouilly Fumé (Argilo-Calcaire)",
        year: "2023",
        price: 40,
        grapes: "100% Sauvignon Blanc"
    },
    {
        id: 15,
        country: "Francia",
        region: "Sancerre - Crézancy-en-Sancerre",
        winery: "Vignoble Dauny",
        name: "Sancerre Blanc 'Les Caillottes'",
        year: "2022",
        price: 40,
        grapes: "100% Sauvignon Blanc"
    },
    {
        id: 16,
        country: "Francia",
        region: "Chablis - Béru / Chemilly-sur-Serein / Fleys / Pouilly-sur-Serein",
        winery: "Domaine Soupé",
        name: "Petit Chablis",
        year: "2022",
        price: 45,
        grapes: "100% Chardonnay"
    },
    {
        id: 17,
        country: "Francia",
        region: "Chablis - Béru / Chemilly-sur-Serein / Fleys / Pouilly-sur-Serein",
        winery: "Domaine Soupé",
        name: "Chablis",
        year: "2022",
        price: 50,
        grapes: "100% Chardonnay"
    },
    {
        id: 18,
        country: "Francia",
        region: "Chablis - Maligny / Serein",
        winery: "Domaine Gautheron-Blondeau",
        name: "Chablis 1° Cru 'Fourchaume'",
        year: "2022",
        price: 70,
        grapes: "100% Chardonnay"
    },
    {
        id: 19,
        country: "Francia",
        region: "Bordeaux - Chateau Pechon (Sauternes et Barsac)",
        winery: "Philippe Mercadier Vignobles",
        name: "Sauternes Barsac Chateau Pechon",
        year: "2022",
        price: 40,
        grapes: "Sémillon – Sauvignon Blanc – Muscadelle"
    },
    {
        id: 20,
        country: "Francia",
        region: "Bourgogne - Chablis",
        winery: "Domaine Bernard Defaix",
        name: "Bourgogne Pinot Noir",
        year: "2023",
        price: 38,
        grapes: "100% Pinot Noir"
    },
    {
        id: 21,
        country: "Francia",
        region: "Bourgogne - Chorey-Les-Beaune",
        winery: "Domaine Arnoux Père et Fils",
        name: "Bourgogne Pinot Noir",
        year: "2023",
        price: 50,
        grapes: "100% Pinot Noir"
    },
    {
        id: 22,
        country: "Francia",
        region: "Bourgogne - Santenay",
        winery: "Domaine Louis Lequin",
        name: "Bourgogne Côte d'Or",
        year: "2022",
        price: 52,
        grapes: "100% Pinot Noir"
    },
    {
        id: 23,
        country: "Francia",
        region: "Bourgogne - Santenay",
        winery: "Domaine Louis Lequin",
        name: "Santenay 'Les Charmes'",
        year: "2017",
        price: 71,
        grapes: "100% Pinot Noir"
    },
    {
        id: 24,
        country: "Francia",
        region: "Valle del Rodano - Châteauneuf-du-Pape",
        winery: "Clos des Brusquières (Thibaut Courtil)",
        name: "Châteauneuf-du-Pape 'Clos des Brusquières'",
        year: "2021",
        price: 72,
        grapes: "70% Grenache – 10% Syrah – 10% Mourvèdre – 10% Cinsault et Bourboulenc"
    },
    // GERMANY
    {
        id: 25,
        country: "Germania",
        region: "Franken - Kleinheubach",
        winery: "Fürst Löwenstein",
        name: "CF Silvaner Gutswein QbA Dry Franken",
        year: "2019",
        price: 22,
        grapes: "100% Silvaner"
    },
    {
        id: 26,
        country: "Germania",
        region: "Mosella - Traben / Trarbach",
        winery: "Villa Huesgen",
        name: "Riesling Blauschiefer Trocken Mosel",
        year: "2022",
        price: 30,
        grapes: "100% Riesling"
    },
    {
        id: 27,
        country: "Germania",
        region: "Mosella - Morscheid / Mosel-Saar-Ruwer",
        winery: "Reichsgraf von Kesselstatt",
        name: "Piesporter Ortswein Riesling Dry Mosel",
        year: "2021",
        price: 37,
        grapes: "100% Riesling"
    },
    // SLOVENIA
    {
        id: 28,
        country: "Slovenia",
        region: "Goriska Brda / Collio Goriziano - Dobrovo",
        winery: "Tomaž Prinčič",
        name: "Friulano 'Jakot' Goriska Brda",
        year: "2022",
        price: 23,
        grapes: "100% Friulano"
    },
    {
        id: 29,
        country: "Slovenia",
        region: "Goriska Brda / Collio Goriziano - Dobrovo",
        winery: "Tomaž Prinčič",
        name: "Sauvignon Goriska Brda",
        year: "2022",
        price: 23,
        grapes: "100% Sauvignon"
    },
    {
        id: 30,
        country: "Slovenia",
        region: "Goriska Brda / Collio Goriziano - Dobrovo",
        winery: "Tomaž Prinčič",
        name: "Pinot Noir 'Modri' Goriska Brda",
        year: "2023",
        price: 25,
        grapes: "100% Pinot Noir"
    },
    // SOUTH AFRICA
    {
        id: 31,
        country: "Sudafrica",
        region: "Stellenbosch-Helderberg",
        winery: "Somerbosch Wines",
        name: "Sauvignon",
        year: "2024",
        price: 32,
        grapes: "100% Sauvignon"
    },
    {
        id: 32,
        country: "Sudafrica",
        region: "Stellenbosch-Helderberg",
        winery: "Somerbosch Wines",
        name: "Shiraz",
        year: "2020",
        price: 32,
        grapes: "100% Shiraz"
    },
    // USA
    {
        id: 33,
        country: "America",
        region: "California",
        winery: "Kendall-Jackson Wine Estate",
        name: "Chardonnay California 'Vintner's Reserve'",
        year: "2022",
        price: 43,
        grapes: "100% Chardonnay"
    },
    // CHILE
    {
        id: 34,
        country: "Cile",
        region: "Valle di Almahue / Pichidegua",
        winery: "Clos de Luz",
        name: "'ARAO' Carménère Blend",
        year: "2021",
        price: 35,
        grapes: "85% Carménère – 8% Cabernet Sauvignon – 7% Syrah"
    },
    // ARGENTINA
    {
        id: 35,
        country: "Argentina",
        region: "Valle di Uco / Mendoza",
        winery: "El Hijo Prodigo (Alessandro Speri)",
        name: "Malbec 'Selección La Consulta'",
        year: "2021",
        price: 30,
        grapes: "100% Malbec"
    },
    // SPAIN
    {
        id: 36,
        country: "Spagna",
        region: "Monserrat - Masquefa",
        winery: "Raventòs Rossell",
        name: "Cava Brut Nature Metodo Classico Riserva 'Portium'",
        year: "s.a.",
        price: 23,
        grapes: "Macabeo – Parellada – Xarel-lo – Chardonnay"
    },
    // HUNGARY
    {
        id: 37,
        country: "Ungheria",
        region: "Tokaj - Bodrogkeresztùr",
        winery: "Füleky",
        name: "Tokaj Dry 'Fülop'",
        year: "2021",
        price: 22,
        grapes: "Furmint – Hárslevelű"
    },
    // AUSTRALIA
    {
        id: 38,
        country: "Australia",
        region: "South Australia - Finniss River / Valle McLaren",
        winery: "Salomon Estate",
        name: "Shiraz BAAN",
        year: "2022",
        price: 24,
        grapes: "Shiraz in maggioranza e piccola % di Merlot"
    },
    // ITALY - ALTO ADIGE
    {
        id: 39,
        country: "Italia",
        region: "Alto Adige - Val Venosta / Naturno / Rocca del Falco",
        winery: "Falkenstein di Franz Pratzner",
        name: "Vinschgau Riesling Alto Adige Val Venosta",
        year: "2023",
        price: 33,
        grapes: "100% Riesling"
    },
    {
        id: 40,
        country: "Italia",
        region: "Alto Adige - Val Venosta / Naturno / Rocca del Falco",
        winery: "Falkenstein di Franz Pratzner",
        name: "Gewürztraminer Alto Adige Val Venosta",
        year: "2023",
        price: 33,
        grapes: "100% Gewürztraminer"
    },
    {
        id: 41,
        country: "Italia",
        region: "Alto Adige - Bolzano",
        winery: "Tenuta Rottensteiner",
        name: "'Kitz'",
        year: "2024",
        price: 17,
        grapes: "Pinot Grigio – Sauvignon – Pinot Bianco – Chardonnay"
    },
    {
        id: 42,
        country: "Italia",
        region: "Alto Adige - Bolzano",
        winery: "Tenuta Rottensteiner",
        name: "Müller Thurgau",
        year: "2024",
        price: 20,
        grapes: "100% Müller Thurgau"
    },
    {
        id: 43,
        country: "Italia",
        region: "Alto Adige - Bolzano",
        winery: "Tenuta Rottensteiner",
        name: "Weissburgunder Pinot Bianco Riserva 'Carnol'",
        year: "2022",
        price: 28,
        grapes: "100% Pinot Bianco"
    },
    {
        id: 44,
        country: "Italia",
        region: "Alto Adige - Bolzano",
        winery: "Tenuta Rottensteiner",
        name: "Blauburgunder Pinot Nero",
        year: "2024",
        price: 25,
        grapes: "100% Pinot Nero"
    },
    {
        id: 45,
        country: "Italia",
        region: "Alto Adige - Valle Isarco / Bolzano",
        winery: "Tenuta Petruskellerei",
        name: "Sylvaner Valle Isarco",
        year: "2023",
        price: 20,
        grapes: "100% Sylvaner"
    },
    {
        id: 46,
        country: "Italia",
        region: "Alto Adige - Valle Isarco / Bolzano",
        winery: "Tenuta Petruskellerei",
        name: "Gewürztraminer",
        year: "2023",
        price: 25,
        grapes: "100% Gewürztraminer"
    },
    {
        id: 47,
        country: "Italia",
        region: "Alto Adige - Valle Isarco / Bolzano",
        winery: "Tenuta Petruskellerei",
        name: "St. Magdalener Classico",
        year: "2023",
        price: 21,
        grapes: "Schiava – Lagrein"
    },
    {
        id: 48,
        country: "Italia",
        region: "Alto Adige - Valle Isarco / Bolzano",
        winery: "Tenuta Petruskellerei",
        name: "Lagrein Riserva",
        year: "2021",
        price: 25,
        grapes: "100% Lagrein"
    },
    {
        id: 49,
        country: "Italia",
        region: "Alto Adige - Valle Isarco / Bressanone",
        winery: "Maso Villscheider",
        name: "Sylvaner Valle Isarco",
        year: "2023",
        price: 24,
        grapes: "100% Sylvaner"
    },
    {
        id: 50,
        country: "Italia",
        region: "Alto Adige - Valle Isarco / Bressanone",
        winery: "Maso Villscheider",
        name: "Kerner Valle Isarco",
        year: "2023",
        price: 27,
        grapes: "100% Kerner"
    },
    {
        id: 51,
        country: "Italia",
        region: "Alto Adige - Mazon / Neumarkt / Egna",
        winery: "Tenuta Kollerhof",
        name: "Blauburgunder Pinot Nero 'Mazon' Alto Adige",
        year: "2021",
        price: 39,
        grapes: "100% Pinot Nero"
    },

    // ITALY - TRENTINO
    {
        id: 52,
        country: "Italia",
        region: "Trentino - Località Ravina / Trento",
        winery: "Cantina Altemasi",
        name: "Trentodoc Millesimanto Brut",
        year: "2021",
        price: 35,
        grapes: "100% Chardonnay"
    },
    {
        id: 53,
        country: "Italia",
        region: "Trentino - Palù di Giovo / Valle di Cembra / Lavis",
        winery: "Monfort / Famiglia Simoni",
        name: "Trentodoc Brut 'Cuvée 85'",
        year: "s.a.",
        price: 33,
        grapes: "90% Chardonnay – 10% Pinot Nero"
    },
    {
        id: 54,
        country: "Italia",
        region: "Trentino - Valsugana / Castelnuovo",
        winery: "Cenci",
        name: "Trentodoc Brut M.C.",
        year: "s.a.",
        price: 33,
        grapes: "100% Chardonnay"
    },
    {
        id: 55,
        country: "Italia",
        region: "Trentino - Santa Massenza",
        winery: "Francesco Poli",
        name: "Nosiola 'Sottovi' (Vini dell'Angelo)",
        year: "2023",
        price: 25,
        grapes: "100% Nosiola"
    },
    {
        id: 56,
        country: "Italia",
        region: "Trentino - Mezzolombardo",
        winery: "I Dolomitici",
        name: "Lambrusco a Foglia Frastagliata 'PerCiso'",
        year: "2016",
        price: 38,
        grapes: "100% Lambrusco a Foglia Frastagliata"
    },
    {
        id: 57,
        country: "Italia",
        region: "Trentino - Val di Cembra / Civezzano / Lavis",
        winery: "Maso Cantanghel di Federico Simoni",
        name: "Pinot Grigio Trentino Doc",
        year: "2024",
        price: 21,
        grapes: "100% Pinot Grigio"
    },
    {
        id: 58,
        country: "Italia",
        region: "Trentino - Val di Cembra / Civezzano / Lavis",
        winery: "Maso Cantanghel di Federico Simoni",
        name: "Pinot Nero Trentino Doc",
        year: "2023",
        price: 30,
        grapes: "100% Pinot Nero"
    },

    // ITALY - FRIULI-VENEZIA GIULIA
    {
        id: 59,
        country: "Italia",
        region: "Friuli-Venezia Giulia - San Floriano del Collio / Gorizia",
        winery: "Azienda Agricola Terčič Matijaž",
        name: "Friulano Isonzo",
        year: "2022",
        price: 30,
        grapes: "100% Friulano"
    },
    {
        id: 60,
        country: "Italia",
        region: "Friuli-Venezia Giulia - San Floriano del Collio / Gorizia",
        winery: "Azienda Agricola Terčič Matijaž",
        name: "Ribolla Gialla Venezia Giulia Igt",
        year: "2022",
        price: 33,
        grapes: "100% Ribolla Gialla"
    },
    {
        id: 61,
        country: "Italia",
        region: "Friuli-Venezia Giulia - San Floriano del Collio / Gorizia",
        winery: "Azienda Agricola Terčič Matijaž",
        name: "Pinot Grigio Collio Doc Riserva 'Dar'",
        year: "2022",
        price: 40,
        grapes: "100% Pinot Grigio"
    },
    {
        id: 62,
        country: "Italia",
        region: "Friuli-Venezia Giulia - San Floriano del Collio / Gorizia",
        winery: "Azienda Agricola Terčič Matijaž",
        name: "Pinot Grigio Collio Doc Riserva 'Dar'",
        year: "2015",
        price: 54,
        grapes: "100% Pinot Grigio"
    },
    {
        id: 63,
        country: "Italia",
        region: "Friuli-Venezia Giulia - Ontagnano (UD)",
        winery: "Di Lenardo Vineyards",
        name: "'ComeMiVuoi' Venezia Giulia Igt",
        year: "2024",
        price: 18,
        grapes: "100% Ribolla Gialla"
    },
    {
        id: 64,
        country: "Italia",
        region: "Friuli-Venezia Giulia - Ontagnano (UD)",
        winery: "Di Lenardo Vineyards",
        name: "'Thanks' Venezia Giulia Igt",
        year: "2024",
        price: 28,
        grapes: "Chardonnay – Friulano – Malvasia – Verduzzo – Sauvignon"
    },
    {
        id: 65,
        country: "Italia",
        region: "Friuli-Venezia Giulia - Ontagnano (UD)",
        winery: "Di Lenardo Vineyards",
        name: "'Gossip' Friuli Doc",
        year: "2024",
        price: 18,
        grapes: "100% Pinot Grigio, Ramato"
    },
    {
        id: 66,
        country: "Italia",
        region: "Friuli-Venezia Giulia - Ontagnano (UD)",
        winery: "Di Lenardo Vineyards",
        name: "Refosco Venezia Giulia Igt",
        year: "2023",
        price: 17,
        grapes: "100% Refosco dal Peduncolo Rosso"
    },

    // ITALY - VENETO
    {
        id: 67,
        country: "Italia",
        region: "Veneto - Brognoligo di Monteforte d'Alpone (VR)",
        winery: "Le Battistelle",
        name: "Soave Classico 'Battistelle'",
        year: "2023",
        price: 21,
        grapes: "100% Garganega"
    },
    {
        id: 68,
        country: "Italia",
        region: "Veneto - Valdobbiadene (TV)",
        winery: "Terre di San Venanzio Fortunato",
        name: "Prosecco di Valdobbiadene Extra Dry",
        year: "s.a.",
        price: 25,
        grapes: "100% Glera"
    },
    {
        id: 69,
        country: "Italia",
        region: "Veneto - Valdobbiadene (TV)",
        winery: "Terre di San Venanzio Fortunato",
        name: "Valdobbiadene Cartizze Superiore Brut",
        year: "2022",
        price: 50,
        grapes: "100% Glera"
    },
    {
        id: 70,
        country: "Italia",
        region: "Veneto - Pedemonte / Valpolicella (VR)",
        winery: "Azienda Vinicola Farina",
        name: "Bianco Tre Venezie 'Nodo d'Amore'",
        year: "2021",
        price: 30,
        grapes: "Garganega – Sauvignon Blanc – Chardonnay"
    },
    {
        id: 71,
        country: "Italia",
        region: "Veneto - Pedemonte / Valpolicella (VR)",
        winery: "Azienda Vinicola Farina",
        name: "Valpolicella Classico Superiore",
        year: "2023",
        price: 23,
        grapes: "Corvina – Corvinone – Rondinella"
    },
    {
        id: 72,
        country: "Italia",
        region: "Veneto - Pedemonte / Valpolicella (VR)",
        winery: "Azienda Vinicola Farina",
        name: "Valpolicella Ripasso Classico Superiore 'Montecorna'",
        year: "2021",
        price: 30,
        grapes: "Corvina – Corvinone – Rondinella"
    },
    {
        id: 73,
        country: "Italia",
        region: "Veneto - Pedemonte / Valpolicella (VR)",
        winery: "Azienda Vinicola Farina",
        name: "Recioto della Valpolicella Classico 0,50 L",
        year: "2021",
        price: 47,
        grapes: "Corvina – Corvinone – Rondinella"
    },
    {
        id: 74,
        country: "Italia",
        region: "Veneto - Pedemonte / Valpolicella (VR)",
        winery: "Azienda Vinicola Farina",
        name: "Amarone della Valpolicella Classico",
        year: "2021",
        price: 73,
        grapes: "Corvina – Corvinone – Rondinella"
    },
    // ITALY - VALLE D'AOSTA
    {
        id: 75,
        country: "Italia",
        region: "Valle d'Aosta - Villeneuve / Loc. Vereytaz",
        winery: "La Plantze di Henri Anselmet",
        name: "'Trii Rundin' Valle d'Aosta Doc",
        year: "2024",
        price: 32,
        grapes: "100% Pinot Gris"
    },

    // ITALY - LOMBARDIA
    {
        id: 76,
        country: "Italia",
        region: "Lombardia - Franciacorta / Borgonato / Corte Franca",
        winery: "Guido Berlucchi",
        name: "Franciacorta Linea '61 Extra Brut",
        year: "s.a.",
        price: 40,
        grapes: "85% Chardonnay – 15% Pinot Nero"
    },
    {
        id: 77,
        country: "Italia",
        region: "Lombardia - Franciacorta / Borgonato / Corte Franca",
        winery: "Guido Berlucchi",
        name: "Franciacorta Linea '61 Satèn",
        year: "s.a.",
        price: 45,
        grapes: "100% Chardonnay"
    },
    {
        id: 78,
        country: "Italia",
        region: "Lombardia - Franciacorta / Borgonato / Corte Franca",
        winery: "Guido Berlucchi",
        name: "Franciacorta Linea '61 Rosé",
        year: "s.a.",
        price: 50,
        grapes: "70% Pinot Nero – 30% Chardonnay"
    },
    {
        id: 79,
        country: "Italia",
        region: "Lombardia - Franciacorta / Borgonato / Corte Franca",
        winery: "Guido Berlucchi",
        name: "Franciacorta Linea '61 Millesimato Nature",
        year: "2018",
        price: 60,
        grapes: "100% Chardonnay"
    },
    {
        id: 80,
        country: "Italia",
        region: "Lombardia - Franciacorta / Erbusco",
        winery: "Stefano Camilucci",
        name: "'Ammonites' Franciacorta Dosaggio Zero",
        year: "s.a.",
        price: 40,
        grapes: "75% Chardonnay – 20% Pinot Nero – 5% Pinot Bianco"
    },
    {
        id: 81,
        country: "Italia",
        region: "Lombardia - Lugana / Sirmione",
        winery: "Cà dei Frati",
        name: "Lugana 'I Frati'",
        year: "2023",
        price: 25,
        grapes: "100% Turbiana"
    },
    {
        id: 82,
        country: "Italia",
        region: "Lombardia - Lugana / Sirmione",
        winery: "Cà dei Frati",
        name: "Rosato 'Rosa dei Frati'",
        year: "2023",
        price: 25,
        grapes: "Groppello – Marzemino – Sangiovese"
    },
    {
        id: 83,
        country: "Italia",
        region: "Lombardia - Lugana / Sirmione",
        winery: "Ca' Lojera / Tenuta Tiraboschi",
        name: "Lugana",
        year: "2023",
        price: 21,
        grapes: "100% Turbiana"
    },
    {
        id: 84,
        country: "Italia",
        region: "Lombardia - Oltrepò Pavese / Località Prago / Santa Maria della Versa",
        winery: "Azienda Agricola Prago",
        name: "Bonarda dell'Oltrepò Pavese Frizzante",
        year: "s.a.",
        price: 16,
        grapes: "100% Croatina"
    },

    // ITALY - LIGURIA
    {
        id: 85,
        country: "Italia",
        region: "Liguria - Valle Arroscia / Pieve di Teco",
        winery: "Cascina Nirasca",
        name: "Pigato Riviera Ligure di Ponente",
        year: "2024",
        price: 25,
        grapes: "100% Pigato"
    },
    {
        id: 86,
        country: "Italia",
        region: "Liguria - Valle Arroscia / Pieve di Teco",
        winery: "Cascina Nirasca",
        name: "Vermentino Riviera Ligure di Ponente",
        year: "2024",
        price: 25,
        grapes: "100% Vermentino"
    },
    {
        id: 87,
        country: "Italia",
        region: "Liguria - Valle Arroscia / Pieve di Teco",
        winery: "Cascina Nirasca",
        name: "Vermentino Superiore Riviera Ligure di Ponente",
        year: "2022",
        price: 32,
        grapes: "100% Vermentino"
    },
    {
        id: 88,
        country: "Italia",
        region: "Liguria - Valle Arroscia / Pieve di Teco",
        winery: "Cascina Nirasca",
        name: "Ormeasco di Pornassio Rosato Sciac-Trà",
        year: "2024",
        price: 22,
        grapes: "100% Ormeasco"
    },
    {
        id: 89,
        country: "Italia",
        region: "Liguria - Valle Arroscia / Pieve di Teco",
        winery: "Cascina Nirasca",
        name: "Ormeasco di Pornassio",
        year: "2024",
        price: 25,
        grapes: "100% Ormeasco"
    },
    {
        id: 90,
        country: "Italia",
        region: "Liguria - Valle Arroscia / Pieve di Teco",
        winery: "Cascina Nirasca",
        name: "Ormeasco di Pornassio Superiore",
        year: "2022",
        price: 30,
        grapes: "100% Ormeasco"
    },
    {
        id: 91,
        country: "Italia",
        region: "Liguria - Valle Arroscia / Pieve di Teco",
        winery: "Cascina Nirasca",
        name: "Ormeasco di Pornassio Selezione Ventennale 'Nirasco'",
        year: "2022",
        price: 37,
        grapes: "100% Ormeasco"
    },
    {
        id: 92,
        country: "Italia",
        region: "Liguria - Ranzo",
        winery: "Azienda Agricola Paolo Deperi / Tenuta Colombera",
        name: "Pigato Superiore Riviera Ligure di Ponente 'Cremen'",
        year: "2022",
        price: 35,
        grapes: "100% Pigato"
    },
    {
        id: 93,
        country: "Italia",
        region: "Liguria - Ranzo",
        winery: "Azienda Agricola Paolo Deperi / Tenuta Colombera",
        name: "Vermentino Riviera Ligure di Ponente 'Colombera'",
        year: "2022",
        price: 35,
        grapes: "100% Vermentino"
    },
    {
        id: 94,
        country: "Italia",
        region: "Liguria - Ranzo",
        winery: "Azienda Agricola Paolo Deperi / Tenuta Colombera",
        name: "Ormeasco di Pornassio",
        year: "2023",
        price: 25,
        grapes: "100% Ormeasco"
    },
    {
        id: 95,
        country: "Italia",
        region: "Liguria - Valle Arroscia / Cosio d'Arroscia",
        winery: "Il Baggio Pellegrino",
        name: "Vino Rosso 'Cuxii'",
        year: "2022",
        price: 40,
        grapes: "70% Ormeasco – 30% Cabernet Sauvignon"
    },
    {
        id: 96,
        country: "Italia",
        region: "Liguria - Roccavignale (SV)",
        winery: "Società Agricola Roccavinealis",
        name: "Granaccia Igt Colline Savonesi Rosato 'La Rebecca'",
        year: "2023",
        price: 25,
        grapes: "100% Granaccia"
    },
    {
        id: 97,
        country: "Italia",
        region: "Liguria - Roccavignale (SV)",
        winery: "Società Agricola Roccavinealis",
        name: "Granaccia Igt Colline Savonesi 'Gublot'",
        year: "2021",
        price: 25,
        grapes: "100% Granaccia"
    },
    {
        id: 98,
        country: "Italia",
        region: "Liguria - Roccavignale (SV)",
        winery: "Società Agricola Roccavinealis",
        name: "Granaccia Igt Colline Savonesi 'Dru' (Affinamento in Legno)",
        year: "2021",
        price: 35,
        grapes: "100% Granaccia"
    },

    // ITALY - TOSCANA
    {
        id: 99,
        country: "Italia",
        region: "Toscana - Maremma / Costa dell'Argentario / Scansano (GR)",
        winery: "Azienda Agricola Provveditore di Bargagli Cristina",
        name: "Morellino di Scansano 'Sassato'",
        year: "2023",
        price: 19,
        grapes: "100% Sangiovese"
    },
    {
        id: 100,
        country: "Italia",
        region: "Toscana - Gragnano / Capannori (LU)",
        winery: "Società Agricola Malgiacca",
        name: "Vino Bianco",
        year: "2023",
        price: 35,
        grapes: "Trebbiano – Vermentino – Malvasia – Colombana – Viogner"
    },
    {
        id: 101,
        country: "Italia",
        region: "Toscana - Gragnano / Capannori (LU)",
        winery: "Società Agricola Malgiacca",
        name: "Vino Bianco 'Santa Rosalia' (Edizione Limitata)",
        year: "2022",
        price: 50,
        grapes: "Trebbiano – Vermentino – Malvasia – Colombana – Viogner"
    },
    {
        id: 102,
        country: "Italia",
        region: "Toscana - Gragnano / Capannori (LU)",
        winery: "Società Agricola Malgiacca",
        name: "Vino Rosso",
        year: "2023",
        price: 30,
        grapes: "Sangiovese – Canaiolo – Ciliegiolo – Syrah – Malvasia Nera – Chasselas – Merlot"
    },
    {
        id: 103,
        country: "Italia",
        region: "Toscana - Lucca",
        winery: "Tenuta dei Forci",
        name: "Vino Rosso I Forci Riserva 'Le Voliere'",
        year: "2022",
        price: 40,
        grapes: "60% Sangiovese – 30% Canaiolo – 10% Colorino"
    },
    {
        id: 104,
        country: "Italia",
        region: "Toscana - Loc. Lungagnano / Castagneto Carducci (LI)",
        winery: "Cantina Grattamacco / ColleMassari Estates",
        name: "Bolgheri Rosso Superiore Doc",
        year: "2022",
        price: 175,
        grapes: "65% Cabernet Sauvignon – 20% Merlot – 15% Sangiovese"
    },

    // ITALY - EMILIA-ROMAGNA
    {
        id: 105,
        country: "Italia",
        region: "Emilia-Romagna - Valle del Savio / Mercato Saraceno (FC)",
        winery: "Tenuta Santa Lucia Biodinamica",
        name: "Trebbiano Macerato",
        year: "2022",
        price: 25,
        grapes: "100% Trebbiano"
    },
    {
        id: 106,
        country: "Italia",
        region: "Emilia-Romagna - Valle del Savio / Mercato Saraceno (FC)",
        winery: "Tenuta Santa Lucia Biodinamica",
        name: "Sangiovese Rubicone 'S-cètt' Senza Solfiti Aggiunti",
        year: "2023",
        price: 20,
        grapes: "100% Sangiovese"
    },

    // ITALY - MOLISE
    {
        id: 107,
        country: "Italia",
        region: "Molise - San Felice del Molise",
        winery: "Claudio Cipressi",
        name: "Falanghina Terre degli Osci 'Settevigne'",
        year: "2023",
        price: 25,
        grapes: "Assyrtiko Greco – Baratuciat – Vermentino – Malvasia – Trebbiano – Gewürztraminer"
    },
    // ITALY - MARCHE
    {
        id: 108,
        country: "Italia",
        region: "Marche - Val Menocchia / Massignano (AP)",
        winery: "Cossignani L. E. Tempo",
        name: "Metodo Classico Extra Brut Blanc de Blancs",
        year: "s.a.",
        price: 59,
        grapes: "100% Pecorino"
    },
    {
        id: 109,
        country: "Italia",
        region: "Marche - Contrada Castellaretta / Staffolo (AN)",
        winery: "Società Agricola La Staffa di Riccardo Baldi",
        name: "!?Mai Sentito! Vino Frizzante sui Lieviti",
        year: "s.a.",
        price: 20,
        grapes: "Verdicchio - Trebbiano"
    },
    {
        id: 110,
        country: "Italia",
        region: "Marche - Contrada Castellaretta / Staffolo (AN)",
        winery: "Società Agricola La Staffa di Riccardo Baldi",
        name: "Verdicchio Castelli di Jesi Classico Superiore 'La Staffa'",
        year: "2024",
        price: 21,
        grapes: "100% Verdicchio"
    },
    {
        id: 111,
        country: "Italia",
        region: "Marche - Matelica (MC)",
        winery: "Cantine Belisario",
        name: "Verdicchio di Matelica Riserva 'Cambrugiano'",
        year: "2021",
        price: 30,
        grapes: "100% Verdicchio"
    },
    {
        id: 112,
        country: "Italia",
        region: "Marche - Matelica (MC)",
        winery: "Cantine Belisario",
        name: "Verdicchio di Matelica Riserva 'Cambrugiano' MAGNUM",
        year: "2021",
        price: 70,
        grapes: "100% Verdicchio"
    },

    // ITALY - UMBRIA
    {
        id: 113,
        country: "Italia",
        region: "Umbria - Allerona / Ficulle / Orvieto (TR)",
        winery: "Azienda Agricola Argillae",
        name: "Grechetto",
        year: "2023",
        price: 22,
        grapes: "100% Grechetto"
    },
    {
        id: 114,
        country: "Italia",
        region: "Umbria - Allerona / Ficulle / Orvieto (TR)",
        winery: "Azienda Agricola Argillae",
        name: "Orvieto Superiore",
        year: "2024",
        price: 22,
        grapes: "Grechetto – Procanico – Malvasia – Chardonnay – Sauvignon Blanc"
    },
    {
        id: 115,
        country: "Italia",
        region: "Umbria - Allerona / Ficulle / Orvieto (TR)",
        winery: "Azienda Agricola Argillae",
        name: "Umbria Bianco 'Primo d'Anfora'",
        year: "2020",
        price: 63,
        grapes: "Grechetto – Drupeggio – Malvasia"
    },

    // ITALY - LAZIO
    {
        id: 116,
        country: "Italia",
        region: "Lazio - Castelli Romani / Frascati (RM)",
        winery: "Azienda Agricola L'Olivella",
        name: "Cesanese Brut Rosé Metodo Classico",
        year: "s.a.",
        price: 26,
        grapes: "100% Cesanese"
    },
    {
        id: 117,
        country: "Italia",
        region: "Lazio - Castelli Romani / Frascati (RM)",
        winery: "Azienda Agricola L'Olivella",
        name: "Frascati Superiore 'Racemo'",
        year: "2023",
        price: 22,
        grapes: "Malvasia – Trebbiano"
    },
    {
        id: 118,
        country: "Italia",
        region: "Lazio - Castelli Romani / Frascati (RM)",
        winery: "Azienda Agricola L'Olivella",
        name: "'Quaranta / Sessanta'",
        year: "2022",
        price: 23,
        grapes: "Shiraz – Cesanese"
    },

    // ITALY - ABRUZZO
    {
        id: 119,
        country: "Italia",
        region: "Abruzzo - Loreto Aprutino (PE)",
        winery: "Torre dei Beati",
        name: "Cerasuolo d'Abruzzo 'Rosa-ae'",
        year: "2024",
        price: 20,
        grapes: "100% Montepulciano"
    },
    {
        id: 120,
        country: "Italia",
        region: "Abruzzo - Loreto Aprutino (PE)",
        winery: "Torre dei Beati",
        name: "Pecorino d'Abruzzo 'Giocheremo con i Fiori'",
        year: "2023",
        price: 23,
        grapes: "100% Pecorino"
    },
    {
        id: 121,
        country: "Italia",
        region: "Abruzzo - Loreto Aprutino (PE)",
        winery: "Torre dei Beati",
        name: "Trebbiano d'Abruzzo 'Bianchi Grilli per la Testa'",
        year: "2023",
        price: 31,
        grapes: "100% Trebbiano"
    },
    {
        id: 122,
        country: "Italia",
        region: "Abruzzo - Loreto Aprutino (PE)",
        winery: "Torre dei Beati",
        name: "Montepulciano d'Abruzzo",
        year: "2022",
        price: 21,
        grapes: "100% Montepulciano"
    },

    // ITALY - CAMPANIA
    {
        id: 123,
        country: "Italia",
        region: "Campania - Castelvetere sul Calore (AV)",
        winery: "Fabio De Beaumont",
        name: "Campania Fiano 'Zù'",
        year: "2022",
        price: 27,
        grapes: "90% Fiano – 10% Malvasia"
    },
    {
        id: 124,
        country: "Italia",
        region: "Campania - Castelvetere sul Calore (AV)",
        winery: "Fabio De Beaumont",
        name: "'Macchiusanelle'",
        year: "2019",
        price: 33,
        grapes: "100% Barbera"
    },
    {
        id: 125,
        country: "Italia",
        region: "Campania - Vesuvio / Terzigno (NA)",
        winery: "Cantine Villa Dora",
        name: "Lacryma Christi del Vesuvio Bianco Riserva 'Vigna del Vulcano'",
        year: "2021",
        price: 30,
        grapes: "50% Coda di Volpe – 50% Falanghina"
    },

    // ITALY - BASILICATA
    {
        id: 126,
        country: "Italia",
        region: "Basilicata - Contrada san Martino / Forenza (PZ)",
        winery: "Azienda Agricola San Martino",
        name: "Aglianico del Vulture 'Siir'",
        year: "2022",
        price: 28,
        grapes: "100% Aglianico"
    },

    // ITALY - SARDEGNA
    {
        id: 127,
        country: "Italia",
        region: "Sardegna - Gallura / Berchidda (OT)",
        winery: "Azienda Agricola Bruno Contu / Tenute Sa Conca",
        name: "LOE – Vermentino di Gallura Superiore Docg",
        year: "2021",
        price: 35,
        grapes: "100% Vermentino"
    },
    {
        id: 128,
        country: "Italia",
        region: "Sardegna - Gallura / Berchidda (OT)",
        winery: "Azienda Agricola Bruno Contu / Tenute Sa Conca",
        name: "LOE – Vermentino di Gallura Superiore Docg",
        year: "2022",
        price: 30,
        grapes: "100% Vermentino"
    },

    // ITALY - PUGLIA
    {
        id: 129,
        country: "Italia",
        region: "Puglia - Salento / Mesagne / Latiano (BR)",
        winery: "Cantina Domiziano di Vincenzo Nacci",
        name: "Negroamaro Rosato Salento 'Arilà'",
        year: "2024",
        price: 18,
        grapes: "Negroamaro e Malvasia Nera"
    },
    {
        id: 130,
        country: "Italia",
        region: "Puglia - Salento / Mesagne / Latiano (BR)",
        winery: "Cantina Domiziano di Vincenzo Nacci",
        name: "Negroamaro Salento Igp",
        year: "2018",
        price: 23,
        grapes: "90% Negroamaro – 10% Malvasia Nera"
    },
    {
        id: 131,
        country: "Italia",
        region: "Puglia - Salento / Leporano (TA)",
        winery: "Feudi Salentini di Cosimo e Maria Teresa Varvaglione",
        name: "Primitivo di Manduria 'Sassirossi'",
        year: "2022",
        price: 21,
        grapes: "100% Primitivo"
    },

    // ITALY - SICILIA
    {
        id: 132,
        country: "Italia",
        region: "Sicilia - Contrada Bausa / Marsala (TP)",
        winery: "Cantine Fina",
        name: "Grillo Terre Siciliane Igp 'Kebrilla'",
        year: "2022",
        price: 20,
        grapes: "100% Grillo"
    },
    {
        id: 133,
        country: "Italia",
        region: "Sicilia - Contrada Bausa / Marsala (TP)",
        winery: "Cantine Fina",
        name: "'Kiké'",
        year: "2022",
        price: 23,
        grapes: "90% Traminer Aromatico – 10% Sauvignon Blanc"
    },
    {
        id: 134,
        country: "Italia",
        region: "Sicilia - Contrada Bausa / Marsala (TP)",
        winery: "Cantine Fina",
        name: "Syrah Terre Siciliane Igp",
        year: "2021",
        price: 25,
        grapes: "100% Syrah"
    },
    {
        id: 135,
        country: "Italia",
        region: "Sicilia - Contrada Sciambro / Castiglione di Sicilia (CT)",
        winery: "Giulia Monteleone",
        name: "Etna Bianco",
        year: "2023",
        price: 37,
        grapes: "100% Carricante"
    },
    {
        id: 136,
        country: "Italia",
        region: "Sicilia - Contrada Sciambro / Castiglione di Sicilia (CT)",
        winery: "Giulia Monteleone",
        name: "Etna Rosso",
        year: "2023",
        price: 46,
        grapes: "90% Nerello Mascarese – 10% Nerello Cappuccio"
    },
    {
        id: 137,
        country: "Italia",
        region: "Sicilia - Castiglione di Sicilia / Solicchiata (CT)",
        winery: "I Custodi delle Vigne dell'Etna",
        name: "Etna Bianco 'Aedes'",
        year: "2023",
        price: 30,
        grapes: "90% Carricante – 10% Grecanico, Catarratto e Minella"
    },
    {
        id: 138,
        country: "Italia",
        region: "Sicilia - Castiglione di Sicilia / Solicchiata (CT)",
        winery: "I Custodi delle Vigne dell'Etna",
        name: "Etna Rosato 'Alnus'",
        year: "2024",
        price: 30,
        grapes: "80% Nerello Mascarese – 20% Nerello Cappuccio"
    },
    {
        id: 139,
        country: "Italia",
        region: "Sicilia - Castiglione di Sicilia / Solicchiata (CT)",
        winery: "I Custodi delle Vigne dell'Etna",
        name: "Etna Rosso 'Pistus'",
        year: "2022",
        price: 30,
        grapes: "80% Nerello Mascarese – 20% Nerello Cappuccio"
    },
    // ITALY - PIEMONTE (Parte 1)
    {
        id: 140,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Abbona di Marziano Abbona",
        name: "Langhe Rosato",
        year: "2024",
        price: 22,
        grapes: "100% Nebbiolo"
    },
    {
        id: 141,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Abbona di Marziano Abbona",
        name: "Alta Langa Extra Brut",
        year: "2021",
        price: 45,
        grapes: "70% Pinot Nero – 30% Chardonnay"
    },
    {
        id: 142,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Abbona di Marziano Abbona",
        name: "Langhe Bianco 'Cinerino'",
        year: "2024",
        price: 38,
        grapes: "100% Viogner"
    },
    {
        id: 143,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Abbona di Marziano Abbona",
        name: "Dogliani 'Papà Celso'",
        year: "2024",
        price: 33,
        grapes: "100% Dolcetto"
    },
    {
        id: 144,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Abbona di Marziano Abbona",
        name: "Dogliani 'Papà Celso' MAGNUM",
        year: "2024",
        price: 67,
        grapes: "100% Dolcetto"
    },
    {
        id: 145,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Abbona di Marziano Abbona",
        name: "Barolo Ravera",
        year: "2020",
        price: 83,
        grapes: "100% Nebbiolo"
    },
    {
        id: 146,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Vino Spumante 'Netta' Brut Metodo Martinotti",
        year: "s.a.",
        price: 21,
        grapes: "100% Nascetta"
    },
    {
        id: 147,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Vino Spumante 'Netta' Brut Metodo Martinotti MAGNUM",
        year: "s.a.",
        price: 45,
        grapes: "100% Nascetta"
    },
    {
        id: 148,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Alta Langa Extra Brut 'San Bartomé'",
        year: "2021",
        price: 47,
        grapes: "85% Pinot Nero – 15% Chardonnay"
    },
    {
        id: 149,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Langhe Rosato 'Rosà'",
        year: "2024",
        price: 21,
        grapes: "Pinot Nero – Nebbiolo"
    },
    {
        id: 150,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Langhe Riesling 'L'Alman'",
        year: "2019",
        price: 38,
        grapes: "100% Riesling Renano"
    },
    {
        id: 151,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Langhe Pinot Nero 'Scavis'",
        year: "2021",
        price: 27,
        grapes: "100% Pinot Nero"
    },
    {
        id: 152,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Dogliani 'Sorì Dij But'",
        year: "2024",
        price: 20,
        grapes: "100% Dolcetto"
    },
    {
        id: 153,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Dogliani Superiore 'Maioli'",
        year: "2022",
        price: 24,
        grapes: "100% Dolcetto"
    },
    {
        id: 154,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Dogliani Superiore 'Maioli' MAGNUM",
        year: "2021",
        price: 52,
        grapes: "100% Dolcetto"
    },
    {
        id: 155,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Dogliani Superiore 'San Bernardo'",
        year: "2018",
        price: 40,
        grapes: "100% Dolcetto"
    },
    {
        id: 156,
        country: "Italia",
        region: "Piemonte - Farigliano / Frazione Moncucco / Monforte d'Alba",
        winery: "Azienda Agricola Anna Maria Abbona",
        name: "Barolo Bricco San Pietro",
        year: "2018",
        price: 65,
        grapes: "100% Nebbiolo"
    },
    {
        id: 157,
        country: "Italia",
        region: "Piemonte - Bubbio (AT)",
        winery: "Cascina Pastori – Famiglia Colombo",
        name: "Alta Langa Rosé Brut",
        year: "2021",
        price: 45,
        grapes: "100% Pinot Nero"
    },
    {
        id: 158,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Alta Langa Rosé Extra Brut 'Severina'",
        year: "2018",
        price: 47,
        grapes: "85% Pinot Nero – 15% Chardonnay"
    },
    {
        id: 159,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Roero Arneis Docg",
        year: "2024",
        price: 21,
        grapes: "100% Arneis"
    },
    {
        id: 160,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Roero Arneis 'La Val dei Preti' Docg",
        year: "2015",
        price: 43,
        grapes: "100% Arneis"
    },
    {
        id: 161,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Roero Arneis 'La Val dei Preti' Docg",
        year: "2014",
        price: 48,
        grapes: "100% Arneis"
    },
    {
        id: 162,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Brachetto Secco 'Anthos'",
        year: "2023",
        price: 21,
        grapes: "Varietà Aromatica a Bacca Rossa"
    },
    {
        id: 163,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Barbera d'Alba Doc",
        year: "2024",
        price: 22,
        grapes: "100% Barbera"
    },
    {
        id: 164,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Barbera d'Alba Superiore 'Marun'",
        year: "2022",
        price: 42,
        grapes: "100% Barbera"
    },
    {
        id: 165,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Barbera d'Alba Superiore 'Marun' MAGNUM",
        year: "2018",
        price: 88,
        grapes: "100% Barbera"
    },
    {
        id: 166,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Roero Riserva 'La Val dei Preti'",
        year: "2022",
        price: 40,
        grapes: "100% Nebbiolo"
    },
    {
        id: 167,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Roero Riserva 'Roche D'Ampsej'",
        year: "2019",
        price: 60,
        grapes: "100% Nebbiolo"
    },
    {
        id: 168,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "Roero Riserva 'Roche D'Ampsej'",
        year: "2014",
        price: 75,
        grapes: "100% Nebbiolo"
    },
    {
        id: 169,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Azienda Agricola Matteo Correggia",
        name: "'Apapà' Omaggio a Matteo dai Figli Giovanni e Brigitta",
        year: "2017",
        price: 195,
        grapes: "100% Nebbiolo"
    },
    {
        id: 170,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Ca'Viola di Beppe Caviola",
        name: "Dolcetto d'Alba 'Vilot'",
        year: "2024",
        price: 21,
        grapes: "100% Dolcetto"
    },
    {
        id: 171,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Ca'Viola di Beppe Caviola",
        name: "Barbera d'Alba 'Brichet'",
        year: "2024",
        price: 28,
        grapes: "100% Barbera"
    },
    {
        id: 172,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Ca'Viola di Beppe Caviola",
        name: "Barbera d'Alba 'Bric Du Luv'",
        year: "2020",
        price: 52,
        grapes: "100% Barbera"
    },
    {
        id: 173,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Ca'Viola di Beppe Caviola",
        name: "Langhe Nebbiolo 'Rangore'",
        year: "2024",
        price: 36,
        grapes: "100% Nebbiolo"
    },
    {
        id: 174,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Ca'Viola di Beppe Caviola",
        name: "Barolo 'Caviot'",
        year: "2021",
        price: 80,
        grapes: "100% Nebbiolo"
    },
    {
        id: 175,
        country: "Italia",
        region: "Piemonte - Dogliani / Borgata San Luigi",
        winery: "Azienda Agricola Ca'Viola di Beppe Caviola",
        name: "Barolo Sottocastello di Novello",
        year: "2018",
        price: 130,
        grapes: "100% Nebbiolo"
    },
    // ITALY - PIEMONTE (Parte 2)
    {
        id: 176,
        country: "Italia",
        region: "Piemonte - Grazzano Badoglio (AT)",
        winery: "Società Agricola Tenuta Santa Caterina",
        name: "Grignolino d'Asti 'Arlandino'",
        year: "2023",
        price: 21,
        grapes: "100% Grignolino"
    },
    {
        id: 177,
        country: "Italia",
        region: "Piemonte - Grazzano Badoglio (AT)",
        winery: "Società Agricola Tenuta Santa Caterina",
        name: "Monferrato Nebbiolo Superiore 'Illegale'",
        year: "2021",
        price: 30,
        grapes: "100% Nebbiolo"
    },
    {
        id: 178,
        country: "Italia",
        region: "Piemonte - Grazzano Badoglio (AT)",
        winery: "Società Agricola Tenuta Santa Caterina",
        name: "Barbera d'Asti Superiore 'Setecàpita'",
        year: "2019",
        price: 40,
        grapes: "100% Barbera"
    },
    {
        id: 179,
        country: "Italia",
        region: "Piemonte - Grazzano Badoglio (AT)",
        winery: "Società Agricola Tenuta Santa Caterina",
        name: "Freisa d'Asti Secca Superiore 'Sorì di Giul'",
        year: "2018",
        price: 40,
        grapes: "100% Freisa"
    },
    {
        id: 180,
        country: "Italia",
        region: "Piemonte - Grazzano Badoglio (AT)",
        winery: "Società Agricola Tenuta Santa Caterina",
        name: "Monferace",
        year: "2019",
        price: 52,
        grapes: "100% Grignolino a lungo Affinamento"
    },
    {
        id: 181,
        country: "Italia",
        region: "Piemonte - Carrù (CN)",
        winery: "Poderi Cellario",
        name: "Alta Langa Rosé Dosaggio Zero 'Le Grotte di Reiner'",
        year: "2021",
        price: 42,
        grapes: "100% Pinot Nero"
    },
    {
        id: 182,
        country: "Italia",
        region: "Piemonte - Monesiglio / Località Boschetto",
        winery: "Boschetto Alta Langa / Famiglia Magliano",
        name: "Piemonte Riesling 'Annozero'",
        year: "2022",
        price: 27,
        grapes: "100% Riesling"
    },
    {
        id: 183,
        country: "Italia",
        region: "Piemonte - Monesiglio / Località Boschetto",
        winery: "Boschetto Alta Langa / Famiglia Magliano",
        name: "Metodo Classico Blanc de Noirs Pas Dosé",
        year: "2023",
        price: 35,
        grapes: "100% Pinot Nero"
    },
    {
        id: 184,
        country: "Italia",
        region: "Piemonte - Monesiglio / Località Boschetto",
        winery: "Boschetto Alta Langa / Famiglia Magliano",
        name: "Piemonte Pinot Nero 'Mont Rüss'",
        year: "2023",
        price: 30,
        grapes: "100% Pinot Nero"
    },
    {
        id: 185,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto",
        winery: "Vietti Winery",
        name: "Roero Arneis",
        year: "2022",
        price: 27,
        grapes: "100% Arneis"
    },
    {
        id: 186,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto",
        winery: "Vietti Winery",
        name: "Timorasso Colli Tortonesi Detrhona",
        year: "2023",
        price: 43,
        grapes: "100% Timorasso"
    },
    {
        id: 187,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto",
        winery: "Vietti Winery",
        name: "Moscato d'Asti",
        year: "2024",
        price: 22,
        grapes: "100% Moscato"
    },
    {
        id: 188,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto",
        winery: "Vietti Winery",
        name: "Dolcetto d'Alba 'Trevìe'",
        year: "2024",
        price: 22,
        grapes: "100% Dolcetto"
    },
    {
        id: 189,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto",
        winery: "Vietti Winery",
        name: "Barbera d'Alba 'Trevìe'",
        year: "2024",
        price: 28,
        grapes: "100% Barbera"
    },
    {
        id: 190,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto",
        winery: "Vietti Winery",
        name: "Langhe Nebbiolo 'Perbacco'",
        year: "2022",
        price: 35,
        grapes: "100% Nebbiolo"
    },
    {
        id: 191,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto",
        winery: "Vietti Winery",
        name: "Langhe Nebbiolo 'Perbacco' MAGNUM",
        year: "2021",
        price: 83,
        grapes: "100% Nebbiolo"
    },
    {
        id: 192,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto",
        winery: "Vietti Winery",
        name: "Barolo 'Castiglione'",
        year: "2018",
        price: 92,
        grapes: "100% Nebbiolo"
    },
    {
        id: 193,
        country: "Italia",
        region: "Piemonte - Carema / Regione Sillanc (TO)",
        winery: "Cantina Sopravvento di Michele e Matteo Melfa",
        name: "Vino Bianco 'Rebel Rebel'",
        year: "2024",
        price: 33,
        grapes: "100% Erbaluce"
    },
    {
        id: 194,
        country: "Italia",
        region: "Piemonte - Carema / Regione Sillanc (TO)",
        winery: "Cantina Sopravvento di Michele e Matteo Melfa",
        name: "Vino Bianco 'Changes!'",
        year: "2024",
        price: 38,
        grapes: "100% Erbaluce / Macerato"
    },
    {
        id: 195,
        country: "Italia",
        region: "Piemonte - Carema / Regione Sillanc (TO)",
        winery: "Cantina Sopravvento di Michele e Matteo Melfa",
        name: "Vino Rosso 'Time' Edizione Limitata",
        year: "2024",
        price: 42,
        grapes: "100% Nebbiolo"
    },
    {
        id: 196,
        country: "Italia",
        region: "Piemonte - Carema / Regione Sillanc (TO)",
        winery: "Cantina Sopravvento di Michele e Matteo Melfa",
        name: "Carema Doc 'Heroes!'",
        year: "2023",
        price: 75,
        grapes: "100% Nebbiolo"
    },
    {
        id: 197,
        country: "Italia",
        region: "Piemonte - Roero / Santo Stefano Roero",
        winery: "Azienda Agricola Rabel",
        name: "Metodo Classico 'Spinoso' Dosaggio Zero",
        year: "2020",
        price: 42,
        grapes: "Nebbiolo – Barbera – Cari"
    },
    {
        id: 198,
        country: "Italia",
        region: "Piemonte - Roero / Santo Stefano Roero",
        winery: "Azienda Agricola Rabel",
        name: "Vino Bianco 'Soffio'",
        year: "2022",
        price: 26,
        grapes: "100% Arneis / 1 anno di Anfora"
    },
    {
        id: 199,
        country: "Italia",
        region: "Piemonte - Roero / Santo Stefano Roero",
        winery: "Azienda Agricola Rabel",
        name: "Vino Rosso 'Acustico'",
        year: "2023",
        price: 29,
        grapes: "100% Nebbiolo / 1 anno di Anfora"
    },
    {
        id: 200,
        country: "Italia",
        region: "Piemonte - Roero / Santo Stefano Roero",
        winery: "Azienda Agricola Rabel",
        name: "Vino Rosso 'Ramingo'",
        year: "2023",
        price: 35,
        grapes: "100% Pinot Nero /1 anno di Rovere"
    },
    {
        id: 201,
        country: "Italia",
        region: "Piemonte - Neive / Cascina Crosa",
        winery: "Azienda Agricola Pasquale Pelissero di Ornella Pelissero",
        name: "Cinque Terre Doc 'Alto Mare' (Progetto a Vernazza, SP)",
        year: "2023",
        price: 32,
        grapes: "70% Bosco – 20% Albarola – 10% Vermentino"
    },
    {
        id: 202,
        country: "Italia",
        region: "Piemonte - Neive / Cascina Crosa",
        winery: "Azienda Agricola Pasquale Pelissero di Ornella Pelissero",
        name: "Alta Langa Brut 'Leslie'",
        year: "2020",
        price: 40,
        grapes: "70% Pinot Nero – 30% Chardonnay"
    },
    {
        id: 203,
        country: "Italia",
        region: "Piemonte - Neive / Cascina Crosa",
        winery: "Azienda Agricola Pasquale Pelissero di Ornella Pelissero",
        name: "Barbaresco Docg 'Cascina Crosa'",
        year: "2022",
        price: 40,
        grapes: "100% Nebbiolo"
    },
    {
        id: 204,
        country: "Italia",
        region: "Piemonte - Neive / Cascina Crosa",
        winery: "Azienda Agricola Pasquale Pelissero di Ornella Pelissero",
        name: "Barbaresco Docg 'Cascina Crosa' MAGNUM",
        year: "2020",
        price: 85,
        grapes: "100% Nebbiolo"
    },
    {
        id: 205,
        country: "Italia",
        region: "Piemonte - Neive / Cascina Crosa",
        winery: "Azienda Agricola Pasquale Pelissero di Ornella Pelissero",
        name: "Barbaresco Docg 'Bricco San Giuliano'",
        year: "2022",
        price: 50,
        grapes: "100% Nebbiolo"
    },
    {
        id: 206,
        country: "Italia",
        region: "Piemonte - Castellania (AL)",
        winery: "Vigne Marina Coppi di Francesco Bellocchio",
        name: "'Francesca' Colli Tortonesi Detrhona",
        year: "2021",
        price: 35,
        grapes: "100% Timorasso"
    },
    {
        id: 207,
        country: "Italia",
        region: "Piemonte - Barbaresco / Strada Rabajà",
        winery: "Bruno Rocca / Azienda Agricola Rabajà",
        name: "Langhe Nebbiolo 'Fralù'",
        year: "2023",
        price: 35,
        grapes: "100% Nebbiolo"
    },
    {
        id: 208,
        country: "Italia",
        region: "Piemonte - Barbaresco / Strada Rabajà",
        winery: "Bruno Rocca / Azienda Agricola Rabajà",
        name: "Barbaresco Docg",
        year: "2022",
        price: 75,
        grapes: "100% Nebbiolo"
    },
    {
        id: 209,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto / Bricco Boschis",
        winery: "Cantina Cavallotto / Tenuta Vitivinicola Bricco Boschis",
        name: "Dolcetto d'Alba 'Vigna Scot'",
        year: "2024",
        price: 35,
        grapes: "100% Dolcetto"
    },
    {
        id: 210,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto / Bricco Boschis",
        winery: "Cantina Cavallotto / Tenuta Vitivinicola Bricco Boschis",
        name: "Langhe Freisa Secca",
        year: "2023",
        price: 45,
        grapes: "100% Freisa"
    },
    {
        id: 211,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto / Bricco Boschis",
        winery: "Cantina Cavallotto / Tenuta Vitivinicola Bricco Boschis",
        name: "Langhe Nebbiolo",
        year: "2022",
        price: 62,
        grapes: "100% Nebbiolo"
    },
    {
        id: 212,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto / Bricco Boschis",
        winery: "Cantina Cavallotto / Tenuta Vitivinicola Bricco Boschis",
        name: "Barolo 'Bricco Boschis'",
        year: "2020",
        price: 160,
        grapes: "100% Nebbiolo"
    },
    {
        id: 213,
        country: "Italia",
        region: "Piemonte - Castiglione Falletto / Bricco Boschis",
        winery: "Cantina Cavallotto / Tenuta Vitivinicola Bricco Boschis",
        name: "Barolo 'Bricco Boschis'",
        year: "2018",
        price: 200,
        grapes: "100% Nebbiolo"
    },
    {
        id: 214,
        country: "Italia",
        region: "Piemonte - Mango / Località Bricco Terrabianca",
        winery: "Azienda Agricola Terrabianca della Famiglia Alpiste",
        name: "Langhe Sauvignon 'Mermota'",
        year: "2023",
        price: 20,
        grapes: "100% Sauvignon Blanc"
    },
    {
        id: 215,
        country: "Italia",
        region: "Piemonte - Mango / Località Bricco Terrabianca",
        winery: "Azienda Agricola Terrabianca della Famiglia Alpiste",
        name: "Langhe Favorita 'Quattro20'",
        year: "2023",
        price: 18,
        grapes: "100% Vermentino"
    },
    {
        id: 216,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Brandini / Borgata Brandini",
        winery: "Agricola Brandini / Famiglia Bagnasco",
        name: "Alta Langa Brut",
        year: "2021",
        price: 37,
        grapes: "85% Pinot Nero – 15% Chardonnay"
    },
    {
        id: 217,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Brandini / Borgata Brandini",
        winery: "Agricola Brandini / Famiglia Bagnasco",
        name: "Alta Langa Blanc de Blancs 655",
        year: "2020",
        price: 55,
        grapes: "100% Chardonnay"
    },
    {
        id: 218,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Brandini / Borgata Brandini",
        winery: "Agricola Brandini / Famiglia Bagnasco",
        name: "Langhe Nebbiolo 'Filari Corti'",
        year: "2023",
        price: 33,
        grapes: "100% Nebbiolo"
    },
    {
        id: 219,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Brandini / Borgata Brandini",
        winery: "Agricola Brandini / Famiglia Bagnasco",
        name: "Langhe Nebbiolo 'Filari Corti' MAGNUM",
        year: "2022",
        price: 77,
        grapes: "100% Nebbiolo"
    },
    {
        id: 220,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Brandini / Borgata Brandini",
        winery: "Agricola Brandini / Famiglia Bagnasco",
        name: "Barolo del Comune di La Morra",
        year: "2018",
        price: 75,
        grapes: "100% Nebbiolo"
    },
    {
        id: 221,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Brandini / Borgata Brandini",
        winery: "Agricola Brandini / Famiglia Bagnasco",
        name: "Barolo 'R56'",
        year: "2020",
        price: 110,
        grapes: "100% Nebbiolo"
    },
    {
        id: 222,
        country: "Italia",
        region: "Piemonte - Barbaresco / Strada Rio Sordo",
        winery: "Cascina Bruciata",
        name: "Langhe Nebbiolo 'Usignolo'",
        year: "2024",
        price: 30,
        grapes: "100% Nebbiolo"
    },
    {
        id: 223,
        country: "Italia",
        region: "Piemonte - Barbaresco / Strada Rio Sordo",
        winery: "Cascina Bruciata",
        name: "Barbaresco Docg 'Rio Sordo'",
        year: "2020",
        price: 75,
        grapes: "100% Nebbiolo"
    },
    // ITALY - PIEMONTE (Parte 3 - FINALE)
    {
        id: 224,
        country: "Italia",
        region: "Piemonte - Nizza Monferrato / Agliano Terme e Moasca",
        winery: "Frasca – La Guaragna di Matteo Gerbi",
        name: "Monferrato Bianco Doc 'Sej'",
        year: "2023",
        price: 20,
        grapes: "85% Arneis – 15% Riesling"
    },
    {
        id: 225,
        country: "Italia",
        region: "Piemonte - Nizza Monferrato / Agliano Terme e Moasca",
        winery: "Frasca – La Guaragna di Matteo Gerbi",
        name: "Grignolino d'Asti",
        year: "2022",
        price: 21,
        grapes: "100% Grignolino"
    },
    {
        id: 226,
        country: "Italia",
        region: "Piemonte - Nizza Monferrato / Agliano Terme e Moasca",
        winery: "Frasca – La Guaragna di Matteo Gerbi",
        name: "Nizza Docg",
        year: "2020",
        price: 34,
        grapes: "100% Barbera"
    },
    {
        id: 227,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Monchiero Carbone di Francesco Monchiero",
        name: "Langhe Bianco 'Tamardì'",
        year: "2023",
        price: 25,
        grapes: "30% Arneis – 70% Sauvignon"
    },
    {
        id: 228,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Monchiero Carbone di Francesco Monchiero",
        name: "Roero Arneis Riserva 'Renesio Incisa'",
        year: "2019",
        price: 48,
        grapes: "100% Arneis"
    },
    {
        id: 229,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Monchiero Carbone di Francesco Monchiero",
        name: "Roero Docg 'Srü'",
        year: "2021",
        price: 40,
        grapes: "100% Nebbiolo"
    },
    {
        id: 230,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Monchiero Carbone di Francesco Monchiero",
        name: "Roero Docg 'Srü'",
        year: "2012",
        price: 130,
        grapes: "100% Nebbiolo"
    },
    {
        id: 231,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Monchiero Carbone di Francesco Monchiero",
        name: "Roero Docg 'Srü'",
        year: "2009",
        price: 140,
        grapes: "100% Nebbiolo"
    },
    {
        id: 232,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Monchiero Carbone di Francesco Monchiero",
        name: "Roero Docg 'Srü'",
        year: "2000",
        price: 180,
        grapes: "100% Nebbiolo"
    },
    {
        id: 233,
        country: "Italia",
        region: "Piemonte - Roero / Canale d'Alba",
        winery: "Monchiero Carbone di Francesco Monchiero",
        name: "Roero Docg Riserva 'Printi'",
        year: "2021",
        price: 48,
        grapes: "100% Nebbiolo"
    },
    {
        id: 234,
        country: "Italia",
        region: "Piemonte - Castagnole Monferrato (AT)",
        winery: "Azienda Agricola Gatto Pierfrancesco",
        name: "Ruché di Castagnole Monferrato 'Caresana'",
        year: "2024",
        price: 25,
        grapes: "100% Ruché"
    },
    {
        id: 235,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località Manzoni",
        winery: "Simone Scaletta",
        name: "Barbera d'Alba Superiore 'Sarsera'",
        year: "2022",
        price: 35,
        grapes: "100% Barbera"
    },
    {
        id: 236,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località Manzoni",
        winery: "Simone Scaletta",
        name: "Langhe Nebbiolo 'Autin 'd Madama'",
        year: "2022",
        price: 35,
        grapes: "100% Nebbiolo"
    },
    {
        id: 237,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località Manzoni",
        winery: "Simone Scaletta",
        name: "Barolo Bricco San Pietro 'Chirlet'",
        year: "2020",
        price: 70,
        grapes: "100% Nebbiolo"
    },
    {
        id: 238,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località Manzoni",
        winery: "Simone Scaletta",
        name: "Barolo Bussia",
        year: "2019",
        price: 95,
        grapes: "100% Nebbiolo"
    },
    {
        id: 239,
        country: "Italia",
        region: "Piemonte - Monferrato / Castelnuovo Don Bosco (AT)",
        winery: "Cascina Gilli di Gianni Vergnano",
        name: "Freisa d'Asti Frizzante 'Luna di Maggio'",
        year: "s.a.",
        price: 18,
        grapes: "100% Freisa"
    },
    {
        id: 240,
        country: "Italia",
        region: "Piemonte - Monferrato / Castelnuovo Don Bosco (AT)",
        winery: "Cascina Gilli di Gianni Vergnano",
        name: "Albugnano Doc Superiore 'Notturno'",
        year: "2022",
        price: 30,
        grapes: "100% Nebbiolo"
    },
    {
        id: 241,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Azienda Agricola E. Pira & Figli di Chiara Boschis",
        name: "Barbera d'Alba Superiore",
        year: "2023",
        price: 40,
        grapes: "100% Barbera"
    },
    {
        id: 242,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Azienda Agricola E. Pira & Figli di Chiara Boschis",
        name: "Langhe Nebbiolo",
        year: "2023",
        price: 45,
        grapes: "100% Nebbiolo"
    },
    {
        id: 243,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Azienda Agricola E. Pira & Figli di Chiara Boschis",
        name: "Barolo 'Via Nuova'",
        year: "2021",
        price: 110,
        grapes: "100% Nebbiolo"
    },
    {
        id: 244,
        country: "Italia",
        region: "Piemonte - Monferrato / Cassine / Strada Caranzano (AL)",
        winery: "Azienda Vitivinicola Franco Ivaldi",
        name: "Acqui Docg Rosato 'Fuorirosa'",
        year: "2024",
        price: 22,
        grapes: "100% Brachetto"
    },
    {
        id: 245,
        country: "Italia",
        region: "Piemonte - Monferrato / Cassine / Strada Caranzano (AL)",
        winery: "Azienda Vitivinicola Franco Ivaldi",
        name: "Barbera d'Asti Docg 'La Guerinotta'",
        year: "2024",
        price: 20,
        grapes: "100% Barbera"
    },
    {
        id: 246,
        country: "Italia",
        region: "Piemonte - Monferrato / Cassine / Strada Caranzano (AL)",
        winery: "Azienda Vitivinicola Franco Ivaldi",
        name: "Monferrato Doc Freisa 'La Gilarda'",
        year: "2023",
        price: 25,
        grapes: "100% Freisa"
    },
    {
        id: 247,
        country: "Italia",
        region: "Piemonte - Monferrato / Cassine / Strada Caranzano (AL)",
        winery: "Azienda Vitivinicola Franco Ivaldi",
        name: "Nizza Docg 'La Balzana'",
        year: "2022",
        price: 30,
        grapes: "100% Barbera"
    },
    {
        id: 248,
        country: "Italia",
        region: "Piemonte - Monferrato / Cassine / Strada Caranzano (AL)",
        winery: "Azienda Vitivinicola Franco Ivaldi",
        name: "Piemonte Albarossa Doc",
        year: "2022",
        price: 33,
        grapes: "100% Albarossa"
    },
    {
        id: 249,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località San Sebastiano",
        winery: "Réva",
        name: "Alta Langa Brut 'Solonoir'",
        year: "2022",
        price: 41,
        grapes: "100% Pinot Nero"
    },
    {
        id: 250,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località San Sebastiano",
        winery: "Réva",
        name: "Alta Langa Brut 'Solonoir' MAGNUM",
        year: "2021",
        price: 83,
        grapes: "100% Pinot Nero"
    },
    {
        id: 251,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località San Sebastiano",
        winery: "Réva",
        name: "Langhe Bianco 'Grey'",
        year: "2023",
        price: 32,
        grapes: "Sauvignon Gris – Sauvignon Blanc"
    },
    {
        id: 252,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località San Sebastiano",
        winery: "Réva",
        name: "Dolcetto d'Alba",
        year: "2024",
        price: 17,
        grapes: "100% Dolcetto"
    },
    {
        id: 253,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località San Sebastiano",
        winery: "Réva",
        name: "Langhe Nebbiolo",
        year: "2023",
        price: 34,
        grapes: "100% Nebbiolo"
    },
    {
        id: 254,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località San Sebastiano",
        winery: "Réva",
        name: "Barolo del Comune di Serralunga d'Alba",
        year: "2019",
        price: 75,
        grapes: "100% Nebbiolo"
    },
    {
        id: 255,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Località San Sebastiano",
        winery: "Réva",
        name: "Barolo del Comune di Serralunga d'Alba MAGNUM",
        year: "2019",
        price: 165,
        grapes: "100% Nebbiolo"
    },
    {
        id: 256,
        country: "Italia",
        region: "Piemonte - Gavi / Tenuta La Meirana (AL)",
        winery: "Cantina Broglia in Tenuta La Meirana",
        name: "Gavi Docg 'La Meirana'",
        year: "2022",
        price: 28,
        grapes: "100% Cortese"
    },
    {
        id: 257,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba",
        winery: "Cantina Vinicola Diego Pressenda",
        name: "Metodo Classico Pas Dosé 'Letizia'",
        year: "s.a.",
        price: 31,
        grapes: "Dolcetto e Riesling"
    },
    {
        id: 258,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba",
        winery: "Cantina Vinicola Diego Pressenda",
        name: "Dolcetto d'Alba 'Il Dosso'",
        year: "2024",
        price: 22,
        grapes: "100% Dolcetto"
    },
    {
        id: 259,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba",
        winery: "Cantina Vinicola Diego Pressenda",
        name: "Nebbiolo d'Alba 'Il Donato'",
        year: "2021",
        price: 34,
        grapes: "100% Nebbiolo"
    },
    {
        id: 260,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba",
        winery: "Cantina Vinicola Diego Pressenda",
        name: "Barolo Le Coste di Monforte",
        year: "2018",
        price: 82,
        grapes: "100% Nebbiolo"
    },
    {
        id: 261,
        country: "Italia",
        region: "Piemonte - Val di Susa / Chiomonte (TO)",
        winery: "La Chimera di Stefano Turbil",
        name: "Avanà Valsusa 'Finiere'",
        year: "2022",
        price: 27,
        grapes: "100% Avanà"
    },
    {
        id: 262,
        country: "Italia",
        region: "Piemonte - Val di Susa / Chiomonte (TO)",
        winery: "La Chimera di Stefano Turbil",
        name: "'Bau'",
        year: "s.a.",
        price: 27,
        grapes: "Becuet e Barbera"
    },
    {
        id: 263,
        country: "Italia",
        region: "Piemonte - Monferrato / Castelnuovo Don Bosco (AT)",
        winery: "Braida di Giacomo Bologna",
        name: "Barbera del Monferrato Frizzante 'La Monella'",
        year: "2024",
        price: 20,
        grapes: "100% Barbera"
    },
    {
        id: 264,
        country: "Italia",
        region: "Piemonte - Monferrato / Castelnuovo Don Bosco (AT)",
        winery: "Braida di Giacomo Bologna",
        name: "Barbera d'Asti 'Bricco dell'Uccellone'",
        year: "2018",
        price: 95,
        grapes: "100% Barbera"
    },
    {
        id: 265,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Alta Langa Brut Pas Dosé Riserva MAGNUM",
        year: "2016",
        price: 120,
        grapes: "100% Pinot Nero"
    },
    {
        id: 266,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Alta Langa Brut Rosé Pas Dosé Riserva",
        year: "2017",
        price: 52,
        grapes: "100% Pinot Nero"
    },
    {
        id: 267,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Alta Langa Brut Rosé Pas Dosé MAGNUM",
        year: "2017",
        price: 110,
        grapes: "100% Pinot Nero"
    },
    {
        id: 268,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Langhe Chardonnay 'Ad Majora'",
        year: "2022",
        price: 19,
        grapes: "100% Chardonnay"
    },
    {
        id: 269,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Langhe Doc Cabernet Sauvignon",
        year: "2021",
        price: 23,
        grapes: "100% Cabernet Sauvignon"
    },
    {
        id: 270,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Dolcetto d'Alba",
        year: "2024",
        price: 17,
        grapes: "100% Dolcetto"
    },
    {
        id: 271,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Barbera d'Alba Superiore 'Ad Majora'",
        year: "2022",
        price: 21,
        grapes: "100% Barbera"
    },
    {
        id: 272,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Verduno Pelaverga",
        year: "2024",
        price: 25,
        grapes: "100% Pelaverga"
    },
    {
        id: 273,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Barbaresco Docg Montersino",
        year: "2019",
        price: 50,
        grapes: "100% Nebbiolo"
    },
    {
        id: 274,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Santa Maria",
        winery: "Azienda Agricola San Biagio della Famiglia Roggero",
        name: "Barolo Docg 'Galina'",
        year: "2019",
        price: 50,
        grapes: "100% Nebbiolo"
    },
    {
        id: 275,
        country: "Italia",
        region: "Piemonte - Barge (CN)",
        winery: "Azienda Vitivinicola L'Autin di Mauro Camusso",
        name: "Vino Bianco Pinerolese 'Verbian'",
        year: "2022",
        price: 21,
        grapes: "100% Bian Ver"
    },
    {
        id: 276,
        country: "Italia",
        region: "Piemonte - Barge (CN)",
        winery: "Azienda Vitivinicola L'Autin di Mauro Camusso",
        name: "Vino Rosso Pinerolese 'El Dolfo'",
        year: "2020",
        price: 25,
        grapes: "100% Nebbiolo"
    },
    {
        id: 277,
        country: "Italia",
        region: "Piemonte - Barge (CN)",
        winery: "Azienda Vitivinicola L'Autin di Mauro Camusso",
        name: "Piemonte Doc Pinot Nero 'Re Nero'",
        year: "2021",
        price: 27,
        grapes: "100% Pinot Nero"
    },
    {
        id: 278,
        country: "Italia",
        region: "Piemonte - Monferrato / Costigliole d'Asti (AT)",
        winery: "Azienda Vitivinicola di Emanuele Gambino",
        name: "Piemonte Doc Moscato Secco 'Mo'Frem'",
        year: "2022",
        price: 22,
        grapes: "100% Moscato"
    },
    {
        id: 279,
        country: "Italia",
        region: "Piemonte - Monferrato / Costigliole d'Asti (AT)",
        winery: "Azienda Vitivinicola di Emanuele Gambino",
        name: "Barbera d'Asti",
        year: "2021",
        price: 20,
        grapes: "100% Barbera"
    },
    {
        id: 280,
        country: "Italia",
        region: "Piemonte - Monferrato / Costigliole d'Asti (AT)",
        winery: "Azienda Vitivinicola di Emanuele Gambino",
        name: "Barbera d'Asti Superiore",
        year: "2021",
        price: 30,
        grapes: "100% Barbera"
    },
    {
        id: 281,
        country: "Italia",
        region: "Piemonte - Monferrato / Costigliole d'Asti (AT)",
        winery: "Azienda Vitivinicola di Emanuele Gambino",
        name: "Langhe Nebbiolo",
        year: "2023",
        price: 27,
        grapes: "100% Nebbiolo"
    },
    {
        id: 282,
        country: "Italia",
        region: "Piemonte - Monferrato / Costigliole d'Asti (AT)",
        winery: "Azienda Vitivinicola di Emanuele Gambino",
        name: "Piemonte Doc Merlot",
        year: "2021",
        price: 32,
        grapes: "100% Merlot"
    },
    {
        id: 283,
        country: "Italia",
        region: "Piemonte - Monferrato / Castagnole delle Lanze (AT)",
        winery: "Azienda Vitivinicola di Gianni Doglia",
        name: "Moscato d'Asti",
        year: "2024",
        price: 21,
        grapes: "100% Moscato"
    },
    {
        id: 284,
        country: "Italia",
        region: "Piemonte - Monferrato / Castagnole delle Lanze (AT)",
        winery: "Azienda Vitivinicola di Gianni Doglia",
        name: "Grignolino d'Asti",
        year: "2023",
        price: 21,
        grapes: "100% Grignolino"
    },
    {
        id: 285,
        country: "Italia",
        region: "Piemonte - Monferrato / Castagnole delle Lanze (AT)",
        winery: "Azienda Vitivinicola di Gianni Doglia",
        name: "Ruché di Castagnole Monferrato",
        year: "2023",
        price: 23,
        grapes: "100% Ruché"
    },
    {
        id: 286,
        country: "Italia",
        region: "Piemonte - Monferrato / Castagnole delle Lanze (AT)",
        winery: "Azienda Vitivinicola di Gianni Doglia",
        name: "Barbera d'Asti Docg 'Bosco Donne'",
        year: "2023",
        price: 23,
        grapes: "100% Barbera"
    },
    {
        id: 287,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Borgata Manzoni",
        winery: "Agricola Fratelli Broccardo",
        name: "Langhe Arneis 'Langhet'",
        year: "2023",
        price: 16,
        grapes: "100% Arneis"
    },
    {
        id: 288,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Borgata Manzoni",
        winery: "Agricola Fratelli Broccardo",
        name: "Barbera d'Alba Superiore 'La Tina'",
        year: "2022",
        price: 22,
        grapes: "100% Barbera"
    },
    {
        id: 289,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Borgata Manzoni",
        winery: "Agricola Fratelli Broccardo",
        name: "Langhe Nebbiolo 'Il Giò Pi'",
        year: "2023",
        price: 23,
        grapes: "100% Nebbiolo"
    },
    {
        id: 290,
        country: "Italia",
        region: "Piemonte - Monforte d'Alba / Borgata Manzoni",
        winery: "Agricola Fratelli Broccardo",
        name: "Barolo Docg Paiagallo",
        year: "2018",
        price: 80,
        grapes: "100% Nebbiolo"
    },
    {
        id: 291,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Langhe Sauvignon 'Bric Amel'",
        year: "2023",
        price: 17,
        grapes: "100% Sauvignon Blanc"
    },
    {
        id: 292,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Dolcetto d'Alba Doc 'Bosset'",
        year: "2023",
        price: 23,
        grapes: "100% Dolcetto"
    },
    {
        id: 293,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Barbera d'Alba Doc Superiore 'Peiragal'",
        year: "2023",
        price: 30,
        grapes: "100% Barbera"
    },
    {
        id: 294,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Nizza Docg 'Vinearei'",
        year: "2023",
        price: 30,
        grapes: "100% Barbera"
    },
    {
        id: 295,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Nebbiolo d'Alba Doc 'Roccheri'",
        year: "2022",
        price: 33,
        grapes: "100% Nebbiolo"
    },
    {
        id: 296,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Alba Doc 'Pi Cit'",
        year: "2023",
        price: 31,
        grapes: "70% Nebbiolo – 30% Barbera"
    },
    {
        id: 297,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Barbaresco Docg Serragrilli",
        year: "2022",
        price: 60,
        grapes: "100% Nebbiolo"
    },
    {
        id: 298,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Barolo Docg della Tradizione",
        year: "2020",
        price: 65,
        grapes: "100% Nebbiolo"
    },
    {
        id: 299,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Marchesi di Barolo della Famiglia Abbona / Antiche Cantine in Barolo",
        name: "Barolo Docg 'Coste di Rose'",
        year: "2017",
        price: 97,
        grapes: "100% Nebbiolo"
    },
    {
        id: 300,
        country: "Italia",
        region: "Piemonte - Barbaresco",
        winery: "Cantina Moccagatta della Famiglia Minuto",
        name: "Langhe Rosato",
        year: "2023",
        price: 20,
        grapes: "100% Nebbiolo"
    },
    {
        id: 301,
        country: "Italia",
        region: "Piemonte - Barbaresco",
        winery: "Cantina Moccagatta della Famiglia Minuto",
        name: "Langhe Nebbiolo",
        year: "2023",
        price: 25,
        grapes: "100% Nebbiolo"
    },
    {
        id: 302,
        country: "Italia",
        region: "Piemonte - Barbaresco",
        winery: "Cantina Moccagatta della Famiglia Minuto",
        name: "Barbaresco Docg 'Basarin'",
        year: "2019",
        price: 70,
        grapes: "100% Nebbiolo"
    },
    {
        id: 303,
        country: "Italia",
        region: "Piemonte - Barbaresco",
        winery: "Cantina Moccagatta della Famiglia Minuto",
        name: "Barbaresco Docg 'Bric Balin'",
        year: "2017",
        price: 75,
        grapes: "100% Nebbiolo"
    },
    {
        id: 304,
        country: "Italia",
        region: "Piemonte - Barbaresco",
        winery: "Cantina Moccagatta della Famiglia Minuto",
        name: "Barbaresco Docg Riserva 'Cole'",
        year: "2020",
        price: 125,
        grapes: "100% Nebbiolo"
    },
    {
        id: 305,
        country: "Italia",
        region: "Piemonte - Clavesana",
        winery: "Produttori in Clavesana / Storica Cantina Clavesana",
        name: "Alta Langa Extra Brut 'Mito'",
        year: "2021",
        price: 35,
        grapes: "70% Chardonnay – 30% Pinot Nero"
    },
    {
        id: 306,
        country: "Italia",
        region: "Piemonte - Gattinara (VC)",
        winery: "Il Chiosso di Marco Arlunno e Carlo Cambieri",
        name: "Ghemme Docg",
        year: "2019",
        price: 40,
        grapes: "90% Nebbiolo – 10% Vespolina"
    },
    {
        id: 307,
        country: "Italia",
        region: "Piemonte - Gattinara (VC)",
        winery: "Il Chiosso di Marco Arlunno e Carlo Cambieri",
        name: "Gattinara Docg",
        year: "2019",
        price: 50,
        grapes: "100% Nebbiolo"
    },
    {
        id: 308,
        country: "Italia",
        region: "Piemonte - Gattinara (VC)",
        winery: "Travaglini Giancarlo Gattinara",
        name: "Nebbiolo Doc 'Coste della Sesia'",
        year: "2022",
        price: 22,
        grapes: "100% Nebbiolo"
    },
    {
        id: 309,
        country: "Italia",
        region: "Piemonte - Gattinara (VC)",
        winery: "Travaglini Giancarlo Gattinara",
        name: "Gattinara Docg",
        year: "2021",
        price: 40,
        grapes: "100% Nebbiolo"
    },
    {
        id: 310,
        country: "Italia",
        region: "Piemonte - Verduno",
        winery: "Fratelli Alessandria",
        name: "Verduno Pelaverga Doc 'Speziale'",
        year: "2024",
        price: 33,
        grapes: "100% Pelaverga Piccolo"
    },
    {
        id: 311,
        country: "Italia",
        region: "Piemonte - Roero / La Morra",
        winery: "Poderi Gianni Gagliardo",
        name: "Langhe Favorita 'Fallegro'",
        year: "2023",
        price: 26,
        grapes: "100% Vermentino"
    },
    {
        id: 312,
        country: "Italia",
        region: "Piemonte - Candia Canavese (TO)",
        winery: "Roberto Crosio Vignaiolo in Caluso",
        name: "Erbaluce di Caluso 'Erbalus'",
        year: "2023",
        price: 18,
        grapes: "100% Erbaluce"
    },
    {
        id: 313,
        country: "Italia",
        region: "Piemonte - Mombaruzzo (AT)",
        winery: "Pico Macario",
        name: "Nizza Docg 'Tre Roveri'",
        year: "2021",
        price: 33,
        grapes: "100% Barbera"
    },
    {
        id: 314,
        country: "Italia",
        region: "Piemonte - La Morra / Abbazia dell'Annunziata",
        winery: "Renato Ratti",
        name: "Dolcetto d'Alba 'Colombé'",
        year: "2024",
        price: 18,
        grapes: "100% Dolcetto"
    },
    {
        id: 315,
        country: "Italia",
        region: "Piemonte - La Morra / Abbazia dell'Annunziata",
        winery: "Renato Ratti",
        name: "Barbera d'Alba 'Battaglione'",
        year: "2022",
        price: 22,
        grapes: "100% Barbera"
    },
    {
        id: 316,
        country: "Italia",
        region: "Piemonte - La Morra / Abbazia dell'Annunziata",
        winery: "Renato Ratti",
        name: "Nebbiolo d'Alba 'Ochetti'",
        year: "2022",
        price: 29,
        grapes: "100% Nebbiolo"
    },
    {
        id: 317,
        country: "Italia",
        region: "Piemonte - La Morra / Abbazia dell'Annunziata",
        winery: "Renato Ratti",
        name: "Barolo Docg Marcenasco",
        year: "2018",
        price: 100,
        grapes: "100% Nebbiolo"
    },
    {
        id: 318,
        country: "Italia",
        region: "Piemonte - Castiglione Tinella",
        winery: "Azienda Agricola Paolo Saracco",
        name: "Moscato d'Asti",
        year: "2023",
        price: 22,
        grapes: "100% Moscato"
    },
    {
        id: 319,
        country: "Italia",
        region: "Piemonte - Vinchio / Regione San Pancrazio (AT)",
        winery: "Viticoltori Associati di Vinchio – Vaglio Serra",
        name: "Barbera del Monferrato Superiore 'I Tre Vescovi' MAGNUM",
        year: "2022",
        price: 40,
        grapes: "100% Barbera"
    },
    {
        id: 320,
        country: "Italia",
        region: "Piemonte - Verduno",
        winery: "Cantina Bel Colle della Famiglia Bosio",
        name: "Verduno Pelaverga Doc",
        year: "2024",
        price: 25,
        grapes: "100% Pelaverga Piccolo"
    },
    {
        id: 321,
        country: "Italia",
        region: "Piemonte - Verduno",
        winery: "Cantina Bel Colle della Famiglia Bosio",
        name: "Verduno Pelaverga Doc MAGNUM",
        year: "2023",
        price: 52,
        grapes: "100% Pelaverga Piccolo"
    },
    {
        id: 322,
        country: "Italia",
        region: "Piemonte - Verduno",
        winery: "Cantina Bel Colle della Famiglia Bosio",
        name: "Barbaresco Docg 'Pajoré'",
        year: "2018",
        price: 65,
        grapes: "100% Nebbiolo"
    },
    {
        id: 323,
        country: "Italia",
        region: "Piemonte - Verduno",
        winery: "Cantina Bel Colle della Famiglia Bosio",
        name: "Barolo Docg Riserva '10 Anni'",
        year: "2014",
        price: 75,
        grapes: "100% Nebbiolo"
    },
    {
        id: 324,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Annunziata",
        winery: "Cantina Giovanni Corino di Giuliano Corino",
        name: "Langhe Nebbiolo",
        year: "2023",
        price: 25,
        grapes: "100% Nebbiolo"
    },
    {
        id: 325,
        country: "Italia",
        region: "Piemonte - La Morra / Frazione Annunziata",
        winery: "Cantina Giovanni Corino di Giuliano Corino",
        name: "Barolo Docg Arborina",
        year: "2020",
        price: 90,
        grapes: "100% Nebbiolo"
    },
    {
        id: 326,
        country: "Italia",
        region: "Piemonte - Barolo",
        winery: "Vite Colte / Cantine in Barolo",
        name: "Piemonte Doc Moscato Passito 'La Bella Estate' 0,375cl",
        year: "2022",
        price: 28,
        grapes: "100% Moscato Bianco"
    },
    {
        id: 327,
        country: "Italia",
        region: "Piemonte - Trezzo Tinella / Frazione Cappelletto",
        winery: "Azienda Agricola Mustela di Giuliano Iuorio",
        name: "Moscato d'Asti Docg",
        year: "2023",
        price: 17,
        grapes: "100% Moscato Bianco"
    },
];

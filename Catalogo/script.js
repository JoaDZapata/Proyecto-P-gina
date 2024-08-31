document.addEventListener("DOMContentLoaded", function () {
    const productDetails = [
        {
            title: "Agua Mineral Pent 1.5L",
            description: "Precio + IVA(21%): $4311,143"
        },
        {
            title: "Agua Mineral Pent 500cm3",
            description: "Precio + IVA(21%): $3080,247"
        }, 
        {
            title: "Agua Mineral Pent 6,55L",
            description: "Precio + IVA(21%): $1843,585"
        },
        {
            title: "Saborizada Pent Free Citrus",
            description: "Precio + IVA(21%): $4321,238"
        },
        {
            title: "Saborizada Pent Free Pom. Blanco",
            description: "Precio + IVA(21%): $4321,238"
        },
        {
            title: "Saborizada Pent Free Limonada",
            description: "Precio + IVA(21%): $4321,238"
        },
        {
            title: "Saborizada Pent Free Nar-Dur",
            description: "Precio + IVA(21%): $4321,238"
        },
        {
            title: "Saborizada Pent Free Pera",
            description: "Precio + IVA(21%): $4321,238"
        },
        {
            title: "Saborizada Pent Free Ananá",
            description: "Precio + IVA(21%): $4321,238"
        },        {
            title: "Saborizada Pent Free Naranja",
            description: "Precio + IVA(21%): $4321,238"
        },
        {
            title: "Pleimont Agua Tónica 1,5L",
            description: "Precio + IVA(21%): $7350,671"
        },     
        {
            title: "Pleimont Pom-Jen 1,5L",
            description: "Precio + IVA(21%): $7350,671"
        },
        {
            title: "Pleimont Men-Lim 1,5L",
            description: "Precio + IVA(21%): $7350,671"
        },
        {
            title: "Soda Pent 500Cm3",
            description: "Precio + IVA(21%): $7032,363"
        },
        {
            title: "Soda Penty 500Cm3",
            description: "Precio + IVA(21%): $2681,325"
        },
        {
            title: "Soda Penty 1L",
            description: "Precio + IVA(21%): $3168,271"
        },
        {
            title: "Soda Penty 1,5L",
            description: "Precio + IVA(21%): $3351,487"
        },
        {
            title: "Soda Penty Sifón 2L",
            description: "Precio + IVA(21%): $5114,712"
        },
        {
            title: "Soda Penty 2,25L",
            description: "Precio + IVA(21%): $3739,391"
        },
        {
            title: "Endulzante Dulcin 250cm3",
            description: "Precio + IVA(21%): $7528,658"
        },
        {
            title: "Penty Cola 500cm3",
            description:"Precio + IVA(21%): $3715,073"
        },
        {
            title: "Penty Naranja 500cm3",
            description:"Precio + IVA(21%): $3715,073"
        },
        {
            title: "Penty Pom. Amarillo 500cm3",
            description:"Precio + IVA(21%): $3715,073"
        },
        {
            title: "Penty Lima Limón 500cm3",
            description:"Precio + IVA(21%): $3715,073"
        },
        {
            title: "Penty Pom. Amarillo 1L",
            description:"Precio + IVA(21%): $5626,962"
        },
        {
            title: "Penty Cola 1L",
            description:"Precio + IVA(21%): $5626,962"
        },
        {
            title: "Penty Naranja 1L",
            description:"Precio + IVA(21%): $5626,962"
        },
        {
            title: "Penty Lima Limón 1L",
            description:"Precio + IVA(21%): $5626,962"
        },
        {
            title: "Penty Pom. Amarillo 2,25L",
            description:"Precio + IVA(21%): $7270,470"
        },
        {
            title: "Penty Naranja 2,25L",
            description:"Precio + IVA(21%): $7270,470"
        },
        {
            title: "Penty Cola 2,25L",
            description:"Precio + IVA(21%): $7270,470"
        },
        {
            title: "Penty Lima Limón 2,25L",
            description:"Precio + IVA(21%): $7270,470"
        },
        {
            title: "Penty Pom. Blanco 2,25L",
            description:"Precio + IVA(21%): $7270,470"
        },
        {
            title: "Penty Limonada 2,25L",
            description:"Precio + IVA(21%): $7270,470"
        },
        {
            title: "Penty Pom. Amarillo 3L",
            description:"Precio + IVA(21%): $5104,332"
        },
        {
            title: "Penty Cola 3L",
            description:"Precio + IVA(21%): $5104,332"
        },
        {
            title: "Penty Naranja 3L",
            description:"Precio + IVA(21%): $5104,332"
        },
        {
            title: "Penty Lima Limón 3L",
            description:"Precio + IVA(21%): $5104,332"
        },
        {
            title: "TOM.AR Pom. Amarillo 3L",
            description:"Precio + IVA(21%): $4397,939"
        },
        {
            title: "TOM.AR Cola 3L",
            description:"Precio + IVA(21%): $4397,939"
        },
        {
            title: "TOM.AR Naranja 3L",
            description:"Precio + IVA(21%): $4397,939"
        },
        {
            title: "TOM.AR Lima Limón 3L",
            description:"Precio + IVA(21%): $4397,939"
        },
        {
            title: "TOM.AR Limonada 3L",
            description:"Precio + IVA(21%): $4397,939"
        },
        {
            title: "TOM.AR Pom. Amarillo 2,25L",
            description:"Precio + IVA(21%): $5927,961"
        },
        {
            title: "TOM.AR Cola 2,25L",
            description:"Precio + IVA(21%): $5927,961"
        },
        {
            title: "TOM.AR Naranja 2,25L",
            description:"Precio + IVA(21%): $5927,961"
        },
        {
            title: "TOM.AR Lima Limón 2,25L",
            description:"Precio + IVA(21%): $5927,961"
        },
        {
            title: "TOM.AR Limonada 2,25L",
            description:"Precio + IVA(21%): $5927,961"
        },
        {
            title: "Pent Cola 500cm3",
            description:"Precio + IVA(21%): $5642,561"
        },
        {
            title: "Pent 10 Nar.-Ban. 500cm3",
            description:"Precio + IVA(21%): $5642,672"
        },
        {
            title: "Pent 10 Naranja 500cm3",
            description:"Precio + IVA(21%): $5642,672"
        },
        {
            title: "Pent 10 Pom.Ama 500cm3",
            description:"Precio + IVA(21%): $5642,672"
        },
        {
            title: "Pent 10 Durazno 500cm3",
            description:"Precio + IVA(21%): $5642,672"
        },
        {
            title: "Pent 10 Mix Fruit 500cm3",
            description:"Precio + IVA(21%): $5642,672"
        },
        {
            title: "Pent 10 Nar.-Ana 500cm3",
            description:"Precio + IVA(21%): $5642,672"
        },
        {
            title: "Pent 10 Tropical 500cm3",
            description:"Precio + IVA(21%): $5642,672"
        },
        {
            title: "Pent Pom.Ama 3L",
            description:"Precio + IVA(21%): $10857,516"
        },
        {
            title: "Pent Naranja 3L",
            description:"Precio + IVA(21%): $10857,516"
        },
        {
            title: "Pent Durazno 3L",
            description:"Precio + IVA(21%): $10857,516"
        },
        {
            title: "Pent Mix Fruit 3L",
            description:"Precio + IVA(21%): $10857,516"
        },
        {
            title: "Pent Manzana 3L",
            description:"Precio + IVA(21%): $10857,516"
        },
        {
            title: "Pent Cola 1L",
            description:"Precio + IVA(21%): $14466,984"
        },
        {
            title: "Pent 10 Naranja 1L",
            description:"Precio + IVA(21%): $14467,152"
        },
        {
            title: "Pent 10 Pom.Ama 1L",
            description:"Precio + IVA(21%): $14467,152"
        },
        {
            title: "Pent 10 Lima Limón 1L",
            description:"Precio + IVA(21%): $14467,152"
        },
        {
            title: "Pent 10 Limonada 1L",
            description:"Precio + IVA(21%): $14467,152"
        },
        {
            title: "Pent 10 Durazno 1L",
            description:"Precio + IVA(21%): $14467,152"
        },
        {
            title: "Sartor Naranja 500cm3",
            description:"Precio + IVA(21%): $5072,577"
        },
        {
            title: "Sartor Durazno 500cm3",
            description:"Precio + IVA(21%): $5072,577"
        },
        {
            title: "Sartor Mix Frutal 500cm3",
            description:"Precio + IVA(21%): $5072,577"
        },
        {
            title: "Sartor Naranja 3L",
            description:"Precio + IVA(21%): $9672,543"
        },
        {
            title: "Sartor Durazno 3L",
            description:"Precio + IVA(21%): $9672,543"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },
        {
            title: "",
            description:"Precio + IVA(21%): $"
        },


    ];

    const brochureData = productDetails.map((product, index) => ({
        title: product.title,
        description: product.description,
        imageUrl: `Productos_Progresar_SA/${index + 1}.jpg`
    }));

    const brochureContainer = document.getElementById("brochure");

    brochureData.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = item.imageUrl;
        card.appendChild(img);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = item.title;
        cardContent.appendChild(cardTitle);

        const cardDescription = document.createElement("p");
        cardDescription.classList.add("card-description");
        cardDescription.textContent = item.description;
        cardContent.appendChild(cardDescription);

        card.appendChild(cardContent);
        brochureContainer.appendChild(card);
    });
});

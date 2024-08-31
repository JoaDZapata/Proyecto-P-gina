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

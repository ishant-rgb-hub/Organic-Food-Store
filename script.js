let products=[
            {
                Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_SAWA_MILLET-01.jpg?crop=center&height=768&v=1747896021&width=640",
                Name:"Sawa Millet",
                Price:120,
                Description:"Sawa Millet is a nutritious grain known for its health benefits and versatility in cooking."
            },
            {
                Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_KODO_MILLET-01.jpg?crop=center&height=768&v=1747896760&width=640",
                Name:"Kodo Millet",
                Price:250,
                Description:"Kodo Millet is a gluten-free grain that is rich in fiber and essential nutrients."
            },
            {
                Image:"https://bharatvedica.com/cdn/shop/files/Organic_Pearl_Millet_d9c95bf6-2b98-4fad-b0d5-66684db2bae8.png?crop=center&height=504&v=1740338814&width=420",
                Name:"Pearl Millet",
                Price:130,
                Description:" Pearl Millet is a drought-resistant grain that is rich in fiber, protein, and essential minerals."
            },
             
             {
                Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_KUTKI_MILLET-01.jpg?crop=center&height=768&v=1747896932&width=640",
                Name:"Kutki Millet",
                Price:60  ,
                Description:"Kutki Millet is a small grain known for its high nutritional value and health benefits."
            },{
                Image:"https://bharatvedica.com/cdn/shop/files/Organic_Finger_Millet_34e70b09-930a-4ec0-901e-4fb935c4e189.png?crop=center&height=504&v=1740338803&width=420",
                Name:"Foxtail Millet",
                Price:180,
                Description:"Foxtail Millet is a traditional grain that is easy to digest and packed with nutrients."
            },{
                Image:"https://bharatvedica.com/cdn/shop/files/Organic_Proso_Millet_3_384cf2aa-5ccb-4c9e-9c1e-8cafe2f227ed.png?crop=center&height=504&v=1740338834&width=420",
                Name:"Proso Millet",
                Price:170,
                Description:" Proso Millet is a gluten-free grain that is rich in protein and essential nutrients."
            },{
                Image:"https://bharatvedica.com/cdn/shop/files/Organic_Sorghum_Millet_65a6167e-2530-48c7-bb02-a19ef76e60c5.png?crop=center&height=504&v=1740338825&width=420",
                Name:"Sorghum_Millet",
                Price:88,
                Description:" Sorghum Millet is a gluten-free grain rich in fiber and antioxidants."
            },

        ];
        
        
        
        for(let product of products){
            app.innerHTML+=`<div>
            <img src="${product.Image}" /> 
            <h3>${product.Name}</h3>
            <h4>₹${product.Price}</h4>
            <button>Add to Cart</button>    
            <p>${product.Description}</p>           
            </div>`;
        }

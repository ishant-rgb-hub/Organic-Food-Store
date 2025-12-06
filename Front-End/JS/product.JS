let products1 = [
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
        Description:"Pearl Millet is a drought-resistant grain that is rich in fiber, protein, and essential minerals."
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_KUTKI_MILLET-01.jpg?crop=center&height=768&v=1747896932&width=640",
        Name:"Kutki Millet",
        Price:60,
        Description:"Kutki Millet is a small grain known for its high nutritional value and health benefits."
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Finger_Millet_34e70b09-930a-4ec0-901e-4fb935c4e189.png?crop=center&height=504&v=1740338803&width=420",
        Name:"Foxtail Millet",
        Price:180,
        Description:"Foxtail Millet is a traditional grain that is easy to digest and packed with nutrients."
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Proso_Millet_3_384cf2aa-5ccb-4c9e-9c1e-8cafe2f227ed.png?crop=center&height=504&v=1740338834&width=420",
        Name:"Proso Millet",
        Price:170,
        Description:"Proso Millet is a gluten-free grain that is rich in protein and essential nutrients."
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Sorghum_Millet_65a6167e-2530-48c7-bb02-a19ef76e60c5.png?crop=center&height=504&v=1740338825&width=420",
        Name:"Sorghum Millet",
        Price:88,
        Description:"Sorghum Millet is a gluten-free grain rich in fiber and antioxidants."
    },
];

for(let product1 of products1){
    app.innerHTML += `
        <div>
            <img src="${product1.Image}" /> 
            <h3>${product1.Name}</h3>
            <h4>₹${product1.Price}</h4>
            <button>Add to Cart</button>    
            <p>${product1.Description}</p>           
        </div>`;
}


let products2 = [
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Amaranth_2807e022-5027-43cb-8704-625722099fa7.png?crop=center&height=576&v=1740338566&width=480",
        Name:"Amaranth",
        Price:152
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Black_Chickpeas_-_Kala_Chana.jpg?crop=center&height=768&v=1763018516&width=640",
        Name:"Black Chickpeas",
        Price:203
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_ORGANIC_URAD_CHHILKA_BLACK_GRAM_SPLIT__PULSES-07.jpg?crop=center&height=768&v=1745007399&width=640",
        Name:"CHHILKA BLACK",
        Price:135
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_ORGANIC_URAD_DAL_BLACK_GRAM_SPLIT_SKINLESS__PULSES-19.jpg?crop=center&height=768&v=1745007423&width=640",
        Name:"URAD DAL BLACK",
        Price:152
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_ORGANIC_BROWN_LENTILS_MASUR_SABUT__PULSES-19.jpg?crop=center&height=768&v=1745007442&width=640",
        Name:"BROWN LENTILS MASUR SABUT",
        Price:128
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_ORGANIC_CHANA_DAL_CHICKPEA_SPLIT__PULSES-01.jpg?crop=center&height=768&v=1745007545&width=640",
        Name:"CHANA DAL CHICKPEA",
        Price:103
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_ORGANIC_MUNGDAL_CHHILKA_GREEN_GRAM_SPLIT__PULSES-07.jpg?crop=center&height=768&v=1747497446&width=640",
        Name:"MUNGDAL CHHILKA GREEN",
        Price:96
    },
];

for (let product2 of products2) {
    app.innerHTML += `
        <div>
            <img src="${product2.Image}" /> 
            <h3>${product2.Name}</h3>
            <h4>₹${product2.Price}</h4>
            <button>Add to Cart</button>
        </div>`;
}

let products3 = [
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Amaranth_Flour_15182e7f-955c-4f76-8989-d8038db63210.png?crop=center&height=576&v=1740339121&width=480",
        Name:"Amaranth Flour",
        Price:162
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_BARLEY_JAU_FLOUR_AMAZON_THUMBNAIL-01.jpg?crop=center&height=1296&v=1731770137&width=1080",
        Name:"BARLEY JAU FLOUR",
        Price:176
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Barnyard_Millet_Flour_5180d864-e667-4f45-bfa8-cba64f81d168.png?crop=center&height=576&v=1726051232&width=480",
        Name:"Barnyard Millet Flour",
        Price:178
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BHARAT_VEDICA_KATTU_BUCK_WHEAT_FLOUR_AMAZON_THUMBNAIL-01.jpg?crop=center&height=768&v=1740338902&width=640",
        Name:"KATTU BUCK WHEAT FLOUR",
        Price:183
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Corn_Flour_b02f252c-7176-4ccd-9f4f-305d0d98ee20.png?crop=center&height=576&v=1740338880&width=480",
        Name:"Corn Flour",
        Price:154
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Finger_Millet_Flour_007e6fb8-c48f-4c4b-b03c-23dddd4a6a57.png?crop=center&height=576&v=1740338871&width=480",
        Name:"Finger Millet Flour",
        Price:148
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Little_Millet_Flour_a48b27de-0573-47ea-be48-fcd859451ec3.png?crop=center&height=576&v=1740338943&width=480",
        Name:"Little Millet Flour",
        Price:184
    },
];

for (let product3 of products3) {
    app.innerHTML += `
        <div>
            <img src="${product3.Image}" /> 
            <h3>${product3.Name}</h3>
            <h4>₹${product3.Price}</h4>
            <button>Add to Cart</button>
        </div>`;
}
let products4 = [
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BigMustardSeeds_a8b5db37-6f67-42aa-926d-5ef791be120e.jpg?crop=center&height=1296&v=1747305341&width=1080",
        Name:"Big Mustard Seeds",
        Price:189
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BVE-COM06357copy.jpg?crop=center&height=1296&v=1747305549&width=1080",
        Name:"Black Mustard Small",
        Price:153
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/KaliMirch.jpg?crop=center&height=768&v=1745008545&width=640",
        Name:"Kali Mirch",
        Price:168
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Selam_Haldi_Powder.jpg?crop=center&height=768&v=1745008538&width=640",
        Name:"Selam Haldi Powder",
        Price:179
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/OrganicFenugreekSeeds.jpg?crop=center&height=768&v=1745008532&width=640",
        Name:"Organic Fenugreek Seeds",
        Price:154
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/3_3.jpg?crop=center&height=768&v=1740339094&width=640",
        Name:"Saffron",
        Price:868
    },
    
];

for (let product4 of products4) {
    app.innerHTML += `
        <div>
            <img src="${product4.Image}" /> 
            <h3>${product4.Name}</h3>
            <h4>₹${product4.Price}</h4>
            <button>Add to Cart</button>
        </div>`;
}
let products5 = [
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Barley_Grain_7ab07344-dba4-4a95-80c2-c48a7999affd.png?crop=center&height=576&v=1740338781&width=480",
        Name:"Barley Grain",
        Price:118
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Basmati_Rice.png?crop=center&height=576&v=1740339060&width=480",
        Name:"Basmati Rice",
        Price:198
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Buckwheat_b78f548c-fed2-4d61-bdd3-1455fc105b93.png?crop=center&height=576&v=1745007795&width=480",
        Name:"Buckwheat",
        Price:176
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Pearl_Barley_2472c19a-3bc2-417a-bc5b-8d121ece5c44.png?crop=center&height=576&v=1740338786&width=480",
        Name:"Pearl Barley",
        Price:195
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Red_Rice_2aea54de-87bf-473a-9a3c-139f6d68bc42.png?crop=center&height=576&v=1740338778&width=480",
        Name:"Red Rice",
        Price:134
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/Organic_Semolina_0a07dcdc-8051-460b-a69a-4734a624a24e.png?crop=center&height=576&v=1740338802&width=480",
        Name:"Suji",
        Price:68
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/index_2.png?crop=center&height=768&v=1740338394&width=640",
        Name:"Sharbati Wheat",
        Price:98
    },
];

for (let product5 of products5) {
    app.innerHTML += `
        <div>
            <img src="${product5.Image}" /> 
            <h3>${product5.Name}</h3>
            <h4>₹${product5.Price}</h4>
            <button>Add to Cart</button>
        </div>`;
}
let products6 = [
    {
        Image:"https://bharatvedica.com/cdn/shop/files/OrganicJaggeryPowder.jpg?crop=center&height=1296&v=1745008522&width=1080",
        Name:"Jaggery Powder",
        Price:165
    },
    {
        Image:"https://bharatvedica.com/cdn/shop/files/BVE-COM06379copy_1_1.jpg?crop=center&height=1296&v=1763636231&width=1080",
        Name:"Pink Salt",
        Price:121
    },
    
];

for (let product6 of products6) {
    app.innerHTML += `
        <div>
            <img src="${product6.Image}" /> 
            <h3>${product6.Name}</h3>
            <h4>₹${product6.Price}</h4>
            <button>Add to Cart</button>
        </div>`;
}
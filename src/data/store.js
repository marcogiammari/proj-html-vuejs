import {reactive} from 'vue'

export const store = reactive({
    products: [
        {
            name: 'Choco Chip Cookies',
            img: '../assets/img/choco-chip-cookies-1200x1530.jpg',
            minPrice: 19.00,
            maxPrice: 39.00
        },
        {
            name: 'Strawberry Jam Cookies',
            img: '../assets/img/strawberry-jam-cookies-1200x1530.jpg',
            minPrice: 24.00,
            maxPrice: 62.00
        },
        {
            name: 'Strawberry Donut',
            img: '../assets/img/strawberry-donut-1200x1530.jpg',
            minPrice: 24.00,
            maxPrice: 42.00
        },
        {
            name: 'Perfect Macarons',
            img: '../assets/img/perfect-macarons-1200x1530.jpg',
            minPrice: 18.00,
            maxPrice: 52.00
        },
        {
            name: 'Blackberry Stuffed Bread',
            img: '../assets/img/blackberry-stuffed-bread-1200x1530.jpg',
            minPrice: 22.00,
            maxPrice: 58.00,
        },
        {
            name: 'Cherry Cake',
            img: '../assets/img/cherry-cake-1200x1530.jpg',
            minPrice: 20.00,
            maxPrice: 48.00
        },
        {
            name: 'Cookies with Ice-Cream',
            img: '../assets/img/cookies-with-ice-cream-1200x1530.jpg',
            minPrice: 16.00,
            maxPrice: 32.00
        },
        {
            name: 'Glazed Pancake with Lemon',
            img: '../assets/img/glazed-pancake-with-lemon-1200x1530.jpg',
            minPrice: 26.00,
            maxPrice: 52.00
        },
        {
            name: 'Home Bread',
            img: '../assets/img/home-bread-1200x1530.jpg',
            minPrice: 15.00,
            maxPrice: 25.00
        },
    ],
    icons: [
        'fa-brands fa-instagram',
        'fa-brands fa-twitter',
        'fa-brands fa-facebook-f',
        'fa-brands fa-pinterest-p'
    ]
}) 
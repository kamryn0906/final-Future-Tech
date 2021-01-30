import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'Cars'
            },
            {
                _id: 2,
                title: 'Computers'
            },
            {
                _id: 3,
                title: 'Phones'
            },
            {
                _id: 4,
                title: 'Tech'
            },
        ]

    })
}


export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Future Tech',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 82324428.84,
                belongsTo: [0, 1],
                imageUrl:'https://th.bing.com/th/id/OIP.B6Inz71YABq8fDjkInLGfQHaEI?w=321&h=180&c=7&o=5&dpr=2&pid=1.7'
            },
            {
                _id: 1,
                title: 'Future Tech',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 98726031.30,
                belongsTo: [0, 4],
                imageUrl: 'https://i.pinimg.com/originals/23/60/0d/23600defa219d33f10ef3787f6b87203.jpg'
            },
            {
                _id: 2,
                title: 'Future Tech',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 99891544.60,
                belongsTo: [0, 2],
                imageUrl: 'https://th.bing.com/th/id/OIP.cka4ClxNKZhqkgxf3oQDcgHaEJ?w=313&h=180&c=7&o=5&dpr=2&pid=1.7'
            },
            {
                _id: 3,
                title: 'Future Tech',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 95871567.97,
                belongsTo: [0, 2],
                imageUrl: 'https://th.bing.com/th/id/OIP.JHvDkfx6Ryex8Pbn28iL6gHaGs?w=173&h=180&c=7&o=5&dpr=2&pid=1.7'
            },
            {
                _id: 4,
                title: 'Future Tech',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 88055135.77,
                belongsTo: [0, 3],
                imageUrl: 'https://th.bing.com/th/id/OIP.EGlhUZrwQL-GXXKKrGskVgHaEh?w=298&h=182&c=7&o=5&dpr=2&pid=1.7'
            },
            {
                _id: 5,
                title: 'Future Tech',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 89797251.35,
                belongsTo: [0, 1],
                imageUrl: 'https://th.bing.com/th/id/OIP.N_iiT-0ACUuH1NHYRh0aqAHaE8?w=267&h=180&c=7&o=5&dpr=2&pid=1.7'
            },
            {
                _id: 6,
                title: 'Future Tech',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 94805209.42,
                belongsTo: [0, 4],
                imageUrl: 'https://th.bing.com/th/id/OIP.zwrzBetRFLdTQvKvjQUQqQHaD3?w=321&h=180&c=7&o=5&dpr=2&pid=1.7'
            },
            {
                _id: 7,
                title: 'Future Tech',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 95044624.90,
                belongsTo: [0, 3],
                imageUrl: 'https://th.bing.com/th/id/OIP.SRO15Ek75lMZiSiUWDrLFwHaE7?w=225&h=180&c=7&o=5&dpr=2&pid=1.7'
            },
        ]
    })
}
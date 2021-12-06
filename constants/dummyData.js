const myProfile = {
    name: "ByProgrammers",
    profile_image: require("../assets/images/profile.png"),
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: require("../assets/icons/burger.png")
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: require("../assets/icons/cherry.png")
    },
    {
        id: 3,
        name: "Rice Item",
        icon: require("../assets/icons/rice.png")
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]

const sizes = [
    {
        id: 1,
        label: '12"'
    },
    {
        id: 2,
        label: '14"'
    },
    {
        id: 3,
        label: '16"'
    },
    {
        id: 4,
        label: '18"'
    }
]

const myCart = [
    {
        ...hamburger,
        qty: 1
    },
    {
        ...hotTacos,
        qty: 1
    },
    {
        ...vegBiryani,
        qty: 1
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]

const kfc = require("../assets/dummyData/kfc.png")
const pizzaHut = require("../assets/dummyData/pizza_hut.png")
const mcDonald = require("../assets/dummyData/mcdonald.png")
const burgerKing = require("../assets/dummyData/burger_king.png")
const domino = require("../assets/dummyData/domino_pizza.png")
const starbucks = require("../assets/dummyData/starbucks.png")
const veg_biryani = require("../assets/dummyData/veg_biryani.png")
const wrap_sandwich = require("../assets/dummyData/wrap_sandwich.png")

const orderHistories = [
    {
        title: "19 Sep 2021",
        data: [
            {
                id: 18888,
                name: "Pizza Hut",
                image: pizzaHut,
                price: 35.30,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 3,
                deliveredTime: "19 Sep, 14:30"
            },
            {
                id: 28888,
                name: "KFC",
                image: kfc,
                price: 55.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "19 Sep, 12:30"
            },
            {
                id: 38888,
                name: "Domino's Pizza",
                image: domino,
                price: 15.50,
                status: "C",
                status_desc: "Order Cancel",
                itemCount: 1,
                deliveredTime: "19 Sep, 10:30"
            },
        ]
    },
    {
        title: "15 Sep 2021",
        data: [
            {
                id: 48888,
                name: "Starbucks",
                image: starbucks,
                price: 40.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "15 Sep, 10:00"
            }
        ]
    }
]

const upcomingOrders = [
    {
        title: "",
        data: [
            {
                id: 88888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 98888,
                name: "McDonald",
                image: mcDonald,
                price: 20.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
        ]
    },
    {
        title: "Latest Orders",
        data: [
            {
                id: 68888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 78888,
                name: "Burger King",
                image: burgerKing,
                price: 12.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 8:00"
            }
        ]
    }
]

const availableCoupons = [
    {
        id: 1,
        name: "Burger King",
        image: burgerKing,
        description: 'Valid until 01 Jan 2022',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "KFC",
        image: kfc,
        description: 'Valid until 01 Jan 2022',
        discountPercent: 10,
    },
    {
        id: 3,
        name: "Pizza Hut",
        image: pizzaHut,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 35,
    },
    {
        id: 4,
        name: "Starbucks",
        image: starbucks,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 15,
    },
    {
        id: 5,
        name: "Domino's Pizza",
        image: domino,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 30,
    },
]

const usedCoupons = [
    {
        id: 1,
        name: "Burger King",
        image: burgerKing,
        description: 'Used on 2 Sep 2021',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "Starbucks",
        image: starbucks,
        description: 'Used on 18 Sep 2021',
        discountPercent: 15,
    },
]

const notifications = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "a few seconds ago"
            },
            {
                id: 2,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "5 mins ago"
            },
        ]
    },
    {
        title: "Yesterday",
        data: [
            {
                id: 3,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            },
            {
                id: 4,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            }
        ]
    }
]

const deliveryMan = {
    name: "Williams Adam",
    avatar: require("../assets/dummyData/delivery_man.png")
}

export default {
    myProfile,
    categories,
    menu,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
    orderHistories,
    upcomingOrders,
    availableCoupons,
    usedCoupons,
    notifications,
    deliveryMan,
}
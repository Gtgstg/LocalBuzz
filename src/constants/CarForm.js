const Form = [
    {
        title: 'Find your right car',
        id: 0,
        menu: ['New', 'Used']
    },
    {
        title: 'Car Type',
        id: 1,
        menu: [
            {
                name: 'Hatchback',
                features: ['Small Cars', 'Hatchbacks'],
                image: 'Hatchback.png'
            },
            {
                name: 'Sedans',
                features: ['Compact Sedans', 'Sedans'],
                image: 'Sedan.png'
            },
            {
                name: 'Crossovers',
                features: ['Cross Between Sedans and SUVs'],
                image: 'crossover.png'
            },
            {
                name: 'SUVs',
                features: ['Compact SUVs', 'SUVs', 'Pickup Trucks'],
                image: 'SUV.png'
            },
            {
                name: 'Luxury',
                features: ['Premium High End Vehicles'],
                image: 'Luxury.png'
            },
            {
                name: 'Not Sure',
                features: ["Haven't Decided Yet?"],
                image: 'Notsure.png'
            }
        ],
    },
    {
        title: 'Brands',
        id: 2,
        menu: [
            {
                name: 'Not Sure',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Honda',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Hyundai',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Toyota',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Tata',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Suzuki',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Mahindra',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Nissan',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Jeep',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Kia',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Skoda',
                image: '/Images/Brands/notsure.png'
            },
            {
                name: 'Renault',
                image: '/Images/Brands/notsure.png'
            },
        ]
    },
    {
        title: 'Price Range',
        id: 3,
        menu: ['7-10 Lakhs', '11-14 Lakhs', '15-19 Lakhs']
    },
    {
        title: 'How Soon?',
        id: 4,
        menu: ['As Soon As Possible', '1 Month', '1-3 Months', '3+ Months', 'Not Sure']
    },
    {
        title: 'Location',
        id: 5,
        menu: ['Suggestion 1', 'Suggestion 2', 'Suggestion 3']
    },
    {
        title: 'Overview'
    }

]

export default Form;
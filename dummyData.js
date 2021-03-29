export const user = [
  {
    "first_name": "M",
    "last_name": "JAckson",
    "email": "jackson.novelty@gmail.com",
    "occupation": "Programming",
    "username": "jacks",
    "bio": "Software Developer",
    "address": "kk 509 st",
    "language": "Kinyarwanda",
    "password": "12345678",
    "profile_picture": "https://res.cloudinary.com/mjackson/image/upload/v1609304524/Screen_Shot_2020-12-29_at_08.21.43_qe7pem.png"
  }
]

export const signupState = {
  requesting: false,
  errorOpen: false,
  erro: ""
}
export const locationsPayload = [
  {
    id: "c6028e0d-ef88-4693-ab49-f37669891724",
    LocationName: "Kigali",
    country: "Rwanda",
    description: "The land of a thousand hills",
    link: "https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/africa/downtown-kigali-rwanda.adapt.1900.1.jpg",
  }
]

export const accommodationsPayload = [
  {

    id: "1ce36391-2c08-3074-bddb-a4ea8cccbbc5",
    country: "Rwanda",
    city: "Kigali",
    title: "Marriot Hotel",
    description: "A serene environment for relaxation",
    photos: "https://cache.marriott.com/marriottassets/marriott/KGLMC/kglmc-exterior-0030-hor-feat.jpg",

  },
  {

    id: "2ce36391-2c08-3074-bddb-a4ea8cccbbc5",
    country: "Rwanda",
    city: "Kicukiro",
    title: "Kicukiro Hotel",
    description: "A serene environment for relaxation",
    photos: "https://cache.marriott.com/marriottassets/marriott/KGLMC/kglmc-exterior-0030-hor-feat.jpg",

  },
  {

    id: "3ce36391-2c08-3074-bddb-a4ea8cccbbc5",
    country: "German",
    city: "Berlin",
    title: "Berlin Hotel",
    description: "A serene environment for relaxation",
    photos: "https://cache.marriott.com/marriottassets/marriott/KGLMC/kglmc-exterior-0030-hor-feat.jpg",

  }
]
export const selectedAccommodationsPayload = {
  selected: {
    "id": "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
    "country": "Rwanda",
    "city": "Kigali",
    "state": "Nyarugenge",
    "streetAddress": "KN 22 ST",
    "locationID": "c6028e0d-ef88-4693-ab49-f37669891724",
    "propertyType": "Hostel",
    "numberOfRooms": 100,
    "price": null,
    "typeOfBed": "Double Decker",
    "title": "Nyarugenge hotel",
    "description": "A serene environment for relaxation",
    "photos": "https://cf.bstatic.com/xdata/images/hotel/270x200/173239978.jpg?k=ad6925a1724ff30c587bab826b1da6ac4eeb055c21b368d6ca3d1921766e1e2b&o=",
    "createdAt": "2021-03-01T09:26:01.315Z",
    "updatedAt": "2021-03-01T09:26:01.315Z"
  },
  checked: true
}
export const deselectedAccommodationsPayload = {
  selected: {
    "id": "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
    "country": "Rwanda",
    "city": "Kigali",
    "state": "Nyarugenge",
    "streetAddress": "KN 22 ST",
    "locationID": "c6028e0d-ef88-4693-ab49-f37669891724",
    "propertyType": "Hostel",
    "numberOfRooms": 100,
    "price": null,
    "typeOfBed": "Double Decker",
    "title": "Nyarugenge hotel",
    "description": "A serene environment for relaxation",
    "photos": "https://cf.bstatic.com/xdata/images/hotel/270x200/173239978.jpg?k=ad6925a1724ff30c587bab826b1da6ac4eeb055c21b368d6ca3d1921766e1e2b&o=",
    "createdAt": "2021-03-01T09:26:01.315Z",
    "updatedAt": "2021-03-01T09:26:01.315Z"
  },
  checked: false
}
export const removeMultiCityPayload = {
  current: 'Kigali, Rwanda',
  destination: 'Kenya',
  accommodation: {
    id: '99cd2fd4-6287-4b4e-bb84-c87b6a66d02b',
    country: 'Kenya',
    city: 'Meru county',
    state: 'Wanyenye',
    streetAddress: 'KN 22 ST',
    locationID: '81e37435-ce52-4cbd-8194-e65072f80497',
    propertyType: 'Hostel',
    numberOfRooms: 10,
    price: null,
    typeOfBed: 'Double Decker',
    title: 'Meru girls hostels',
    description: 'A serene environment for relaxation',
    photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFLwqWS0Wu1-3CDjIQptBgGlbH8nSzqSiJA&usqp=CAU'
  },
  departureDate: '2021-03-24T08:07:54.007Z',
  returnDate: '2021-03-24T08:07:54.020Z'
}

export const locationPayload = {
  "count": 4,
  "rows": [
    {
      "id": "c6028e0d-ef88-4693-ab49-f37669891724",
      "LocationName": "Kigali",
      "country": "Rwanda",
      "description": "The land of a thousand hills",
      "currency": null,
      "link": "https://en.wikipedia.org/wiki/Kigali",
      "createdAt": "2021-03-01T09:26:01.207Z",
      "updatedAt": "2021-03-01T09:26:01.207Z"
    },
    {
      "id": "23fd8031-52d6-4150-958c-c162ba9e8f5c",
      "LocationName": "Musanze",
      "country": "Rwanda",
      "description": "The land of a thousand hills",
      "currency": null,
      "link": "https://en.wikipedia.org/wiki/Kigali",
      "createdAt": "2021-03-01T09:26:01.207Z",
      "updatedAt": "2021-03-01T09:26:01.207Z"
    },
    {
      "id": "81e37435-ce52-4cbd-8194-e65072f80497",
      "LocationName": "Ngara",
      "country": "Kenya",
      "description": "Umoja ndio utulivu mpya kwetu",
      "currency": null,
      "link": "https://en.wikipedia.org/wiki/Kigali",
      "createdAt": "2021-03-01T09:26:01.207Z",
      "updatedAt": "2021-03-01T09:26:01.207Z"
    },
    {
      "id": "3ea5caaf-e10f-45c3-9876-cd690fe27a32",
      "LocationName": "Kampala",
      "country": "Uganda",
      "description": "something to use when testing",
      "currency": null,
      "link": "https://en.wikipedia.org/wiki/Kigali",
      "createdAt": "2021-03-01T09:26:01.207Z",
      "updatedAt": "2021-03-01T09:26:01.207Z"
    }
  ]
}
export const travelRequest = {
  "trip": [
    {
      "originCity": "kigali, Rwanda",
      "destination": "Ngara, kenya",
      "tripDate": "2021-03-03T09:58:01.127Z",
      "returnDate": "2021-03-31T09:58:00.000Z",
      "accommodationId": "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
      "reason": "tripping for work"
    },
    {
      "originCity": "Musanze, Rwanda",
      "destination": "Ngara, Burundi",
      "tripDate": "2021-03-03T09:58:01.127Z",
      "returnDate": "2021-03-31T09:58:00.000Z",
      "accommodationId": "520f2b37-7bac-4490-aa7a-96f15915bcd7",
      "reason": "work travel"
    }
  ]
}
export const accommodationState = {
  pending: false,
  accommodations: accommodationsPayload,
  error: null
}
export const currentLocation = {
  selectedLocation: {
    LocationName: "Kigali",
    country: "Rwanda",
    createdAt: "2021-03-01T09:26:01.207Z",
    currency: null,
    description: "The land of a thousand hills",
    id: "c6028e0d-ef88-4693-ab49-f37669891724",
    link: "https://en.wikipedia.org/wiki/Kigali",
    updatedAt: "2021-03-01T09:26:01.207Z"
  },
  textField: 'currentLocationId-option-0'
}
export const destinationLocation = {
  selectedLocation: {
    LocationName: "Kigali",
    country: "Rwanda",
    createdAt: "2021-03-01T09:26:01.207Z",
    currency: null,
    description: "The land of a thousand hills",
    id: "c6028e0d-ef88-4693-ab49-f37669891724",
    link: "https://en.wikipedia.org/wiki/Kigali",
    updatedAt: "2021-03-01T09:26:01.207Z"
  },
  textField: 'destinationLocationId-option-1'
}
export const openModalPayload = {
  open: true,
  data: {
    id: 'fbc8f4a8-bca2-4ae0-87bc-2408fb1872a7',
    country: 'Kenya',
    city: 'Nairobi',
    state: 'Ngara side',
    streetAddress: 'KN 22 ST',
    locationID: '81e37435-ce52-4cbd-8194-e65072f80497',
    propertyType: 'Hostel',
    numberOfRooms: 10,
    price: null,
    typeOfBed: 'Double Decker',
    title: 'Lelo hostels',
    description: 'A serene environment for relaxation',
    photos: 'https://cf.bstatic.com/images/hotel/max1280x900/277/277241428.jpg'
  }
}
export const selectedLocaton = {
  current: {
    id: '81e37435-ce52-4cbd-8194-e65072f80497',
    LocationName: 'Ngara',
    country: 'Kenya',
    description: 'Umoja ndio utulivu mpya kwetu',
    currency: null,
    link: 'https://en.wikipedia.org/wiki/Kigali',
    createdAt: '2021-03-01T09:26:01.207Z',
    updatedAt: '2021-03-01T09:26:01.207Z'
  },
  destination: {
    id: '23fd8031-52d6-4150-958c-c162ba9e8f5c',
    LocationName: 'Musanze',
    country: 'Rwanda',
    description: 'The land of a thousand hills',
    currency: null,
    link: 'https://en.wikipedia.org/wiki/Kigali',
    createdAt: '2021-03-01T09:26:01.207Z',
    updatedAt: '2021-03-01T09:26:01.207Z'
  },
  accommodation: {
    id: '1254d75c-8d88-4813-a234-b7edea461aa3',
    country: 'Rwanda',
    city: 'Musanze',
    state: 'Downtown',
    streetAddress: 'KN 22 ST',
    locationID: '23fd8031-52d6-4150-958c-c162ba9e8f5c',
    propertyType: 'Hostel',
    numberOfRooms: 100,
    price: null,
    typeOfBed: 'Double Decker',
    title: 'Student hostels',
    description: 'A serene environment for relaxation',
    photos: 'https://www.gorillashotels.com/IMG/rubon6.jpg'
  },
  departureDate: '2021-03-25T21:37:37.256Z',
  returnDate: '2021-03-26T21:37:00.000Z'
}
export const locationState = {
  pending: false,
  locations: locationsPayload,
  error: null
}

let a = 'https://barefoot-nomad-app-v1.herokuapp.com'
export const props = {
  CheckReturningAction: jest.fn(),
  checkTravelDatesAction: jest.fn(),
  getLocationsAction: jest.fn(),
  searchCurrentLocationAction: jest.fn(),
  selectAccommodationAction: jest.fn(),
  handleErrorsAction: jest.fn(),
  closeSnackbar: jest.fn(),
  addTravelReasonAction: jest.fn(),
  sendTravelRequestAction: jest.fn(),
  addMultiCityAction: jest.fn(),
  removeMultiCityAction: jest.fn(),
  openModalAction: jest.fn(),
}
export const props2 = {
  availableLocations: [],
  searchLocationsLoading: false,
  currentLocation: '',
  destinationLocation: '',
  isReturning: false,
  departureDate: '',
  returnDate: '',
  availableAccommodations: [],
  searchAccommodationsLoading: false,
  selectedAccommodation: '',
  selectedLocations: [],
  displaySelection: false,
  displaySelected: false,
  snackBarMessage: {
    open: false,
    message: null,
    severity: ''
  },
  success: false,
  sendLoading: false,
  travelReason: '',
  Modal: {
    open: false,
    data: {}
  }
}
export const dates = {
  departureDate: '2021-03-25T21:37:37.256Z',
  returnDate: '2021-03-26T21:37:00.000Z',
}

export const comfirmProps = {
  availableLocations: [],
  searchLocationsLoading: false,
  currentLocation: {
    id: '81e37435-ce52-4cbd-8194-e65072f80497',
    LocationName: 'Ngara',
    country: 'Kenya',
    description: 'Umoja ndio utulivu mpya kwetu',
    currency: null,
    link: 'https://en.wikipedia.org/wiki/Kigali',
    createdAt: '2021-03-01T09:26:01.207Z',
    updatedAt: '2021-03-01T09:26:01.207Z'
  },
  destinationLocation: {
    id: '23fd8031-52d6-4150-958c-c162ba9e8f5c',
    LocationName: 'Musanze',
    country: 'Rwanda',
    description: 'The land of a thousand hills',
    currency: null,
    link: 'https://en.wikipedia.org/wiki/Kigali',
    createdAt: '2021-03-01T09:26:01.207Z',
    updatedAt: '2021-03-01T09:26:01.207Z'
  },
  departureDate: '2021-03-27T08:05:00.000Z',
  returnDate: '2021-03-31T08:05:00.000Z',
  availableAccommodations: [],
  searchAccommodationsLoading: false,
  selectedAccommodation: {
    id: 'd659e75b-0d6f-4253-b3cc-3a1d402b64f5',
    country: 'Rwanda',
    city: 'Musanze',
    state: 'Up hills',
    streetAddress: 'KN 22 ST',
    locationID: '23fd8031-52d6-4150-958c-c162ba9e8f5c',
    propertyType: 'Hostel',
    numberOfRooms: 100,
    price: null,
    typeOfBed: 'Double Decker',
    title: 'Musanze political resots',
    description: 'A serene environment for relaxation',
    photos: 'https://lh3.googleusercontent.com/proxy/k6XVeEROdqZ1LXqJw2IyiuERvv_3mAY5MHAxuwMDTE8Mq_aZbSSU9Zio1fpFnZMhWYy3T8MhwBSOjD6QV6qh4wsBQ_oHAJgsxGiRWyHI_ZIEUcyRtdUtth8rrmNPNw'
  },
  selectedLocations: [
    {
      current: {
        id: 'c6028e0d-ef88-4693-ab49-f37669891724',
        LocationName: 'Kigali',
        country: 'Rwanda',
        description: 'The land of a thousand hills',
        currency: null,
        link: 'https://en.wikipedia.org/wiki/Kigali',
        createdAt: '2021-03-01T09:26:01.207Z',
        updatedAt: '2021-03-01T09:26:01.207Z'
      },
      destination: {
        id: '81e37435-ce52-4cbd-8194-e65072f80497',
        LocationName: 'Ngara',
        country: 'Kenya',
        description: 'Umoja ndio utulivu mpya kwetu',
        currency: null,
        link: 'https://en.wikipedia.org/wiki/Kigali',
        createdAt: '2021-03-01T09:26:01.207Z',
        updatedAt: '2021-03-01T09:26:01.207Z'
      },
      accommodation: {
        id: '99cd2fd4-6287-4b4e-bb84-c87b6a66d02b',
        country: 'Kenya',
        city: 'Meru county',
        state: 'Wanyenye',
        streetAddress: 'KN 22 ST',
        locationID: '81e37435-ce52-4cbd-8194-e65072f80497',
        propertyType: 'Hostel',
        numberOfRooms: 10,
        price: null,
        typeOfBed: 'Double Decker',
        title: 'Meru girls hostels',
        description: 'A serene environment for relaxation',
        photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFLwqWS0Wu1-3CDjIQptBgGlbH8nSzqSiJA&usqp=CAU'
      },
      departureDate: '2021-03-26T08:05:49.174Z',
      returnDate: '2021-03-27T08:05:00.000Z'
    }
  ],
  displaySelection: false,
  displaySelected: false,
  snackBarMessage: {
    open: false,
    message: null,
    severity: ''
  },
  success: false,
  sendLoading: false,
  travelReason: 'zfsefewfewfew',
  Modal: {
    open: false,
    data: {}
  }
}
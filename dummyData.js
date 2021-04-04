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

export const userProfile = {
  address: "Kigali",
  bio: null,
  email: "manager_id@gmail.com",
  first_name: "Mugabo",
  id: "38eb202c - 3f67 - 4eed - b7ac - 9c31bc226e0c",
  language: "French",
  last_name: "Manager",
  manager_id: null,
  occupation: "Software Developer",
  profile_picture: "https://res.cloudinary.com/mjackson/image/upload/v1611135351/Albert-einstein-profile-picture-512x512.png.cf_ouqza2.png",
  refreshtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiNzI1NGE5ZTctMmUxYi00ZjgzLWFkNzMtNzhiOTBkZDNkZjc3IiwidXNlcm5hbWUiOiJtYW5hZ2VyX2lkIiwiaWF0IjoxNjExMTMzNDIwLCJleHAiOjE2MTE3MzgyMjB9.2X_RFNNdIGr-hc1_h63yBuLMGNsOopt2cRAW4jXT4fc",
  user_role_id: "7254a9e7-2e1b-4f83-ad73-78b90dd3df77",
  username: "manager_id",
  verified: true
}

export const signupState = {
  requesting: false,
  errorOpen: false,
  error: ""
}
export const locationsPayload = {
  rows: [
    {
      id: "c6028e0d-ef88-4693-ab49-f37669891724",
      LocationName: "Kigali",
      country: "Rwanda",
      description: "The land of a thousand hills",
      link: "https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/africa/downtown-kigali-rwanda.adapt.1900.1.jpg",
    }
  ]
}

export const locations=[
    {
      id: "c6028e0d-ef88-4693-ab49-f37669891724",
      LocationName: "Kigali",
      country: "Rwanda",
      description: "The land of a thousand hills",
      link: "https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/africa/downtown-kigali-rwanda.adapt.1900.1.jpg",
    }
  ]

export const accommodationsPayload = {
  rows: [
    {

      id: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
      country: "Rwanda",
      city: "Kigali",
      title: "Marriot Hotel",
      description: "A serene environment for relaxation",
      photos: "https://cache.marriott.com/marriottassets/marriott/KGLMC/kglmc-exterior-0030-hor-feat.jpg",

    }
  ]
}

  export const accommodationAminitiesPayload ={
    "singleAccommodation": {
        "id": "7a7ce9e2-ce8a-4d76-9626-cfabf2009e42",
        "country": "Rwanda",
        "city": "Musanze",
        "state": "Rusizi",
        "streetAddress": "KN 22 ST",
        "locationID": "23fd8031-52d6-4150-958c-c162ba9e8f5c",
        "propertyType": "Hotel",
        "numberOfRooms": 500,
        "price": 3000000,
        "typeOfBed": "Decker",
        "title": "bisate lodge",
        "description": "Bisate is located in the natural amphitheatre of an eroded volcanic cone, with dramatic views of the peaks of the Bisoke and Karisimbi volcanoes rearing up through Afro-alpine forests.",
        "photos": "https://res.cloudinary.com/barefootnomadcohort4/image/upload/v1616576198/bisate-lodge-9_qjbmmf.jpg"
    },
    "amenities": {
        "wifi": false,
        "airConditioner": true,
        "shampoo": false,
        "ironing": true,
        "tv": false,
        "smokeDetector": true,
        "fireExtinguisher": false,
        "lockOnDoor": true
    }
}
  export const rolePayload = {
    rows:[
      {
        
          id: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
          name: "Requester",
          description: "requster"
      
      }
    ]}
  
    export const permissionsPayload = {
      permissions:{
        "edit profile": 0,"assign requesters to manager": 0,"create travel requests": 0,"view travel requests": 0,"edit travel requests": 0,"cancel travel requests": 0,"approve direct reports travel requests": 0,"view direct reports travel requests": 0,"reject direct reports travel requests": 0,"view accommodations": 0,"create accommodations": 0,"update accommodations": 0,"delete accommodations": 0,"book accommodations": 0,"view locations": 0,"create locations": 0,"update locations": 0,"delete locations": 0,"view statistics": 0
      }
  }

  export const chattedUsers = [
    {
      id: 1,
      first_name: 'first',
      last_name: 'last',
      profile_picture: 'image.png'
    },
    {
      id: 2,
      first_name: 'secont',
      last_name: 'name',
      profile_picture: 'image1.png'
    }
  ]

  export const allUsers = [
    {
      id: 1,
      first_name: 'first',
      last_name: 'last',
      profile_picture: 'image.png'
    },
    {
      id: 2,
      first_name: 'secont',
      last_name: 'name',
      profile_picture: 'image1.png'
    }
  ]
export const allTravelPayload = [
  {
    travelRequestInfo: {
      travelId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
      managerId: "0ce36391-2c08-4703-bddb-a4ea8cccbbc5",
      userId: "83b2a3e7-9ba4-4d3f-b3a3-d31940ee2edc",
      status: "approved",
      createdAt: "2021-01-11T20:08:41.421Z",
      updatedAt: "2021-03-01T08:34:29.612Z",
      Trip: [
        {
          tripId: "83b2a3e7-9ba4-3f4d-b3a3-d31940ee2edc",
          originCity: "Kigali",
          destination: "Cairo",
          reason: "Trippin",
          tripDate: "2020-10-10T00:00:00.000Z",
          returnDate: "2021-10-10T00:00:00.000Z",
          accommodationId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
          createdAt: "2021-01-11T20:08:41.427Z",
          updatedAt: "2021-01-11T20:08:41.427Z",
          travelId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5"
        },
        {
          tripId: "83b2a3e7-4ab9-3f4d-b3a3-d31940ee2edc",
          originCity: "Kigali",
          destination: "Kampala",
          reason: "Trippin",
          tripDate: "2020-10-10T00:00:00.000Z",
          returnDate: "2021-10-10T00:00:00.000Z",
          accommodationId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
          createdAt: "2021-01-11T20:08:41.427Z",
          updatedAt: "2021-01-11T20:08:41.427Z",
          travelId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5"
        },
        {
          tripId: "1a52f79e-568a-45b3-9151-4dfa40bb1217",
          originCity: " Kigali",
          destination: "Nairobi",
          reason: "Trippin",
          tripDate: "2020-10-10T00:00:00.000Z",
          returnDate: "2021-10-10T00:00:00.000Z",
          accommodationId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc8",
          createdAt: "2021-01-11T20:08:41.427Z",
          updatedAt: "2021-01-11T20:08:41.427Z",
          travelId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5"
        },
        {
          tripId: "aeebcf33-d125-44ce-b8c1-f5d5e8b75f13",
          originCity: "Kigali",
          destination: "Nairobi",
          reason: "Trippin",
          tripDate: "2020-10-10T00:00:00.000Z",
          returnDate: "2021-10-10T00:00:00.000Z",
          accommodationId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc8",
          createdAt: "2021-01-11T20:08:41.427Z",
          updatedAt: "2021-01-11T20:08:41.427Z",
          travelId: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5"
        }
      ]
    },
    userInfo: {
      username: "requesterOne",
      firstName: "Requester",
      lastName: "One",
      profilePpicture: "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
    },
    accommodationInfo: [
      {
        id: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
        country: "Rwanda",
        city: "Kigali",
        state: "Nyarugenge",
        streetAddress: "KN 22 ST",
        locationID: "c6028e0d-ef88-4693-ab49-f37669891724",
        propertyType: "Hostel",
        numberOfRooms: 100,
        typeOfBed: "Double Decker",
        title: "Kigali Hostels",
        description: "A serene environment for relaxation",
        photos: "image.png"
      },
      {
        id: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
        country: "Rwanda",
        city: "Kigali",
        state: "Nyarugenge",
        streetAddress: "KN 22 ST",
        locationID: "c6028e0d-ef88-4693-ab49-f37669891724",
        propertyType: "Hostel",
        numberOfRooms: 100,
        typeOfBed: "Double Decker",
        title: "Kigali Hostels",
        description: "A serene environment for relaxation",
        photos: "image.png"
      },
      {
        error: "No info on this accomodation"
      },
      {
        error: "No info on this accomodation"
      }
    ]
  },
  {
    travelRequestInfo: {
      travelId: "6a631198-cb98-4925-82fc-b00be0d34e32",
      managerId: "0ce36391-2c08-4703-bddb-a4ea8cccbbc5",
      userId: "d74fcc5e-5755-4366-83ef-cf306b013c46",
      status: "rejected",
      createdAt: "2021-01-11T20:09:02.833Z",
      updatedAt: "2021-03-01T08:54:54.237Z",
      Trip: []
    },
    userInfo: {
      username: "pushrequester",
      firstName: "pushRequester",
      lastName: "One",
      profilePpicture: "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
    }
  },
]

export const allTravelRequestState = {
  loading: false,
  travel: allTravelPayload,
  error: null
}


export const singleTravelPayload = [{
  travelRequestInfo: {
    travelId: "6a631198-cb98-4925-82fc-b00be0d34e32",
    managerId: "0ce36391-2c08-4703-bddb-a4ea8cccbbc5",
    userId: "d74fcc5e-5755-4366-83ef-cf306b013c46",
    status: "rejected",
    createdAt: "2021-01-11T20:09:02.833Z",
    updatedAt: "2021-03-01T08:54:54.237Z",
    Trip: []
  },
  userInfo: {
    username: "pushrequester",
    firstName: "pushRequester",
    lastName: "One",
    profilePpicture: "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
  }
}]
export const singleTravelState = {
  loading: false,
  error: null,
  travel: singleTravelPayload,
}

export const updateTravelState = {
  loading: false,
  error: null,
  travel: null
}

export const UserInfo = {
  username: "pushrequester",
  firstName: "pushRequester",
  lastName: "One",
  profilePpicture: "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
}

export const accommodationInfo = [
  {
    id: "598d90a3-68e6-43ac-970a-2855657be478",
    country: "Rwanda",
    city: "Kigali",
    state: "Kicukiro",
    streetAddress: "KN 45 ST",
    locationID: "c6028e0d-ef88-4693-ab49-f37669891724",
    propertyType: "Hostel",
    numberOfRooms: 100,
    typeOfBed: "Double Decker",
    title: "Marina Hotel",
    description: "A serene environment for relaxation",
    photos: "image2.png"
  }
]

export const travelRequestInfo = {
  travelId: "59ba77ce-3649-4b8a-bed6-b127cc1c530f",
  managerId: "0ce36391-2c08-4703-bddb-a4ea8cccbbc5",
  userId: "d74fcc5e-5755-4366-83ef-cf306b013c46",
  status: "approved",
  createdAt: "2021-03-02T11:18:36.501Z",
  updatedAt: "2021-03-02T11:21:00.554Z",
  Trip: [
    {
      tripId: "98624254-da4c-47bd-91da-53d9d89172cc",
      originCity: "MUSANZE",
      destination: "KARONGI",
      reason: "Research and market development trip in rular areas",
      tripDate: "2020-12-20T08:53:31.303Z",
      returnDate: null,
      accommodationId: "598d90a3-68e6-43ac-970a-2855657be478",
      createdAt: "2021-03-02T11:18:36.600Z",
      updatedAt: "2021-03-02T11:18:36.600Z",
      travelId: "59ba77ce-3649-4b8a-bed6-b127cc1c530f"
    }
  ]
}
export const accommodationState = {
  pending: true,
  accommodations: accommodationsPayload,
  accommodation: {},
  nation:null,
  amenities:{},
  accommodationsByLocation:[],
  selectedAccommodation:null,
  count:null,
  error: null,
  temp:null,
  accId:null
}

export const fetchAccommodationByLocationPayload={
  "status": 200,
  "page": 1,
  "accommodations": {
      "count": 15,
      "rows": [
          {
              "id": "122a0d86-8b78-4bb8-b28f-8e5f7811c456",
              "country": "Rwanda",
              "city": "Kigali",
              "state": "Kagarama",
              "streetAddress": "KN 22 ST",
              "locationID": "23fd8031-52d6-4150-958c-c162ba9e8f5c",
              "propertyType": "Hotel",
              "numberOfRooms": 500,
              "price": 25000,
              "typeOfBed": "Decker",
              "title": "Garama hotel",
              "description": "Best bedrooms",
              "photos": "https://res.cloudinary.com/barefootnomadcohort4/image/upload/v1616493369/93989612_kocs6i.jpg",
              "createdAt": "2021-03-24T10:33:51.926Z",
              "updatedAt": "2021-03-24T10:33:51.926Z"
          },
          {
              "id": "28debeec-6adc-4dbe-a3c0-d3480c49ee76",
              "country": "Rwanda",
              "city": "Nyungwe",
              "state": "Rusizi",
              "streetAddress": "KN 22 ST",
              "locationID": "23fd8031-52d6-4150-958c-c162ba9e8f5c",
              "propertyType": "Hotel",
              "numberOfRooms": 500,
              "price": 500000,
              "typeOfBed": "Decker",
              "title": "Nyungwe hotel",
              "description": "Best bedrooms",
              "photos": "https://res.cloudinary.com/barefootnomadcohort4/image/upload/v1616493171/Facts-about-Virunga-National-Park-750x450_cr4alx.jpg",
              "createdAt": "2021-03-24T10:33:51.926Z",
              "updatedAt": "2021-03-24T10:33:51.926Z"
          },
          {
              "id": "2d647115-3af7-4df0-99aa-6656c764829f",
              "country": "Rwanda",
              "city": "Kigali",
              "state": "Kagarama",
              "streetAddress": "KN 22 ST",
              "locationID": "23fd8031-52d6-4150-958c-c162ba9e8f5c",
              "propertyType": "Hotel",
              "numberOfRooms": 500,
              "price": 5000000,
              "typeOfBed": "Double and single",
              "title": "One and Only",
              "description": "The best luxury hotel in the middle of the virunga national park in Rwanda",
              "photos": "https://res.cloudinary.com/barefootnomadcohort4/image/upload/v1616572403/One-and-Only-Nyungwe-Huose-750x450_vgs415.jpg",
              "createdAt": "2021-03-24T10:33:51.926Z",
              "updatedAt": "2021-03-24T10:33:51.926Z"
          },
          {
              "id": "4d5b1b29-51e4-4db5-8b99-57fd76bd5544",
              "country": "Rwanda",
              "city": "Kigali",
              "state": "Kagarama",
              "streetAddress": "KN 22 ST",
              "locationID": "23fd8031-52d6-4150-958c-c162ba9e8f5c",
              "propertyType": "Hotel",
              "numberOfRooms": 500,
              "price": 30000,
              "typeOfBed": "Decker",
              "title": "Hill Top hotel hotel",
              "description": "Best views",
              "photos": "https://res.cloudinary.com/barefootnomadcohort4/image/upload/v1616493292/hotel-hilltop-country_fwr16e.jpg",
              "createdAt": "2021-03-24T10:33:51.926Z",
              "updatedAt": "2021-03-24T10:33:51.926Z"
          },
          {
              "id": "2830496d-65e3-4289-b6e9-819933637ca6",
              "country": "Rwanda",
              "city": "Kigali",
              "state": "Kiyovu",
              "streetAddress": "KN 22 ST",
              "locationID": "23fd8031-52d6-4150-958c-c162ba9e8f5c",
              "propertyType": "Hotel",
              "numberOfRooms": 500,
              "price": 500000,
              "typeOfBed": "Decker",
              "title": "Marriot Hotel",
              "description": "Located in the beautiful and silent part of kigali Kiyovu",
              "photos": "https://res.cloudinary.com/barefootnomadcohort4/image/upload/v1616493334/93100479_ovlmlf.jpg",
              "createdAt": "2021-03-24T10:33:51.926Z",
              "updatedAt": "2021-03-24T10:33:51.926Z"
          },
          {
              "id": "5efb6fd8-d43a-41b5-b021-d6fe1536b88b",
              "country": "Rwanda",
              "city": "Rubavu",
              "state": "Rubavu",
              "streetAddress": "KN 22 ST",
              "locationID": "23fd8031-52d6-4150-958c-c162ba9e8f5c",
              "propertyType": "Hotel",
              "numberOfRooms": 500,
              "price": 50000,
              "typeOfBed": "Decker",
              "title": "The Manor Hotel",
              "description": "The hotel at the beautiful Kivu beach, best place to spend your summer vaccation ",
              "photos": "https://res.cloudinary.com/barefootnomadcohort4/image/upload/v1616493273/themanorhotelsmall1_maevju.jpg",
              "createdAt": "2021-03-24T10:33:51.926Z",
              "updatedAt": "2021-03-24T10:33:51.926Z"
          }
      ]
  },
  "nation": "Rwanda"
}


export const bookAccommodationState={
  pending: false,
  snackBarMessage: {
    open: false,
    severity: '',
    message: null
  }
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
  locations:locations,
  error: null
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

export const vList = [
  'visitor1@email.com',
  'visitor2@email.com'
]

export const messageList = [
  {
    id: 1,
    sender: 'fh839h973jjfbvdy8i339',
    receiver: 'fh839h973jjfbvdy8ijd',
    message: 'Hi',
    type: 'plain-text'
  },
  {
    id: 1,
    sender: 'fh839h973jjfbvdy8i33op',
    receiver: 'fh839h973jjfbvdy8itet',
    message: '/images/image.png',
    type: 'image/jpeg'
  }
]

export const supportReply = {
  id: 1,
  sender: 'fh839h973jjfbvdy8i33op',
  receiver: 'fh839h973jjfbvdy8itet',
  message: '/images/image.png',
  type: 'image/jpeg'
}
export const location= {

  id: "0880b2d1-662c-4782-8aed-252fdd0644c4",
  LocationName: "Dubai",
  country: "United Arab Emirates",
  description: "The world's biggest trade hub and tourist attractor",
  currency: "EUR",
  link: "https://res.cloudinary.com/nowo-ltd/image/upload/v1616179656/barefoot%20uploads/xk48tsqz9afl49dkzkhd.jpg",
  createdAt: "2021-03-19T18:49:00.222Z",
  updatedAt: "2021-03-19T18:49:00.222Z"

}

export const locationsData= {
  locations: [
    {
      id: "0880b2d1-662c-4782-8aed-252fdd0644c4",
      LocationName: "Dubai",
      country: "United Arab Emirates",
      description: "The world's biggest trade hub and tourist attractor",
      currency: "EUR",
      link: "https://res.cloudinary.com/nowo-ltd/image/upload/v1616179656/barefoot%20uploads/xk48tsqz9afl49dkzkhd.jpg",
      createdAt: "2021-03-19T18:49:00.222Z",
      updatedAt: "2021-03-19T18:49:00.222Z"
    }
]};

export const accomodation= {
    id: "f34e8426-8591-4ab0-90a5-6d716833224b",
    country: "Dubai",
    city: "Dubai",
    state: "Al Hilal",
    streetAddress: "St 21, Dub, UAE",
    locationID: "0880b2d1-662c-4782-8aed-252fdd0644c4",
    propertyType: "Motel",
    numberOfRooms: 12,
    price: 123000,
    typeOfBed: "single",
    title: "Dubai rest view hotel",
    description: "This the best place for tourists to rest in Dubai",
    photos: "https://res.cloudinary.com/nowo-ltd/image/upload/v1616179879/barefoot%20uploads/txmzilh8lxwv4u63mvz3.jpg",
    createdAt: "2021-03-19T18:52:16.774Z",
    updatedAt: "2021-03-19T18:52:16.774Z"
}
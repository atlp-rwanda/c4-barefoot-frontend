export const user = [
  {
    "first_name":"M",
    "last_name":"JAckson",
    "email":"jackson.novelty@gmail.com",
    "occupation":"Programming",
    "username":"jacks",
    "bio":"Software Developer",
    "address":"kk 509 st",
    "language":"Kinyarwanda",
    "password":"12345678",
    "profile_picture":"https://res.cloudinary.com/mjackson/image/upload/v1609304524/Screen_Shot_2020-12-29_at_08.21.43_qe7pem.png"
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


 

  export const locationState = {
    pending: false,
    locations: locationsPayload,
    error: null
  }



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



export const accommodationsPayload = {
  rows:[
    {
      
        id: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
        country: "Rwanda",
        city: "Kigali",
        title: "Marriot Hotel",
        description: "A serene environment for relaxation",
        photos: "https://cache.marriott.com/marriottassets/marriott/KGLMC/kglmc-exterior-0030-hor-feat.jpg",
    
    }
  ]}

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

  export const allTravelPayload =[
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
                  originCity:" Kigali",
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
      "travelId": "1a27b15c-4138-43ac-bb64-c0b4e2c919a0",
      "managerId": "fb94de4d-47ff-4079-89e8-b0186c0a3be8",
      "userId": "0ce36391-2c08-4703-bddb-a4ea8cccbbc5",
      "status": "pending",
      "createdAt": "2021-03-28T07:02:57.389Z",
      "updatedAt": "2021-03-28T07:02:57.436Z",
      "Trip": [
          {
              "tripId": "d81145c6-5778-43b0-aac9-5cf8360f3722",
              "originCity": "kuryanyuma",
              "destination": "biryogo",
              "reason": "travelling",
              "tripDate": "2020-12-11T06:48:48.376Z",
              "returnDate": null,
              "accommodationId": "520f2b37-7bac-4490-aa7a-96f15915bcd7",
              "createdAt": "2021-03-28T07:02:57.590Z",
              "updatedAt": "2021-03-28T07:02:57.590Z",
              "travelId": "1a27b15c-4138-43ac-bb64-c0b4e2c919a0"
          }
      ]
  },
    userInfo: {
      "username": "managerOne",
      "firstName": "Manager",
      "lastName": "One",
      "profilePpicture": "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
  },
  accomodationInfo: [
    {
        "id": "520f2b37-7bac-4490-aa7a-96f15915bcd7",
        "country": "Rwanda",
        "city": "Kigali",
        "state": "Nyarugenge",
        "streetAddress": "KN 22 ST",
        "locationID": "c6028e0d-ef88-4693-ab49-f37669891724",
        "propertyType": "Hostel",
        "numberOfRooms": 0,
        "typeOfBed": "Double Decker",
        "title": "Kigali Hostels",
        "description": "A serene environment for relaxation",
        "photos": "image.png"
    }
]
}]
export const singleTravelState= {
  loading: false,
  error: null,
  travel: singleTravelPayload,
}

export const updateTravelState= {
  loading: false,
  error: null,
  travel: null
}

export const UserInfo= {
    username: "pushrequester",
    firstName: "pushRequester",
    lastName: "One",
    profilePpicture: "https://www.cobdoglaps.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"  
}

export const  accommodationInfo= [
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

export const  travelRequestInfo= {
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
  ]}
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
export const locationState = {
  pending: false,
  locations: locationsPayload,
  error: null
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
  CheckReturningAction : jest.fn(),
  checkTravelDatesAction: jest.fn(),
  getLocationsAction: jest.fn(),
  searchCurrentLocationAction: jest.fn(),
  selectAccommodationAction: jest.fn(),
  handleErrorsAction:jest.fn(),
  closeSnackbar: jest.fn(),
  addTravelReasonAction: jest.fn(),
  sendTravelRequestAction: jest.fn(),
  addMultiCityAction: jest.fn(),
  removeMultiCityAction: jest.fn(),
  openModalAction: jest.fn(),
}
export const props2={
  searchLocations: [],
  searchLocationsLoading: false,
  currentLocation: '',
  destinationLocation: '',
  isReturning: false,
  departureDate: '',
  returnDate: '',
  searchAccommodations: [],
  searchAccommodationsLoading:false,
  selectedAccommodation:[],
  selectedLocations:[],
  displaySelection:false,
  displaySelected: false,
  snackBarMessage:{
      open: false,
      message: null,
      severity: ''
  },
  success: false,
  sendLoading:false,
  travelReason: '',
  Modal: {
      open: false,
      data:{}
  }
}
export const notificationPayload = {
  "message": "user's Notifications",
  "notifications": {
      "count": 2,
      "rows": [
          {
              "id": "e9880544-6493-4511-b6f1-bd91eecf8b43",
              "title": "your user has made a Travel Request",
              "message": "The user you are assigned to has made a travel request  ",
              "travelId": "9b1e1ca6-2fc2-42bb-86c0-86a329703393",
              "status": "not readed",
              "createdAt": "2021-03-28T07:03:44.567Z",
              "updatedAt": "2021-03-28T07:03:44.567Z",
              "user_id": "fb94de4d-47ff-4079-89e8-b0186c0a3be8"
          },
          {
              "id": "af772f27-e052-4445-8ed9-80ff8c71f802",
              "title": "your user has made a Travel Request",
              "message": "The user you are assigned to has made a travel request  ",
              "travelId": "1a27b15c-4138-43ac-bb64-c0b4e2c919a0",
              "status": "not readed",
              "createdAt": "2021-03-28T07:02:57.589Z",
              "updatedAt": "2021-03-28T07:02:57.589Z",
              "user_id": "fb94de4d-47ff-4079-89e8-b0186c0a3be8"
          }
      ]
  }
}
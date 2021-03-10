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
  rows:[
    {
      id: "c6028e0d-ef88-4693-ab49-f37669891724",
      LocationName: "Kigali",
      country: "Rwanda",
      description: "The land of a thousand hills",
      link: "https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/africa/downtown-kigali-rwanda.adapt.1900.1.jpg",
    }
  ]}

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

  export const accommodationState = {
    pending: false,
    accommodations: accommodationsPayload,
    error: null
  }

  


export const accommodationState = {
  pending: false,
  accommodations: accommodationsPayload,
  error: null
}

export const locationState = {
  pending: false,
  locations: locationsPayload,
  error: null
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
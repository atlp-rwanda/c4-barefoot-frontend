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

export const accommodationsPayload = [
    {
      
        id: "0ce36391-2c08-3074-bddb-a4ea8cccbbc5",
        country: "Rwanda",
        city: "Kigali",
        title: "Marriot Hotel",
        description: "A serene environment for relaxation",
        photos: "https://cache.marriott.com/marriottassets/marriott/KGLMC/kglmc-exterior-0030-hor-feat.jpg",
    
    }
  ]

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
  ]
}
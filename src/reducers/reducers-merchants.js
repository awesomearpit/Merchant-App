let initialState = {
  merchants: [
    {
      id: 0,
      firstName: "Max",
      lastName: "Muller",
      avatarUrl: "www.google.com",
      emailId: "max@gmail.com",
      phone: 97556221,
      hasPremium: 1
    },
    {
      id: 1,
      firstName: "Jeff",
      lastName: "Bosz",
      avatarUrl: "www.google1.com",
      emailId: "jeff@gmail.com",
      phone: 9683221,
      hasPremium: 0
    },
    {
      id: 2,
      firstName: "Robert",
      lastName: "Lewandowski",
      avatarUrl: "www.rbl.com",
      emailId: "robert@gmail.com",
      phone: 6511906,
      hasPremium: 1
    }
  ],
  selectedMerchant: {},
  selectedMerchantBids: [],
  sortType: "asc"
};

const merchantsObj = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MERCHANT":
      return {
        ...state,
        merchants: [
          ...state.merchants,
          {
            id: Math.floor(Math.random() * 900) + 100,
            firstName: action.merchant.firstName,
            lastName: action.merchant.lastName,
            emailId: action.merchant.emailId,
            avatarUrl: action.merchant.avatarUrl,
            phone: action.merchant.phone,
            hasPremium: action.merchant.hasPremium
          }
        ]
      };
    // break;

    case "SET_SELECTED_MERCHANT":
      let selectedMerchant = state.merchants.filter(
        merchant => merchant.id === action.id
      );
      selectedMerchant = selectedMerchant.length ? selectedMerchant[0] : {};
      return {
        ...state,
        selectedMerchant
      };
    // break;

    case "DELETE_MERCHANT":
      return {
        ...state,
        merchants: state.merchants.filter(merchant => merchant.id !== action.id)
      };
    // break;

    default:
      return state;
  }
};

export default merchantsObj;

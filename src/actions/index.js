export function addMerchant(merchant) {
  return {
    type: "ADD_MERCHANT",
    merchant: merchant
  };
}

export function deleteMerchant(id) {
  return {
    type: "DELETE_MERCHANT",
    id
  };
}

export function setSelectedMerchant(id) {
  return {
    type: "SET_SELECTED_MERCHANT",
    id
  };
}

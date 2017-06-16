// helper to change all fields of redux-form (functionality doesn't exist in library)

export const populateFormFields = (reduxChangeCB, data, formName) => {
  Object.keys(data).forEach(field => reduxChangeCB(formName, field, data[field]))
}

export const addContact = (contact) => ({
  type: 'contacts/addContact',
  payload: contact,
});

export const deleteContact = (id) => ({
  type: 'contacts/deleteContact',
  payload: id,
});

export const setFilter = (filter) => ({
  type: 'filter/setFilter',
  payload: filter,
});
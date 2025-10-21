//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(200).json({ message: "Create a contact" });
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact of id=${req.params.id}` });
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const putContact = (req, res) => {
  res.status(200).json({ message: `Update contact of id=${req.params.id}` });
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact of id=${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  putContact,
  deleteContact,
};

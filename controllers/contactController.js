// Whenever there is an exception, the asyncHandler will pass it to the errorHandler middleware
const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("Request body: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory.");
  }

  res.status(200).json({ message: "Contact created successfully." });
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact of id=${req.params.id}` });
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const putContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact of id=${req.params.id}` });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact of id=${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  putContact,
  deleteContact,
};

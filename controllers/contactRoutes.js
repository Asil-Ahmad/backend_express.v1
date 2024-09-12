const contacts = [
  {
    user_id: "0",
    name: "Alice Smith",
  },
  {
    user_id: "1",
    name: "Bob Johnson",
  },
  {
    user_id: "2",
    name: "Carol Williams",
  },
  {
    user_id: "3",
    name: "David Brown",
  },
  {
    user_id: "4",
    name: "Eve Davis",
  },
]; //default user data

//This is to get contact details
const getContacts = (req, res, next) => {
  res.send(contacts);
};

//This is to create contact
const createContacts = (req, res, next) => {
  // console.log("Request Body", req.body.user_id);
  const username = req.body.name;
  const userID = req.body.user_id;

  const { user_id, name } = req.body; //we destructure this so we can get the following data
  if (!user_id || !name) {
    res.status(400);
    res.json({ message: "Failed to create contact" });
  } else {
    const newContact = { userID, username };
    contacts.push(newContact); //since its a static data we use push since its an array
    res
      .status(201)
      .json({ message: "Create Contact Data Successful", contacts: contacts });
  }
};

//This is to update contact
const updateContacts = (req, res, next) => {
  const id = req.params.id;
  // console.log(id, contacts[id].name);

  const filterContacts = contacts.filter((contact) => contact.user_id === id);
  filterContacts[0].name = req.body.name;
  console.log("REQUEST:-", req.url);

  res.json({
    message: `user with ID ${req.params.id}`,
    Filtered_Contacts: filterContacts,
  });
};

//This is to delete contact details
const deleteContacts = (req, res, next) => {
  const id = req.params.id;
  // console.log(id, contacts[id].name);

  const filterContacts = contacts.filter((contact) => contact.user_id !== id);
  console.log(filterContacts);

  res.json({
    message: `user with ID ${req.params.id}`,
    Filtered_Contacts: filterContacts,
  });
};

module.exports = {
  getContacts,
  createContacts,
  updateContacts,
  deleteContacts,
};

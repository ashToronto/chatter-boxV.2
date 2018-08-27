const nextMessageID = 0;
const nextUserID = 0;

// ACTIONS
// adds message and author SENDING A MESSAGE
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageID,
  author,
  message,
});

const addUSER = (name) => ({
  type: types.ADD_USER,
  id: nextUserID++,
  name,
});

// adds message and author RECEIVING A MESSAGE
const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageID++,
  message,
});

const userList = (name) => ({
  type: types.USER_LIST,
  id: nextMessageID++,
  users,
});

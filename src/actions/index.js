const nextMessageID = 0;
const nextUserID = 0;

// adds message and author
export const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: nextMessageID++
});

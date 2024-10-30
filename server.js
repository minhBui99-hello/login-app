var admin = require("firebase-admin");

var serviceAccount = require("./service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

admin
  .auth()
  .verifyIdToken(
    "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU2YWMzNTcyNzY3ZGUyNjE0ZmM1MTA4NjMzMDg3YTQ5MjMzMDNkM2IiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWluaCBCdWkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTFR2NkhSRDFRZk0tNUpUdXJQUm10Uk5BRzJpSjJ6akJodzlpV0VsZTE0S1EtOVJBPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3NpeHRoLWdyYW1tYXItNDE3MDA5IiwiYXVkIjoic2l4dGgtZ3JhbW1hci00MTcwMDkiLCJhdXRoX3RpbWUiOjE3MzAyODY0NzQsInVzZXJfaWQiOiIzT2FITnpEYW1tU0lCdXBPV0FTVDRqcUFjcW4yIiwic3ViIjoiM09hSE56RGFtbVNJQnVwT1dBU1Q0anFBY3FuMiIsImlhdCI6MTczMDI4NjQ3NCwiZXhwIjoxNzMwMjkwMDc0LCJlbWFpbCI6Im1pbmhAaW1icmFjZS5jbyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA0NDU4NDg5ODQyNTUwNzg0NDY2Il0sImVtYWlsIjpbIm1pbmhAaW1icmFjZS5jbyJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.OFE8T-U3lfG-59fTwDQtUWp4sCXbyWrSrmIO9uklgCbV9uddXT7bdFlhYtZyvQtqNi-rJBMEIoDQ-ZkJxPRlkMyNSPuPw0Rn_NUKJMT2on_zG0NU9PFKiwRvxcqgb3sFp50WQKsduDNT14lyQ8eDSr2MJKfQC_DF0GB8t6TuDElUMD2MW7ONCGssFO-iTxtaUyubDnsLZ7Xs5Mub1TuDGNQTAj9lInUo-wRWC0rYaTLzXzbu2eyivh_MGwlv05Vc6vKP4zJSSU1By6GWfulAQVdOIOG2hPAAvzKZ6TSYpQCdOUj63jk9LphTLyhfNtJ_dBDB8QzjAjxTxoS2BWyL5g"
  )
  .then((decodedToken) => {
    var uid = decodedToken.uid;
    console.log("UID:", decodedToken);
    // ...
  });

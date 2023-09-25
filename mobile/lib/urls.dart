Uri retrieveUserUrl =
    Uri.parse('http://192.168.245.223:8000/auth/user-details/');

Uri createUserUrl = Uri.parse('http://192.168.245.223:8000/auth/signup/');

Uri createDissertationUrl =
    Uri.parse('http://192.168.245.223:8000/dissertation/create/');

Uri loginUserUrl = Uri.parse('http://192.168.245.223:8000/auth/login/');

Uri retrieveDissertationUrl =
    Uri.parse('http://192.168.245.223:8000/dissertation/get-all/');

Uri retrieveMyDissertationUrl =
    Uri.parse('http://192.168.245.223:8000/dissertation/get/');

Uri deleteDissertationUrl(int pk) {
  String finalUrl = 'http://192.168.245.223:8000/dissertation/delete/$pk/';
  return Uri.parse(finalUrl);
}

Uri retrieveDissertationDetailsUrl(int pk) {
  String finalUrl = 'http://192.168.245.223:8000/dissertation/get/$pk/';
  return Uri.parse(finalUrl);
}
// this ip will work on phone if phone is connected to hotspot
// Uri retrieveUserUrl =
//     Uri.parse('http://192.168.244.11:8000/auth/user-details/');

// Uri retrieveDissertationUrl =
//     Uri.parse('http://192.168.244.11:8000/dissertation/get-all/');

// Uri deleteDissertationUrl(int pk) {
//   String finalUrl = 'http://192.168.244.11:8000/dissertation/delete/$pk/';
//   return Uri.parse(finalUrl);
// }
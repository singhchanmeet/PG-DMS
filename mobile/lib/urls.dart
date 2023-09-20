Uri retrieveUserUrl =
    Uri.parse('http://192.168.245.223:8000/auth/user-details/');

Uri retrieveDissertationUrl =
    Uri.parse('http://192.168.245.223:8000/dissertation/get-all/');

Uri deleteDissertationUrl(int pk) {
  String finalUrl = 'http://192.168.245.223:8000/dissertation/delete/$pk/';
  return Uri.parse(finalUrl);
}
// this ip will work on phone if phone is connected to hotspot

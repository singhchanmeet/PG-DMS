// this ip will work on phone if phone is connected to hotspot
Uri retrieveUserUrl =
    Uri.parse('http://192.168.161.11:8000/auth/user-details/');

Uri retrieveDissertationUrl =
    Uri.parse('http://192.168.161.11:8000/dissertation/get-all/');

Uri deleteDissertationUrl(int pk) {
  String finalUrl = 'http://192.168.161.11:8000/dissertation/delete/$pk/';
  return Uri.parse(finalUrl);
}
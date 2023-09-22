import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:mobile/storage.dart';
import 'package:mobile/user.dart';

import 'urls.dart';

class UserDetails extends StatefulWidget {
  final Client client;
  const UserDetails({
    Key? key,
    required this.client,
  }) : super(key: key);

  @override
  State<UserDetails> createState() => _UserDetailsState();
}

class _UserDetailsState extends State<UserDetails> {
  // making current user object
  User currentUser = User.fromMap({});

  // this function gets called everytime the widget is rendered
  @override
  void initState() {
    _retrieveUserDetails();
    super.initState();
  }

  _retrieveUserDetails() async {
    final token = await storage.read(key: 'access_token');
    final response =
        await widget.client.get(retrieveUserUrl, headers: <String, String>{
      'Authorization': 'Bearer $token',
    });
    Map<String, dynamic> responseBody =
        json.decode(response.body); // taking response in json format
    //creating a User object using the fromMap constructor defined in data class
    currentUser = User.fromMap(
        {'name': responseBody['username'], 'role': responseBody['role']});
    setState(
        () {}); // this calls the build method again because the state has just changed
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(currentUser.name),
        ),
        body: RefreshIndicator(
          onRefresh: () async {
            _retrieveUserDetails(); // so that we can simply refresh to retreive details again
          },
          child: const Text("Hello Doston"),
        ));
  }
}

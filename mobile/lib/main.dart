import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'package:mobile/urls.dart';
import 'package:mobile/user.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'PG-DMS'),
    );
  }
}

// In stateful widgets we can hold values like here we are holding the state of the Client
class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Client client = http.Client();

  List<User> users = []; // List of Users

  // starting with _ means this is a private function
  void _addUser() {}

  // this function gets called everytime the widget is rendered
  @override
  void initState() {
    _retrieveUsers();
    super.initState();
  }

  _retrieveUsers() async {
    users = []; //initializing to empty then we will append
    List response = json.decode(
        (await client.get(retrieveUrl)).body); // taking response in json format
    // iterating through response
    response.forEach((element) {
      users.add(User.fromMap(
          element)); //creating a User object from each element using the fromMap constructor defined in data class; and adding that user to our list of Users named users.
    });
    setState(
        () {}); // this calls the build method again because the state has just changed
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView.builder(
        itemCount: users.length,
        itemBuilder: (BuildContext context, int index) {
          return ListTile(title: Text(users[index].name));
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _addUser,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'package:mobile/create_user.dart';
import 'package:mobile/dissertation.dart';
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

  // making list of all dissertations; they will come in form of list of dictionaries
  List allDissertations = [];

  // starting with _ means this is a private function
  void _addDissertation() {}

  void _deleteDissertation(int pk) {
    client.delete(deleteDissertationUrl(pk));
    _retrieveDissertation(); // re-retrieving after deleting
  }

  // this function gets called everytime the widget is rendered
  @override
  void initState() {
    _retrieveDissertation();
    super.initState();
  }

  _retrieveDissertation() async {
    // initializing to empty so that we dont append copies of same dissertation
    allDissertations = [];
    // response is a list of dictionaries
    List response = json.decode((await client.get(retrieveDissertationUrl))
        .body); // taking response in json format
    // iterating through each element of response; creating a Dissertation object from each element; and appending it to list
    for (var element in response) {
      allDissertations.add(Dissertation.fromMap(element));
      // print(element);
    }
    setState(
        () {}); // this calls the build method again because the state has just changed
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: RefreshIndicator(
        onRefresh: () async {
          _retrieveDissertation(); // so that we can simply refresh to retreive details again
        },
        child: ListView.builder(
            itemCount: allDissertations.length,
            itemBuilder: (BuildContext context, int index) {
              return ListTile(
                title: Text(allDissertations[index].title),
                onTap: () {},
                trailing: IconButton(
                  icon: const Icon(Icons.delete),
                  onPressed: () =>
                      _deleteDissertation(allDissertations[index].article_id),
                ),
              );
            }),
      ),
      // in MaterialPageRoute() we defined that route, and in Navigator.push() we actually push what we defined
      // also the CreateUser constructor is taking client as a keyword arguement
      floatingActionButton: FloatingActionButton(
        onPressed: () => Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => CreateUser(
                  client: client,
                ))),
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}



  // to refresh one widget within another we can simply click on that widget and then ctrl + .
  // for all kinds of auto coding, simply click on a part of code and then ctrl + .
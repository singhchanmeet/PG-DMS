import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:http/http.dart';
import 'package:mobile/dissertation.dart';
import 'package:mobile/dissertation_details.dart';
import 'package:mobile/drawer.dart';
import 'package:mobile/urls.dart';

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
      home: const MyHomePage(title: 'Explore Dissertations'),
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

  // this function gets called everytime the widget is rendered
  @override
  void initState() {
    _retrieveDissertation();
    super.initState();
  }

  _retrieveDissertation() async {
    // initializing to empty so that we dont append copies of same dissertation on refreshing
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
      drawer: CustomDrawer(client: client),
      body: RefreshIndicator(
        onRefresh: () async {
          _retrieveDissertation(); // so that we can simply refresh to retreive details again
        },
        child: ListView.builder(
            itemCount: allDissertations.length,
            itemBuilder: (BuildContext context, int index) {
              return Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Container(
                      decoration: const BoxDecoration(
                        border: Border(
                          bottom: BorderSide(
                            color:
                                Colors.grey, // Choose your desired border color
                            width: 1.0, // Choose your desired border width
                          ),
                        ),
                      ),
                      child: ListTile(
                        title: Text(allDissertations[index].title),
                        onTap: () =>
                            Navigator.of(context).push(MaterialPageRoute(
                          builder: (context) => DissertationDetails(
                            client: client,
                            pk: allDissertations[index].article_id,
                          ),
                        )),
                      ),
                    ),
                  ),
                ],
              );
            }),
      ),
    );
  }
}



  // to refresh one widget within another we can simply click on that widget and then ctrl + .
  // for all kinds of auto coding, simply click on a part of code and then ctrl + .
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:mobile/create_dissertation.dart';
import 'package:mobile/dissertation.dart';
import 'package:mobile/dissertation_details.dart';
import 'package:mobile/drawer.dart';
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

  // making list of all dissertations; they will come in form of list of dictionaries
  List allDissertations = [];

  // this function gets called everytime the widget is rendered
  @override
  void initState() {
    _retrieveUserDetails();
    _retrieveMyDissertations();
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

  void _deleteDissertation(int pk) {
    widget.client.delete(deleteDissertationUrl(pk));
    _retrieveMyDissertations(); // re-retrieving after deleting
  }

  // Function to show the delete confirmation dialog
  void _showDeleteConfirmationDialog(int dissertationId) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Confirm Delete'),
          content:
              const Text('Are you sure you want to delete this dissertation?'),
          actions: <Widget>[
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(); // Close the dialog
              },
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(); // Close the dialog
                _deleteDissertation(dissertationId); // Call the delete function
              },
              child: const Text('Delete'),
            ),
          ],
        );
      },
    );
  }

  _retrieveMyDissertations() async {
    // initializing to empty so that we dont append copies of same dissertation on refreshing
    allDissertations = [];
    // response is a list of dictionaries
    final token = await storage.read(key: 'access_token');
    List response = json.decode((await widget.client
            .get(retrieveMyDissertationUrl, headers: <String, String>{
      'Authorization': 'Bearer $token',
    }))
        .body);
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
        title: Text(currentUser.name),
      ),
      drawer: CustomDrawer(client: widget.client),
      body: RefreshIndicator(
        onRefresh: () async {
          _retrieveMyDissertations(); // so that we can simply refresh to retreive details again
        },
        child: ListView.builder(
            itemCount: allDissertations.length,
            itemBuilder: (BuildContext context, int index) {
              return ListTile(
                title: Text(allDissertations[index].title),
                onTap: () => Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) => DissertationDetails(
                          client: widget
                              .client, // we can get dissertation details by clicking on that particular dissertation
                          pk: allDissertations[index]
                              .article_id, // so we are passing the id to the DissertationDetails widget
                        ))),
                trailing: IconButton(
                  icon: const Icon(Icons.delete),
                  onPressed: () => _showDeleteConfirmationDialog(
                      allDissertations[index].article_id),
                ),
              );
            }),
      ),
      // in MaterialPageRoute() we defined that route, and in Navigator.push() we actually push what we defined
      // also the CreateUser constructor is taking client as a keyword arguement
      floatingActionButton: FloatingActionButton(
        onPressed: () => Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => CreateDissertation(
                  client: widget.client,
                ))),
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}

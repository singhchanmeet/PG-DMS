import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:mobile/dissertation.dart';
import 'package:mobile/drawer.dart';
import 'package:mobile/storage.dart';

import 'urls.dart';

class DissertationDetails extends StatefulWidget {
  final Client client;
  final int pk;
  const DissertationDetails({
    Key? key,
    required this.client,
    required this.pk,
  }) : super(key: key);

  @override
  State<DissertationDetails> createState() => _DissertationDetailsState();
}

class _DissertationDetailsState extends State<DissertationDetails> {
  // making current dissertation object
  Dissertation currentDissertation = Dissertation.fromMap({});

  // this function gets called everytime the widget is rendered
  @override
  void initState() {
    _retrieveDissertationDetails();
    super.initState();
  }

  _retrieveDissertationDetails() async {
    // final token = await storage.read(key: 'access_token');
    final response =
        await widget.client.get(retrieveDissertationDetailsUrl(widget.pk));
    // creating a map from the data received
    Map<String, dynamic> responseBody =
        json.decode(response.body); // taking response in json format
    //creating a dissertation object using the fromMap constructor defined in data class
    currentDissertation = Dissertation.fromMap(responseBody);
    setState(
        () {}); // this calls the build method again because the state has just changed
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(currentDissertation.title),
        ),
        drawer: CustomDrawer(client: widget.client),
        body: RefreshIndicator(
          onRefresh: () async {
            _retrieveDissertationDetails(); // so that we can simply refresh to retreive details again
          },
          child: ListView(
            padding: const EdgeInsets.all(16.0),
            children: [
              Text(
                'Title: ${currentDissertation.title}',
                style: const TextStyle(
                    fontSize: 24.0, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 16.0),
              Text(
                'Author: ${currentDissertation.author_name}',
                style: const TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 8.0),
              Text(
                'Journal: ${currentDissertation.journal_name}',
                style: const TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 8.0),
              Text(
                'Institute: ${currentDissertation.institute}',
                style: const TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 16.0),
              const Text(
                'Abstract:',
                style: TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 8.0),
              Text(
                currentDissertation.abstract,
                style: const TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 16.0),
              Text(
                'Medical System: ${currentDissertation.medical_system}',
                style: const TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 8.0),
              Text(
                'Category: ${currentDissertation.category}',
                style: const TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 8.0),
              Text(
                'Disease Related: ${currentDissertation.disease_related}',
                style: const TextStyle(fontSize: 18.0),
              ),
              const SizedBox(height: 8.0),
              Text(
                'Keywords: ${currentDissertation.keywords}',
                style: const TextStyle(fontSize: 18.0),
              ),
            ],
          ),
        ));
  }
}

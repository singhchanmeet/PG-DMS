// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/dissertation.dart';
import 'package:mobile/storage.dart';
import 'package:mobile/urls.dart';

import 'package:file_picker/file_picker.dart';
import 'dart:io';

import 'package:http_parser/http_parser.dart';

class CreateDissertation extends StatefulWidget {
  final Client client;
  const CreateDissertation({
    Key? key,
    required this.client,
  }) : super(key: key);

  @override
  State<CreateDissertation> createState() => _CreateDissertationState();
}

class _CreateDissertationState extends State<CreateDissertation> {
  // Initializing empty dissertation object
  Dissertation dissertation = Dissertation.fromMap({});

  // for dissertation file
  File? selectedPdf;

  Future<void> pickPDF() async {
    FilePickerResult? result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['jpg', 'pdf', 'doc'],
    );

    if (result != null) {
      setState(() {
        selectedPdf = File(result.files.single.path!);
      });
    }
  }

  String selectedMedicalSystem = 'AYURVEDA';
  String selectedCategory = 'PRECLINICAL_RESEARCH';
  //we have to give a value which is selected by default otherwise we get an error like:
  // There should be exactly one item with [DropdownButton]'s value: Either zero or 2 or more [DropdownMenuItem]s were detected with the same value

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Create Dissertation'),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextFormField(
                decoration: const InputDecoration(
                    hintText: 'Title',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.horizontal())),
                onChanged: (value) {
                  setState(() {
                    dissertation.title = value;
                  });
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextFormField(
                decoration: const InputDecoration(
                    hintText: 'Author Name',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.horizontal())),
                onChanged: (value) {
                  setState(() {
                    dissertation.author_name = value;
                  });
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextFormField(
                decoration: const InputDecoration(
                    hintText: 'Journal Name',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.horizontal())),
                onChanged: (value) {
                  setState(() {
                    dissertation.journal_name = value;
                  });
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextFormField(
                decoration: const InputDecoration(
                    hintText: 'Institute Name',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.horizontal())),
                onChanged: (value) {
                  setState(() {
                    dissertation.institute = value;
                  });
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextFormField(
                decoration: const InputDecoration(
                    hintText: 'Abstract',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.horizontal())),
                onChanged: (value) {
                  setState(() {
                    dissertation.abstract = value;
                  });
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: DropdownButtonFormField<String>(
                decoration: const InputDecoration(labelText: 'Medical System'),
                value: selectedMedicalSystem,
                onChanged: (value) {
                  setState(() {
                    selectedMedicalSystem = value!;
                    dissertation.medical_system =
                        selectedMedicalSystem; // Update user role
                  });
                },
                items: const [
                  DropdownMenuItem<String>(
                    value: 'AYURVEDA',
                    child: Text('Ayurveda'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'YOGA_AND_NATUROPATHY',
                    child: Text('Yoga & Naturopathy'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'UNANI',
                    child: Text('Unani'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'SIDDHA',
                    child: Text('Siddha'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'HOMOEOPATHY',
                    child: Text('Homoeopathy'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'SOWARIGPA',
                    child: Text('Sowarigpa'),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: DropdownButtonFormField<String>(
                decoration: const InputDecoration(labelText: 'Category'),
                value: selectedCategory,
                onChanged: (value) {
                  setState(() {
                    selectedCategory = value!;
                    dissertation.category =
                        selectedCategory; // Update user role
                  });
                },
                items: const [
                  DropdownMenuItem<String>(
                    value: 'PRECLINICAL_RESEARCH',
                    child: Text('Preclinical Research'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'CLINICAL_RESEARCH_GRADE_A',
                    child: Text('Clinical Research (Evidence Grade A)'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'CLINICAL_RESEARCH_GRADE_B',
                    child: Text('Clinical Research (Evidence Grade B)'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'CLINICAL_RESEARCH_GRADE_C',
                    child: Text('Clinical Research (Evidence Grade C)'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'FUNDAMENTAL_RESEARCH',
                    child: Text('Fundamental Research'),
                  ),
                  DropdownMenuItem<String>(
                    value: 'DRUG_RESEARCH',
                    child: Text('Drug Research'),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextFormField(
                decoration: const InputDecoration(
                    hintText: 'Keywords (if any)',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.horizontal())),
                onChanged: (value) {
                  setState(() {
                    dissertation.keywords = value;
                  });
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: TextFormField(
                decoration: const InputDecoration(
                    hintText: 'Related Diseases (if any)',
                    border: OutlineInputBorder(
                        borderRadius: BorderRadius.horizontal())),
                onChanged: (value) {
                  setState(() {
                    dissertation.disease_related = value;
                  });
                },
              ),
            ),
            ElevatedButton(
              onPressed: () async {
                await pickPDF();
              },
              child: const Text('Upload Dissertation PDF'),
            ),
            // this is the button that will send the post request
            ElevatedButton(
                onPressed: () async {
                  print(json.encode(dissertation.toMap()));
                  final token = await storage.read(key: 'access_token');

                  // creating a request object with method = POST
                  final request = MultipartRequest(
                    'POST',
                    createDissertationUrl,
                  );

                  // adding bearer token to request header
                  request.headers.addAll({
                    'Authorization': 'Bearer $token',
                  });

                  // we can only add a Map<String, String> to the request
                  // but the toMap function of our Dissertation data class returns a Map<String, dynamic>
                  // so we are explicitly converting Map<String, dynamic> to Map<String, String>
                  Map<String, String> stringDissertation = <String, String>{};
                  dissertation.toMap().forEach((key, value) =>
                      stringDissertation[key] = value.toString());

                  // now adding the converted map to our request as the request body
                  request.fields.addAll(stringDissertation);

                  // creating a file object
                  final pdfFile = await http.MultipartFile.fromPath(
                    'full_paper', // Replace with the field name expected by your server
                    selectedPdf!.path,
                    contentType: MediaType('application',
                        'pdf'), // Set the content type for PDF files
                  );

                  // adding the file to our request object
                  request.files.add(pdfFile);

                  // finally sending the request
                  final response = await request.send();

                  if (response.statusCode == 201) {
                    // Successful request
                    // Handle the response as needed
                    print("Dissertation created successfully");
                  } else {
                    // Error handling
                    print(
                        "Failed to create dissertation. Status code: ${response.statusCode}");
                  }

                  Navigator.pop(context); // Pop the screen
                },
                child: const Text('Create Dissertation')),
          ],
        ),
      ),
    );
  }
}

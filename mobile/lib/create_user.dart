// ignore_for_file: public_member_api_docs, sort_constructors_first
// import 'package:flutter/src/widgets/framework.dart';
// import 'package:flutter/src/widgets/placeholder.dart';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:mobile/login_user.dart';
import 'package:mobile/urls.dart';

import 'user.dart';

class CreateUser extends StatefulWidget {
  final Client client;
  const CreateUser({
    Key? key,
    required this.client,
  }) : super(key: key);

  @override
  State<CreateUser> createState() => _CreateUserState();
}

class _CreateUserState extends State<CreateUser> {
  // we can also use this controller to control the TextFields
  TextEditingController controller = TextEditingController();

  // But we will use User data class. So initializing a user object
  User user =
      User(user_id: '', name: '', role: 'STUDENT', email: '', password: '');

  String selectedRole =
      'STUDENT'; // The role which is selected by default is student.
  //we have to give a role which is selected by default otherwise we get an error like:
  // There should be exactly one item with [DropdownButton]'s value: Either zero or 2 or more [DropdownMenuItem]s were detected with the same value

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Create User'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              decoration: const InputDecoration(
                  hintText: 'User ID',
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.horizontal())),
              onChanged: (value) {
                setState(() {
                  user.user_id = value;
                });
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              decoration: const InputDecoration(
                  hintText: 'Full Name',
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.horizontal())),
              onChanged: (value) {
                setState(() {
                  user.name = value;
                });
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: DropdownButtonFormField<String>(
              decoration: const InputDecoration(labelText: 'Role'),
              value: selectedRole,
              onChanged: (value) {
                setState(() {
                  selectedRole = value!;
                  user.role = selectedRole; // Update user role
                });
              },
              items: const [
                DropdownMenuItem<String>(
                  value: 'STUDENT',
                  child: Text('STUDENT'),
                ),
                DropdownMenuItem<String>(
                  value: 'GUIDE',
                  child: Text('GUIDE'),
                ),
                DropdownMenuItem<String>(
                  value: 'UNIVERSITY',
                  child: Text('UNIVERSITY'),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              decoration: const InputDecoration(
                  hintText: 'Email',
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.horizontal())),
              onChanged: (value) {
                setState(() {
                  user.email = value;
                });
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              decoration: const InputDecoration(
                  hintText: 'password',
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.horizontal())),
              onChanged: (value) {
                setState(() {
                  user.password = value;
                });
              },
            ),
          ),
          // this is the button that will send the post request
          ElevatedButton(
              onPressed: () async {
                print(json.encode(user.toMap()));
                final response = await widget.client.post(
                  createUserUrl,
                  headers: {
                    "Content-Type": "application/json"
                  }, // Set the content type
                  body: json.encode(
                      user.toMap()), // Convert User object to JSON string
                );

                if (response.statusCode == 201) {
                  // Successful request
                  // Handle the response as needed
                  print("User created successfully");
                } else {
                  // Error handling
                  print(
                      "Failed to create user. Status code: ${response.statusCode}");
                }

                Navigator.pop(context); // Pop the screen
              },
              child: const Text('Create User')),
          ElevatedButton(
              onPressed: () => Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => LoginUser(
                        client: widget.client,
                      ))),
              child: const Text('Already Registered? Login'))
        ],
      ),
    );
  }
}

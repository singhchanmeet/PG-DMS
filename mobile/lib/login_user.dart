// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:mobile/storage.dart';
import 'package:mobile/urls.dart';
import 'package:mobile/user_details.dart';

class LoginUser extends StatefulWidget {
  final Client client;
  const LoginUser({
    Key? key,
    required this.client,
  }) : super(key: key);

  @override
  State<LoginUser> createState() => _LoginUserState();
}

class _LoginUserState extends State<LoginUser> {
  // here we are using controllers to handle input because there are just two fields so no need of a data class
  TextEditingController idController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("LOGIN"),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              controller: idController,
              decoration: const InputDecoration(
                  hintText: 'User ID',
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.horizontal())),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: TextFormField(
              controller: passwordController,
              decoration: const InputDecoration(
                  hintText: 'password',
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.horizontal())),
            ),
          ),

          // this is the button that will send the post request
          ElevatedButton(
              onPressed: () async {
                final Map<String, String> requestBody = {
                  "user_id": idController.text,
                  "password": passwordController.text,
                };
                final response = await widget.client.post(
                  loginUserUrl,
                  headers: {
                    "Content-Type": "application/json"
                  }, // Set the content type
                  body: json.encode(requestBody), // Encode the body as JSON
                  // JSON string
                );

                if (response.statusCode == 200) {
                  // Successful request
                  final jsonResponse = json.decode(response.body);
                  final accessToken = jsonResponse['access_token'];

                  // storing in flutter's storage
                  await storage.write(key: 'access_token', value: accessToken);

                  print(
                      "User logged in successfully. Access Token: $accessToken");
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => UserDetails(
                            client: widget.client,
                          )));
                } else {
                  // Error handling
                  print(
                      "Failed to log in. Status code: ${response.statusCode}");
                }
              },
              child: const Text('Login')),
        ],
      ),
    );
  }
}

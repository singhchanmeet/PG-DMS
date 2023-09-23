// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';
import 'package:http/http.dart';
import 'package:mobile/create_user.dart';
import 'package:mobile/main.dart';
import 'package:mobile/storage.dart';

class CustomDrawer extends StatefulWidget {
  final Client client;
  const CustomDrawer({
    Key? key,
    required this.client,
  }) : super(key: key);

  @override
  State<CustomDrawer> createState() => _CustomDrawerState();
}

class _CustomDrawerState extends State<CustomDrawer> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          const DrawerHeader(
            decoration: BoxDecoration(
              color: Colors.blue,
            ),
            child: Text(
              'Welcome to PG-DMS',
              style: TextStyle(
                color: Colors.white,
                fontSize: 24,
              ),
            ),
          ),
          FutureBuilder<String?>(
            // Check if 'access_token' exists in Flutter Secure Storage
            future: storage.read(key: 'access_token'),
            builder: (context, snapshot) {
              if (snapshot.hasData && snapshot.data != null) {
                // 'access_token' exists, display Logout
                return Column(
                  children: <Widget>[
                    ListTile(
                      title: const Text('Logout'),
                      onTap: () async {
                        // Show a confirmation dialog
                        bool confirmLogout = await showDialog(
                          context: context,
                          builder: (BuildContext context) {
                            return AlertDialog(
                              title: const Text('Confirm Logout'),
                              content: const Text(
                                  'Are you sure you want to logout?'),
                              actions: <Widget>[
                                TextButton(
                                  onPressed: () {
                                    Navigator.of(context)
                                        .pop(true); // Yes, confirm
                                  },
                                  child: const Text('Yes'),
                                ),
                                TextButton(
                                  onPressed: () {
                                    Navigator.of(context)
                                        .pop(false); // No, cancel
                                  },
                                  child: const Text('No'),
                                ),
                              ],
                            );
                          },
                        );

                        // If the user confirms, perform logout
                        if (confirmLogout == true) {
                          await storage.delete(key: 'access_token');
                          // Add any additional logout logic here

                          //navigate to home page
                          Navigator.of(context).push(MaterialPageRoute(
                              builder: (context) => const MyHomePage(
                                    title: 'Explore Dissertations',
                                  )));
                        }
                      },
                    ),
                  ],
                );
              } else {
                // 'access_token' does not exist, display Signup/Login
                return ListTile(
                  title: const Text('Signup/Login'),
                  onTap: () {
                    // Add your navigation logic here
                    Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => CreateUser(
                        client: widget.client,
                      ),
                    ));
                  },
                );
              }
            },
          ),

          ListTile(
            title: const Text('Item 2'),
            onTap: () {
              // Add your drawer item 2 action here
            },
          ),
          // Add more drawer items as needed
        ],
      ),
    );
  }
}

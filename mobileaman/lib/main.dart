import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Your App',
      initialRoute: '/',
      routes: {
        '/': (context) => AuthScreen(),
        '/student_dashboard': (context) => StudentDashboard(),
        '/guide_dashboard': (context) => GuideDashboard(),
        '/university_dashboard': (context) => UniversityDashboard(),
        // Add more routes for other screens
      },
    );
  }
}



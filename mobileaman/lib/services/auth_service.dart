import 'package:http/http.dart' as http;
import 'dart:convert';

class AuthService {
  final String apiUrl = 'YOUR_API_URL'; // Replace with your API endpoint

  Future<Map<String, dynamic>> login(String username, String password) async {
    final response = await http.post(
      Uri.parse('$apiUrl/login/'),
      body: jsonEncode({'username': username, 'password': password}),
      headers: {'Content-Type': 'application/json'},
    );

    if (response.statusCode == 200) {
      // Successful login, parse and return user data
      final userData = jsonDecode(response.body);
      return userData;
    } else {
      // Login failed, return an error message
      throw Exception('Login failed');
    }
  }
}

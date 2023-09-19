// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

// Shortcut for data class : Ctrl + .
// after installing extension "Dart Data Class Generator"

// Creating a User object in Dart
// this is a User model that we are going to use locally in Dart/Flutter
// mainly useful for json to dart conversion for all server side stuff
class User {
  String userId;
  String name;
  String role;
  String email;
  String password;
  User({
    required this.userId,
    required this.name,
    required this.role,
    required this.email,
    required this.password,
  });

  User copyWith({
    String? userId,
    String? name,
    String? role,
    String? email,
    String? password,
  }) {
    return User(
      userId: userId ?? this.userId,
      name: name ?? this.name,
      role: role ?? this.role,
      email: email ?? this.email,
      password: password ?? this.password,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'user_id': userId,
      'name': name,
      'role': role,
      'email': email,
      'password': password,
    };
  }

  // a named constructor we will use while creating object from map
  // also since the map is coming from response, thats why we are taking user_id from map instead of taking userId from map
  // ? ?? '' this is null safety, when we dont provide a value default is empty string
  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      userId: map['user_id'] as String? ?? '',
      name: map['name'] as String? ?? '',
      role: map['role'] as String? ?? '',
      email: map['email'] as String? ?? '',
      password: map['password'] as String? ?? '',
    );
  }

  String toJson() => json.encode(toMap());

  factory User.fromJson(String source) =>
      User.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'User(userId: $userId, name: $name, role: $role, email: $email, password: $password)';
  }

  @override
  bool operator ==(covariant User other) {
    if (identical(this, other)) return true;

    return other.userId == userId &&
        other.name == name &&
        other.role == role &&
        other.email == email &&
        other.password == password;
  }

  @override
  int get hashCode {
    return userId.hashCode ^
        name.hashCode ^
        role.hashCode ^
        email.hashCode ^
        password.hashCode;
  }
}

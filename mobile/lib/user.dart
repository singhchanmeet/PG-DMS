// ignore_for_file: public_member_api_docs, sort_constructors_first, non_constant_identifier_names
import 'dart:convert';

// Shortcut for data class : make a simple class with all the required attributes and then Ctrl + .
// after installing extension "Dart Data Class Generator"

// Creating a User object in Dart
// this is a User model that we are going to use locally in Dart/Flutter
// mainly useful for json to dart conversion for all server side stuff

// we are not following camelCase convention just for the sake of simplicity because in django models we have named with _

class User {
  String user_id;
  String name;
  String role;
  String email;
  String password;
  User({
    required this.user_id,
    required this.name,
    required this.role,
    required this.email,
    required this.password,
  });

  User copyWith({
    String? user_id,
    String? name,
    String? role,
    String? email,
    String? password,
  }) {
    return User(
      user_id: user_id ?? this.user_id,
      name: name ?? this.name,
      role: role ?? this.role,
      email: email ?? this.email,
      password: password ?? this.password,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'user_id': user_id,
      'name': name,
      'role': role,
      'email': email,
      'password': password,
    };
  }

  // a named constructor we will use while creating object from map
  // ? ?? '' this is null safety, when we dont provide a value default is empty string
  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      user_id: map['user_id'] as String? ?? '',
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
    return 'User(user_id: $user_id, name: $name, role: $role, email: $email, password: $password)';
  }

  @override
  bool operator ==(covariant User other) {
    if (identical(this, other)) return true;

    return other.user_id == user_id &&
        other.name == name &&
        other.role == role &&
        other.email == email &&
        other.password == password;
  }

  @override
  int get hashCode {
    return user_id.hashCode ^
        name.hashCode ^
        role.hashCode ^
        email.hashCode ^
        password.hashCode;
  }
}

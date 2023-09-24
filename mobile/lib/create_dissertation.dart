import 'package:flutter/material.dart';
import 'package:http/http.dart';

class CreateDissertation extends StatefulWidget {
  final Client client;
  const CreateDissertation({super.key, required this.client});

  @override
  State<CreateDissertation> createState() => _CreateDissertationState();
}

class _CreateDissertationState extends State<CreateDissertation> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}

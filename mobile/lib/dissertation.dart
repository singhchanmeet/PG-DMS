// ignore_for_file: public_member_api_docs, sort_constructors_first, non_constant_identifier_names
import 'dart:convert';

import 'package:flutter/foundation.dart';

// Shortcut for data class : make a simple class with all the required attributes and then Ctrl + .
// after installing extension "Dart Data Class Generator"

class Dissertation {
  int article_id;
  String title;
  String author_name;
  List<String> author_id;
  String journal_name;
  String institute;
  String abstract;
  String medical_system;
  String category;
  String disease_related;
  String keywords;
  Dissertation({
    required this.article_id,
    required this.title,
    required this.author_name,
    required this.author_id,
    required this.journal_name,
    required this.institute,
    required this.abstract,
    required this.medical_system,
    required this.category,
    required this.disease_related,
    required this.keywords,
  });

  Dissertation copyWith({
    int? article_id,
    String? title,
    String? author_name,
    List<String>? author_id,
    String? journal_name,
    String? institute,
    String? abstract,
    String? medical_system,
    String? category,
    String? disease_related,
    String? keywords,
  }) {
    return Dissertation(
      article_id: article_id ?? this.article_id,
      title: title ?? this.title,
      author_name: author_name ?? this.author_name,
      author_id: author_id ?? this.author_id,
      journal_name: journal_name ?? this.journal_name,
      institute: institute ?? this.institute,
      abstract: abstract ?? this.abstract,
      medical_system: medical_system ?? this.medical_system,
      category: category ?? this.category,
      disease_related: disease_related ?? this.disease_related,
      keywords: keywords ?? this.keywords,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'article_id': article_id,
      'title': title,
      'author_name': author_name,
      'author_id': author_id,
      'journal_name': journal_name,
      'institute': institute,
      'abstract': abstract,
      'medical_system': medical_system,
      'category': category,
      'disease_related': disease_related,
      'keywords': keywords,
    };
  }

// NOTE: we are adding null safety in every field so that we can initialize an empty object of the Dissertation data class whereever needed
  factory Dissertation.fromMap(Map<String, dynamic> map) {
    return Dissertation(
      article_id: map['article_id'] as int? ?? 1,
      title: map['title'] as String? ?? '',
      author_name: map['author_name'] as String? ?? '',
      author_id: List<String>.from((map['author_id'] as List<dynamic>?) ?? []),
      journal_name: map['journal_name'] as String? ?? '',
      institute: map['institute'] as String? ?? '',
      abstract: map['abstract'] as String? ?? '',
      medical_system: map['medical_system'] as String? ?? '',
      category: map['category'] as String? ?? '',
      disease_related: map['disease_related'] as String? ?? '',
      keywords: map['keywords'] as String? ?? '',
    );
  }

  String toJson() => json.encode(toMap());

  factory Dissertation.fromJson(String source) =>
      Dissertation.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'Dissertation(article_id: $article_id, title: $title, author_name: $author_name, author_id: $author_id, journal_name: $journal_name, institute: $institute, abstract: $abstract, medical_system: $medical_system, category: $category, disease_related: $disease_related, keywords: $keywords)';
  }

  @override
  bool operator ==(covariant Dissertation other) {
    if (identical(this, other)) return true;

    return other.article_id == article_id &&
        other.title == title &&
        other.author_name == author_name &&
        listEquals(other.author_id, author_id) &&
        other.journal_name == journal_name &&
        other.institute == institute &&
        other.abstract == abstract &&
        other.medical_system == medical_system &&
        other.category == category &&
        other.disease_related == disease_related &&
        other.keywords == keywords;
  }

  @override
  int get hashCode {
    return article_id.hashCode ^
        title.hashCode ^
        author_name.hashCode ^
        author_id.hashCode ^
        journal_name.hashCode ^
        institute.hashCode ^
        abstract.hashCode ^
        medical_system.hashCode ^
        category.hashCode ^
        disease_related.hashCode ^
        keywords.hashCode;
  }
}

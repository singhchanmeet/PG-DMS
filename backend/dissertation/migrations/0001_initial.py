# Generated by Django 4.1.4 on 2023-09-17 18:34

import dissertation.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dissertation',
            fields=[
                ('article_id', models.IntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=256)),
                ('author_name', models.CharField(max_length=100)),
                ('journal_name', models.CharField(max_length=100)),
                ('institute', models.CharField(max_length=256)),
                ('abstract', models.TextField()),
                ('medical_system', models.CharField(choices=[('AYURVEDA', 'Ayurveda'), ('YOGA_AND_NATUROPATHY', 'Yoga & Naturopathy'), ('UNANI', 'Unani'), ('SIDDHA', 'Siddha'), ('HOMOEOPATHY', 'Homoeopathy'), ('SOWARIGPA', 'Sowarigpa')], max_length=50)),
                ('category', models.CharField(choices=[('PRECLINICAL_RESEARCH', 'Preclinical Research'), ('CLINICAL_RESEARCH_GRADE_A', 'Clinical Research (Evidence Grade A)'), ('CLINICAL_RESEARCH_GRADE_B', 'Clinical Research (Evidence Grade B)'), ('CLINICAL_RESEARCH_GRADE_C', 'Clinical Research (Evidence Grade C)'), ('FUNDAMENTAL_RESEARCH', 'Fundamental Research'), ('DRUG_RESEARCH', 'Drug Research')], max_length=50)),
                ('disease_related', models.CharField(blank=True, max_length=256)),
                ('keywords', models.CharField(blank=True, max_length=256)),
                ('full_paper', models.FileField(upload_to=dissertation.models.rename_papers)),
            ],
        ),
    ]

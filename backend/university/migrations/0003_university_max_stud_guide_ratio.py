# Generated by Django 4.1.4 on 2023-09-27 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('university', '0002_alter_university_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='university',
            name='max_stud_guide_ratio',
            field=models.PositiveIntegerField(default=10),
        ),
    ]

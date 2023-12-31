# Generated by Django 4.1.4 on 2023-09-24 08:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('university', '0002_alter_university_options'),
        ('guide', '0003_alter_guide_options'),
        ('student', '0002_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='student',
            options={'verbose_name_plural': 'students'},
        ),
        migrations.AlterField(
            model_name='student',
            name='guide',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='guide.guide'),
        ),
        migrations.AlterField(
            model_name='student',
            name='university',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='university.university'),
        ),
    ]

# Generated by Django 4.1.4 on 2023-09-23 17:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('guide', '0001_initial'),
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('number_of_dissertations', models.PositiveIntegerField(default=0)),
                ('guide', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='guide.guide')),
            ],
            options={
                'db_table': 'students',
            },
        ),
    ]

# Generated by Django 4.2 on 2023-05-23 12:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0003_note_id_time_favorito_note_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='content',
        ),
        migrations.RemoveField(
            model_name='note',
            name='title',
        ),
    ]

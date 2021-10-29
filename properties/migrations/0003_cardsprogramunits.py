# Generated by Django 3.2.7 on 2021-10-26 08:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0002_cardsfeatures'),
    ]

    operations = [
        migrations.CreateModel(
            name='CardsProgramUnits',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('icon_program', models.CharField(blank=True, max_length=30, null=True)),
                ('title_program', models.CharField(blank=True, max_length=100, null=True)),
                ('description_program', models.TextField(blank=True, max_length=10000, null=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cards_units_category', to='properties.subcategory')),
            ],
        ),
    ]
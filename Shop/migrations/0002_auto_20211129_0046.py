# Generated by Django 3.2.8 on 2021-11-28 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Shop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='Product_image',
            field=models.ImageField(default='', upload_to='Shop/images'),
        ),
        migrations.AddField(
            model_name='product',
            name='Product_price',
            field=models.IntegerField(default='0'),
        ),
    ]

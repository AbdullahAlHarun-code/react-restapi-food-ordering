# Generated by Django 3.1.2 on 2022-01-05 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_product_ishomefeatured'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='isActive',
            field=models.BooleanField(default=False),
        ),
    ]

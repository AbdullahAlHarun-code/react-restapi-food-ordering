# Generated by Django 3.1.2 on 2022-01-05 02:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20220103_1554'),
    ]

    operations = [
        migrations.AddField(
            model_name='companydetails',
            name='image10',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='companydetails',
            name='image4',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='companydetails',
            name='image5',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='companydetails',
            name='image6',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='companydetails',
            name='image7',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='companydetails',
            name='image8',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='companydetails',
            name='image9',
            field=models.ImageField(blank=True, default='/placeholder.png', null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='product',
            name='isSpecialPriceTagActive',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='price',
            name='text',
            field=models.CharField(choices=[('None', 'None'), ("On It's Own", "On It's Own"), ('Meal', 'Meal'), ('Price', 'Price'), ('With Pitta Bread', 'With Pitta Bread'), ('With Rice, Pitta Bread Or Chips', 'With Rice, Pitta Bread Or Chips')], default=None, max_length=200),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='api.category'),
        ),
        migrations.CreateModel(
            name='Variations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(blank=True, default=1, null=True)),
                ('status', models.CharField(choices=[('OR', 'OR'), ('INCLUDE', 'INCLUDE')], default='INCLUDE', max_length=200)),
                ('option', models.CharField(choices=[('NONE', 'NONE'), ('RICE', 'RICE'), ('FRIES', 'FRIES'), ('DIPS', 'DIPS'), ('DRINK', 'DRINK'), ('SALAD', 'SALAD'), ('SAUCE', 'SAUCE')], default='NONE', max_length=200)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='variations', to='api.product')),
            ],
        ),
    ]

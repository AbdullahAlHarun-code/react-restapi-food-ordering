from rest_framework import serializers
from .models import CompanyDetails, Category, Product, Price
class CompanyDetailsSerializers(serializers.ModelSerializer):
    class Meta:
        model = CompanyDetails
        fields = '__all__'



class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Price
        fields = '__all__'

class ProductsSerializers(serializers.ModelSerializer):
    prices = PriceSerializer(many=True, read_only=True)
    #category_name = serializers.RelatedField(source='category', queryset=Category.objects.all())
    category_name = serializers.ReadOnlyField()
    category_description = serializers.ReadOnlyField()
    getPriceRange = serializers.ReadOnlyField()
  
    class Meta:
        model = Product
        fields = ['category_name','category_description', 'name', 'description', 'image', 'getPriceRange', 'prices', 'spCategoryName']
        #fields = '__all__'

class CategoryProductSerializers(serializers.ModelSerializer):
    products = ProductsSerializers(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ['name', 'description', 'products']

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
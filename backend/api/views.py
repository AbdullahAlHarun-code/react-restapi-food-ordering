from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .Products import products
from .models import CompanyDetails, Category, Product
from .serializers import CompanyDetailsSerializers, CategorySerializers, ProductsSerializers
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products',
        '/api/products',
        '/api/products',
        '/api/products',
        '/api/products',
        '/api/products',
        '/api/products',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    allProducts = Product.objects.all().filter(isActive=True)
    csData = ProductsSerializers(allProducts, many=True)
    return Response(csData.data)
    #return Response(products)

@api_view(['GET'])
def getFeaturedProducts(request):
    allProducts = Product.objects.all().filter(isActive=True, isHomeFeatured=True)
    csData = ProductsSerializers(allProducts, many=True)
    return Response(csData.data)
    #return Response(products)

@api_view(['GET'])
def getAllCatProducts(request):
    allProducts = Product.objects.all().filter(isActive=True)
    csData = ProductsSerializers(allProducts, many=True)
    return Response(csData.data)
    #return Response(products)

@api_view(['GET'])
def getCatProductsBySlug(request, slug):
    cat = get_object_or_404(Category, slug=slug)
    print('cat name', cat.name)
    allProducts = Product.objects.all().filter(isActive=True, category=cat.id)
    csData = ProductsSerializers(allProducts, many=True)
    return Response(csData.data)
    #return Response(products)

@api_view(['GET'])
def getProduct(request, pk):
    product = None 
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)

@api_view(['GET'])
def getCompanyDetails(request):
    cdata = CompanyDetails.objects.first()
    csData = CompanyDetailsSerializers(cdata, many=False)
    return Response(csData.data)

@api_view(['GET', 'POST'])
def getCategories(request):
    cdata = Category.objects.all()
    csData =CategorySerializers(cdata, many=True)
    return Response(csData.data)


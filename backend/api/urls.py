from django.urls import path, include
from api.views import *
urlpatterns = [
    path('', getRoutes),
    path('company-details/', getCompanyDetails),
    path('products/', getProducts),
    path('featured-products/', getFeaturedProducts),
    path('cat-products/', getAllCatProducts),
    path('cat-products/<slug:slug>/', getCatProductsBySlug),
    path('products/<str:pk>/', getProduct),

    path('categories/', getCategories),
]

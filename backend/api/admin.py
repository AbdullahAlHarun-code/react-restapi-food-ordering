from django.contrib import admin
from .models import CompanyDetails, Category, Product, Price
# Register your models here.

admin.site.register(CompanyDetails)
admin.site.register(Category)
admin.site.register(Price)

class PriceInline(admin.TabularInline):
    model = Price
    extra = 0

@admin.register(Product)
class OrderAdmin(admin.ModelAdmin):
    
    list_display = ['id', 'category', 'name', 'image_tag', 'get_price']
    # list_filter = ['paid', 'created', 'updated']
    readonly_fields = ['image_tag', 'get_price']
    

    def get_price(self, obj):
        #return "\n".join([p.price for p in obj.price.all()])
        price = Price.objects.all().filter(product = obj.id)
        print(price.count())
        return " | ".join([str(p.price) for p in price])
    inlines = [PriceInline]

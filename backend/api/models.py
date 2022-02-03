from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.html import mark_safe
from django.db.models.signals import pre_save

from backend.utils import unique_slug_generator
# Create your models here.
class CompanyDetails(models.Model):
    companyName         = models.CharField(max_length=200, null=True, blank=True)
    companyShortName    = models.CharField(max_length=200, null=True, blank=True)
    openingHours    = models.CharField(max_length=200, null=True, blank=True)
    address    = models.CharField(max_length=200, null=True, blank=True)
    telephoneCompany    = models.CharField(max_length=200, null=True, blank=True)
    telephoneRefund    = models.CharField(max_length=200, null=True, blank=True)
    telephoneEmergency    = models.CharField(max_length=200, null=True, blank=True)
    emailInfo    = models.EmailField(max_length=200, null=True, blank=True)
    emailSupport    = models.EmailField(max_length=200, null=True, blank=True)
    emailRefund    = models.EmailField(max_length=200, null=True, blank=True)
    facebookLink    = models.URLField(max_length=200, null=True, blank=True)
    instragramLink    = models.URLField(max_length=200, null=True, blank=True)
    twitterLink    = models.URLField(max_length=200, null=True, blank=True)
    googlePlayStoreLink    = models.URLField(max_length=200, null=True, blank=True)
    appleStoreLink    = models.URLField(max_length=200, null=True, blank=True)
    websiteLink    = models.URLField(max_length=200, null=True, blank=True)
    logoImageLink1    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    logoImageLink2    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    logoImageLink3    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    image4    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    image5    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    image6    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    image7    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    image8    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    image9    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    image10    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    onlyIconImageLink    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    faviconImageLink    = models.ImageField(null=True, blank=True,default='/placeholder.png')
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.companyName

class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=250, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    

    def __str__(self):
        return str(self.name)

def slug_generator(sender, instance, *srgs, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)

pre_save.connect(slug_generator, sender=Category)

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=CASCADE)
    spCategoryName = models.CharField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True,default='/placeholder.png')
    spText = models.CharField(max_length=200, null=True, blank=True)
    isPriceTagActive = models.BooleanField(default=False)
    isSpecialPriceTagActive = models.BooleanField(default=False)
    isHomeFeatured = models.BooleanField(default=False)
    isActive = models.BooleanField(default=False)

    def __str__(self):
        return str(self.name)

    
    @property
    def getPriceRange(self):
        text = ''
        prices = Price.objects.all().filter(product=self.id)
        index = 0 
        for p in prices:
            if index == 0:
                text += '£'+str(p.price)
            else:
                text += ' - £'+str(p.price)
            index +=1
        return text

    @property
    def category_name(self):
        return self.category.name
    
    @property
    def category_description(self):
        return self.category.description
        
    def image_tag(self):
        return mark_safe('<img src="/media/%s" width="60" height="60" />' % (self.image))

PRICE_TEXT = [
    ('None', 'None'),
    ('On It\'s Own', 'On It\'s Own'),
    ('Meal', 'Meal'),
    ('Price', 'Price'),
    ('With Pitta Bread', 'With Pitta Bread'),
    ('With Rice, Pitta Bread Or Chips', 'With Rice, Pitta Bread Or Chips'),
    ('Regular', 'Regular'),
    ('Large', 'Large'),
] 
class Price(models.Model):
    product = models.ForeignKey(Product, related_name="prices", on_delete=CASCADE)
    text = models.CharField(max_length=200, choices=PRICE_TEXT, default=None)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return str(self.text)
    
    

VARIATION_STATUS = [
    ('OR', 'OR'),
    ('INCLUDE', 'INCLUDE'),
] 
OPTIONS_VALUE = [
    ('NONE', 'NONE'),
    ('RICE', 'RICE'),
    ('FRIES', 'FRIES'),
    ('DIPS', 'DIPS'),
    ('DRINK', 'DRINK'),
    ('SALAD', 'SALAD'),
    ('SAUCE', 'SAUCE'),
]

class Variations(models.Model):
    product = models.ForeignKey(Product, related_name="variations", on_delete=CASCADE)
    quantity = models.IntegerField(null=True, blank=True, default=1)
    status = models.CharField(max_length=200, choices=VARIATION_STATUS, default='INCLUDE')
    option = models.CharField(max_length=200, choices=OPTIONS_VALUE, default='NONE')

    # image = models.ImageField(null=True, blank=True,
    #                           default='/placeholder.png')
    # brand = models.CharField(max_length=200, null=True, blank=True)
    # category = models.CharField(max_length=200, null=True, blank=True)
    # description = models.TextField(null=True, blank=True)
    # rating = models.DecimalField(
    #     max_digits=7, decimal_places=2, null=True, blank=True)
    # numReviews = models.IntegerField(null=True, blank=True, default=0)
    # price = models.DecimalField(
    #     max_digits=7, decimal_places=2, null=True, blank=True)
    # countInStock = models.IntegerField(null=True, blank=True, default=0)
    # createdAt = models.DateTimeField(auto_now_add=True)
    # _id = models.AutoField(primary_key=True, editable=False)

    # def __str__(self):
    #     return self.name
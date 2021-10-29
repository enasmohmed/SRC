from django.contrib import admin

# Register your models here.
from properties.models import Category, SubCategory, DetailSubCategory, CardsFeatures, CardsProgramUnits, CardDoxHome, \
    CardEliteHome

admin.site.register(Category)
admin.site.register(SubCategory)

admin.site.register(DetailSubCategory)

admin.site.register(CardsFeatures)

admin.site.register(CardsProgramUnits)
admin.site.register(CardDoxHome)
admin.site.register(CardEliteHome)


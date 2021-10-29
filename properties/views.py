from django.db.models import Q
from django.shortcuts import render, get_object_or_404

# Create your views here.
from django.views.generic import DetailView, ListView

from blog.models import Post
from properties.models import Category, SubCategory, DetailSubCategory, CardsFeatures, CardsProgramUnits, CardDoxHome


def home(request):
    category = Category.objects.all()
    posts = Post.objects.all()
    cards = CardDoxHome.objects.all()
    return render(request, 'home/index.html', {
        'category': category,
        'posts': posts,
        'cards': cards,
    })


def nav_solutions_dox(request):
    sub_category_dox = SubCategory.objects.filter(category__name='Dox Solutions')
    details = DetailSubCategory.objects.all().order_by('id')
    cards_features = CardsFeatures.objects.filter(category__name='DoxERP')
    cards_units = CardsProgramUnits.objects.filter(category__name='DoxERP')
    return render(request, 'details/category-page-dox.html',
        {'sub_category_dox': sub_category_dox,
         'details': details,
         'cards_features': cards_features,
         'cards_units': cards_units,
        })


def nav_solutions_elite(request):
    sub_category_elite = SubCategory.objects.filter(category__name='Elite Solutions')
    return render(request,'details/category-page-elite.html', {
        'sub_category_elite': sub_category_elite,
    })



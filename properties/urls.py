from django.urls import path, re_path

from properties import views

app_name = 'properties'

urlpatterns = [
    path("", views.home, name="home"),
    path("dox/", views.nav_solutions_dox, name="dox_tabs"),
    path("elite/", views.nav_solutions_elite, name="elite_tabs"),
]

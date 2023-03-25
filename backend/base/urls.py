from . import views
from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


urlpatterns = [
    # this means that:
    # if we go to /api, we will call the getRoutes function from views.py
    # if we go to /api/products, we will call the getProducts function from views.py
    path("", views.getRoutes, name="routes"),
    path("products", views.getProducts, name="products"),
    path("products/<str:pk>", views.getProduct, name="product"),
  
    path('users', views.getUsers, name='users'),
    path('users/profile', views.getUserProfile, name='user-profile'),
    # Registering
    path('users/register', views.createUser, name='register-user'),  
    # logging in, using our customised MyTokenObtainPairView
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
]   
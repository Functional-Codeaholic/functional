from django.urls import path, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from .views import PagesViewSet
# from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
# from . import routers

router = DefaultRouter()
router.register(r'pages', PagesViewSet, basename="pages")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('core/', include('core.urls')),
]

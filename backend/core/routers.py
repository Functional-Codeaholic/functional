from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register(r'pages', views.PagesViewSet, basename="pages")

urlpatterns = router.urls
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

from accounts.viewsets import UserViewSet

router = DefaultRouter()
router.register(r"users", UserViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/auth/registration", include("rest_auth.registration.urls")),
    path("api/v1/auth/", include("rest_auth.urls")),
    path("api/v1/", include(router.urls)),
    path("api-auth/", include("rest_framework.urls")),
    re_path("^.*$", TemplateView.as_view(template_name="application.html"), name="app"),
]
if settings.DEBUG:
    urlpatterns = (
        static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
        + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
        + urlpatterns
    )

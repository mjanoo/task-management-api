"""
URL configuration for task_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.decorators import api_view
from rest_framework.response import Response

# API root view
@api_view(['GET'])
def api_root(request):
    return Response({
        'tasks': '/api/tasks/',
        'users_register': '/api/users/register/',
        'users_login': '/api/users/login/',
    })

urlpatterns = [
    path('admin/', admin.site.urls),

    # API endpoints
    path('api/', api_root, name='api-root'),  # API root showing all links
    path('api/tasks/', include('tasks.urls')),  # Tasks CRUD
    path('api/users/', include('users.urls')),  # User register/login
    path('api-auth/', include('rest_framework.urls')),  # Optional browsable login
]


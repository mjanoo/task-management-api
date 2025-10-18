from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import RegisterSerializer

# For token login
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# For profile endpoint
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


# Register View
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = []


# JWT Login View
class MyTokenObtainPairView(TokenObtainPairView):
    pass


# Refresh token view (optional)
class MyTokenRefreshView(TokenRefreshView):
    pass


# Profile View
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def profile_view(request):
    user = request.user
    data = {
        "id": user.id,
        "username": user.username,
        "email": user.email,
    }
    return Response(data)


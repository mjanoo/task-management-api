from rest_framework import viewsets, permissions
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Show only the tasks belonging to the logged-in user
        return Task.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Automatically link the logged-in user to the created task
        serializer.save(user=self.request.user)

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from accounts.models import User
from accounts.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self, *args, **kwargs):
        return User.objects.filter(id=self.request.user.id)

    @action(detail=False, methods=["get"])
    def current_user(self, request):
        serializer = self.serializer_class(request.user)
        return Response(serializer.data, status=200)

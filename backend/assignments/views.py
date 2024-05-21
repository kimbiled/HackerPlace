from rest_framework import generics, permissions
from rest_framework.exceptions import PermissionDenied, NotFound
from .models import Module, Assignment, Hint, UserAssignment
from .serializers import ModuleSerializer, AssignmentSerializer, HintSerializer, UserAssignmentSerializer, UserAssignmentSubmitSerializer
from datetime import timedelta

class ModuleList(generics.ListCreateAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer

class ModuleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer

class AssignmentList(generics.ListCreateAPIView):
    serializer_class = AssignmentSerializer

    def get_queryset(self):
        module_id = self.kwargs['module_id']
        return Assignment.objects.filter(module_id=module_id)

class AssignmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class HintList(generics.ListCreateAPIView):
    serializer_class = HintSerializer

    def get_queryset(self):
        assignment_id = self.kwargs['assignment_id']
        return Hint.objects.filter(assignment_id=assignment_id)

class HintDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hint.objects.all()
    serializer_class = HintSerializer

class UserAssignmentList(generics.ListCreateAPIView):
    serializer_class = UserAssignmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return UserAssignment.objects.filter(user=self.request.user)

class UserAssignmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserAssignment.objects.all()
    serializer_class = UserAssignmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        obj = super().get_object()
        if obj.user != self.request.user:
            raise PermissionDenied()
        return obj

class UserAssignmentSubmit(generics.UpdateAPIView):
    queryset = UserAssignment.objects.all()
    serializer_class = UserAssignmentSubmitSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        assignment_id = self.kwargs['pk']
        user = self.request.user
        try:
            obj = UserAssignment.objects.get(user=user, assignment_id=assignment_id)
        except UserAssignment.DoesNotExist:
            assignment = Assignment.objects.get(id=assignment_id)
            obj = UserAssignment.objects.create(user=user, assignment=assignment)
        return obj

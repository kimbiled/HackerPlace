from rest_framework import serializers
from .models import Module, Assignment, Hint, UserAssignment

class HintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hint
        fields = ['id', 'text', 'image']

class AssignmentSerializer(serializers.ModelSerializer):
    hints = HintSerializer(many=True, read_only=True)
    
    class Meta:
        model = Assignment
        fields = ['id', 'title', 'description', 'image', 'video', 'file', 'answer', 'hints']

class ModuleSerializer(serializers.ModelSerializer):
    assignments = AssignmentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Module
        fields = ['id', 'title', 'description', 'assignments']

class UserAssignmentSerializer(serializers.ModelSerializer):
    assignment = AssignmentSerializer(read_only=True)
    
    class Meta:
        model = UserAssignment
        fields = ['id', 'assignment', 'completed', 'completed_at']
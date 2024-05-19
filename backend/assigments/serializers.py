from rest_framework import serializers
from .models import Module, Assignment, Hint

class HintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hint
        fields = ['id', 'text', 'image']

class AssignmentSerializer(serializers.ModelSerializer):
    hints = HintSerializer(many=True, read_only=True)
    
    class Meta:
        model = Assignment
        fields = ['id', 'title', 'description', 'image', 'video', 'answer', 'hints']

class ModuleSerializer(serializers.ModelSerializer):
    assignments = AssignmentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Module
        fields = ['id', 'title', 'description', 'assignments']

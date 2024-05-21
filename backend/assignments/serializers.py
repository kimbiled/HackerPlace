from rest_framework import serializers
from .models import Module, Assignment, Hint, UserAssignment
from datetime import timedelta

class HintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hint
        fields = ["id", "text", "image"]


class AssignmentSerializer(serializers.ModelSerializer):
    hints = HintSerializer(many=True, read_only=True)

    class Meta:
        model = Assignment
        fields = [
            "id",
            "title",
            "description",
            "image",
            "video",
            "file",
            "answer",
            "hints",
        ]


class ModuleSerializer(serializers.ModelSerializer):
    assignments = AssignmentSerializer(many=True, read_only=True)

    class Meta:
        model = Module
        fields = ["id", "title", "description", "assignments"]


class UserAssignmentSerializer(serializers.ModelSerializer):
    assignment = AssignmentSerializer(read_only=True)
    time_taken = serializers.DurationField(required=False)

    class Meta:
        model = UserAssignment
        fields = ["id", "assignment", "completed", "completed_at", "time_taken"]
        read_only_fields = ["completed", "completed_at"]


class UserAssignmentSubmitSerializer(serializers.ModelSerializer):
    time_taken = serializers.IntegerField(write_only=True)

    class Meta:
        model = UserAssignment
        fields = ["time_taken"]

    def update(self, instance, validated_data):
        instance.complete(
            time_taken=timedelta(seconds=validated_data.get("time_taken"))
        )
        return instance

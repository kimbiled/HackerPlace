from django.forms import ValidationError
from rest_framework import serializers
from .models import User
from django.utils.translation import gettext_lazy as _


class UserSignUpSerializer(serializers.ModelSerializer):
    email = serializers.CharField(max_length=255)
    password = serializers.CharField(
        label=_("Password"),
        style={"input_type": "password"},
        trim_whitespace=False,
        max_length=128,
        write_only=True,
    )

    class Meta:
        model = User
        fields = ["email", "username", "password"]

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data["email"], username=validated_data["username"]
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

    def validate(self, attrs):
        email_exists = User.objects.filter(email=attrs["email"]).exists()
        if email_exists:
            raise ValidationError("Email has already been used")
        return super().validate(attrs)


class UserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(required=True)
    username = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ["email", "username"]

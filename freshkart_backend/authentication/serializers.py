# authentication/serializers.py
from rest_framework import serializers
from .models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']  # Fields to be serialized
        extra_kwargs = {
            'password': {'write_only': True}  # Ensure password is write-only
        }

    def create(self, validated_data):
        # Debug: Log validated_data for creation
        print("Creating user with data:", validated_data)
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

    def validate_email(self, value):
        """ Ensure the email is unique """
        # Debug: Log the email being validated
        print("Validating email:", value)
        if User.objects.filter(email=value).exists():
            print(f"Validation Error: {value} is already registered.")
            raise serializers.ValidationError("This email is already registered.")
        return value

    # def validate(self, data):
    #     """ You can also log complete data before final validation """
    #     print("Validation data received:", data)
    #     return data

class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(required=True)
    password = serializers.CharField(write_only=True)

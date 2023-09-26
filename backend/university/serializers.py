from rest_framework import serializers
from . models import University
from authentication.serializers import UserSerializer  # Import the UserSerializer

class UniversitySerializer(serializers.ModelSerializer):
    # nesting UserSerializer to include user details within the university serializer
    id = UserSerializer()

    class Meta:
        model = University
        fields = '__all__'

    # overriding create method because the default create method does not support nested serializer relationship (User-University OneToOneField)
    def create(self, validated_data):
        # taking User data from the validated_data
        user_data = validated_data.pop('id')
        # This will call UserSerializer which will create User record
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        # now User is created so we can proceed to University
        university = University.objects.update_or_create(id=user, **validated_data)
        # now university is also successfully created
        return university

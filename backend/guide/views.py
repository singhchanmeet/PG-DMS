from authentication.serializers import UserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from university.models import University
from . serializers import GuideSerializer


# Create a guide.
class CreateGuide(APIView):

    # Only a logged in University can create a Guide
    # permission_classes = (IsAuthenticated,)

    def post(self, request):
        # Serialize the data using UserSerializer for validation only
        user_serializer = UserSerializer(data=request.data)  

        if user_serializer.is_valid():
            guide_data = {
                'id': {
                    "user_id": request.data['user_id'],
                    "name": request.data['name'],
                    "email": request.data['email'],
                    "role": "GUIDE",
                    "password": request.data['password']
                },   #foreign key for User table
                'name': request.data['name'],
                'university': University.objects.filter(id = request.user).first()     #currently logged in university
            }

            # Serialize using GuideSerializer for validation and saving
            guide_serializer = GuideSerializer(data=guide_data)

            if guide_serializer.is_valid():
                guide_serializer.save()
                # This will create both User record and Guide record because we have overwritten GuideSerializer's save method
                return Response({'message': 'Guide registered successfully'}, status=status.HTTP_201_CREATED)
            else:
                return Response(guide_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
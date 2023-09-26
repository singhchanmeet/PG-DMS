from authentication.serializers import UserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from university.models import University
from guide.models import Guide
from authentication.models import User
from . serializers import StudentSerializer


# Create a student.
class CreateStudent(APIView):

    # Only a logged in University can create a Student
    # permission_classes = (IsAuthenticated,)

    def post(self, request):
        # Serialize the data using UserSerializer for validation only
        user_serializer = UserSerializer(data=request.data)  

        if user_serializer.is_valid():
            
            student_data = {
                'id': {
                    "user_id": request.data['user_id'],
                    "name": request.data['name'],
                    "email": request.data['email'],
                    "role": "STUDENT",
                    "password": request.data['password']
                },   #foreign key for User table
                'name': request.data['name'],
                'university': University.objects.filter(id = request.user).first(),     #currently logged in university
                'guide': Guide.objects.filter(id = User.objects.filter(user_id = request.data.get('guide_id')).first()).first()  #linking to a Guide object whose id itself is a User object whose user_id is coming from frontend
            }

            # Serialize using StudentSerializer for validation and saving
            student_serializer = StudentSerializer(data=student_data)

            if student_serializer.is_valid():
                student_serializer.save()
                # This will create both User record and Student record because we have overwritten StudentSerializer's save method
                return Response({'message': 'Student registered successfully'}, status=status.HTTP_201_CREATED)
            else:
                return Response(student_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
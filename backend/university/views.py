from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from . models import University
from student.models import Student
from guide.models import Guide
from student.serializers import StudentSerializer
from guide.serializers import GuideSerializer



from authentication.serializers import UserSerializer
from . serializers import UniversitySerializer


# to get all students of a particular university
class GetAllStudents(APIView):
   
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        logged_in_university = University.objects.filter(id = request.user).first()
        all_students = Student.objects.filter(university = logged_in_university)   # all students of currently logged in university
        serializer = StudentSerializer(all_students, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

# to get all guides of a particular university
class GetAllGuides(APIView):
   
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        logged_in_university = University.objects.filter(id = request.user).first()
        all_guides = Guide.objects.filter(university = logged_in_university)   # all guides of currently logged in university
        serializer = GuideSerializer(all_guides, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



# Create a university
class CreateUniversity(APIView):

    def post(self, request):
        # Serialize the data using UserSerializer for validation only
        user_serializer = UserSerializer(data=request.data)  

        if user_serializer.is_valid():
            university_data = {
                'id': {
                    "user_id": request.data['user_id'],
                    "name": request.data['name'],
                    "email": request.data['email'],
                    "role": "UNIVERSITY",
                    "password": request.data['password']
                },   #foreign key for User table
                'name': request.data['name'],
            }

            # Serialize using UniversitySerializer for validation and saving
            university_serializer = UniversitySerializer(data=university_data)

            if university_serializer.is_valid():
                university_serializer.save()
                # This will create both User record and University record because we have overwritten UniversitySerializer's save method
                return Response({'message': 'University registered successfully'}, status=status.HTTP_201_CREATED)
            else:
                return Response(university_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
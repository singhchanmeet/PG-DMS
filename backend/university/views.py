from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from . models import University
from student.models import Student
from guide.models import Guide
from student.serializers import StudentSerializer
from guide.serializers import GuideSerializer


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
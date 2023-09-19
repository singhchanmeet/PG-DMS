from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from . serializers import DissertationSerializer
from . models import Dissertation


class CreateDissertation(APIView):
    # only authenticated users can access this view
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        # Serialize the data using UserSerializer for validation only
        dissertation_serializer = DissertationSerializer(data=request.data)  

        if dissertation_serializer.is_valid():
            dissertation_serializer.save()
            return Response({'message': 'Dissertation Saved Successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(dissertation_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class GetDissertations(APIView):
    # only authenticated users can access this view
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        # username = request.user.name
        all_dissertations = Dissertation.objects.all()
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
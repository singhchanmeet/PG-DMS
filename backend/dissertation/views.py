from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from . serializers import DissertationSerializer
from . models import Dissertation


class CreateDissertation(APIView):
    # only logged in university can access this view
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        # Serialize the data using UserSerializer for validation only
        final_data = {
            'title' : request.data.get('title'),
            'author_name' : request.data.get('author_name'),
            'author_id' : [request.user],
            'journal_name' : request.data.get('journal_name'),
            'institute' : request.data.get('institute'),
            'abstract' : request.data.get('abstract'),
            'medical_system' : request.data.get('medical_system'),
            'category' : request.data.get('category'),
            'disease_related' : request.data.get('disease_related'),
            'keywords' : request.data.get('keywords'),
            'full_paper' : request.data.get('full_paper')
        }

        dissertation_serializer = DissertationSerializer(data=final_data)

        if dissertation_serializer.is_valid():
            dissertation_serializer.save()
            return Response({'message': 'Dissertation Saved Successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(dissertation_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

# to get all the dissertations in the db
class GetDissertations(APIView):

    def get(self, request):
        # username = request.user.name
        all_dissertations = Dissertation.objects.all()
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

   
# to get all dissertations of a particular user - whether university, guide, or student
class GetUserDissertations(APIView):
   
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        # username = request.user.name
        all_dissertations = Dissertation.objects.filter(author_id = request.user)
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


# to get details of a dissertation by id 
class GetDissertationDetails(APIView):

    def get(self, request, id):
        dissertation = Dissertation.objects.filter(article_id = id).first()
        serializer = DissertationSerializer(dissertation, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)


# To delete a dissertation by id   
class DeleteDissertation(APIView):

    def delete(self, request, pk):
        dissertation = Dissertation.objects.all().filter(article_id = pk)
        dissertation.delete()
        return Response({'deleted dissertation successfully'}, status=status.HTTP_200_OK)
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from . serializers import DissertationSerializer
from . models import Dissertation
from . plag_check import plag_check


class CreateDissertation(APIView):
    # only logged in university can access this view
    # permission_classes = (IsAuthenticated,)

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
   
    # permission_classes = (IsAuthenticated,)

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
    

# working for both uni and guide
class GiveFeedback(APIView):
   
    # permission_classes = (IsAuthenticated,)

    def post(self, request):
        # username = request.user.name
        dissertation = Dissertation.objects.filter(article_id = request.data['article_id']).first()
        if (request.user.role == 'GUIDE'):
            dissertation.guide_feedback = request.data['feedback'] 
        elif (request.user.role == 'UNIVERSITY'):
            dissertation.university_feedback = request.data['feedback'] 
        dissertation.save()
        return Response({'Feedback submitted successfully'}, status=status.HTTP_200_OK)
    
# working for both uni and guide
class GiveApproval(APIView):
   
    # permission_classes = (IsAuthenticated,)

    def post(self, request):
        # username = request.user.name
        dissertation = Dissertation.objects.filter(article_id = request.data['article_id']).first()
        if (request.user.role == 'GUIDE'):
            dissertation.approved_by_guide = request.data['approve'] 
        elif (request.user.role == 'UNIVERSITY'):
            dissertation.approved_by_university = request.data['approve'] 
        dissertation.save()
        return Response({'Approval given/rejected successfully'}, status=status.HTTP_200_OK)
    

# working for both uni and guide
class PendingApprovals(APIView):
   
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        if request.user.role == 'GUIDE':
            all_dissertations = Dissertation.objects.filter(author_id = request.user, approved_by_guide = False)
        elif request.user.role == 'UNIVERSITY':
            all_dissertations = Dissertation.objects.filter(author_id = request.user, approved_by_university = False)
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# working for both uni and guide
class CompletedApprovals(APIView):
   
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        if request.user.role == 'GUIDE':
            all_dissertations = Dissertation.objects.filter(author_id = request.user, approved_by_guide = True)
        elif request.user.role == 'UNIVERSITY':
            all_dissertations = Dissertation.objects.filter(author_id = request.user, approved_by_university = True)
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

# working for both uni and guide
class PendingPublications(APIView):
   
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        
        all_dissertations = Dissertation.objects.filter(author_id = request.user, published = False)
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# working for both uni and guide
class CompletedPublications(APIView):
   
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        
        all_dissertations = Dissertation.objects.filter(author_id = request.user, published = True)
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# working without login for explore page
class AllCompletedPublications(APIView):

    def get(self, request):
        
        all_dissertations = Dissertation.objects.filter(published = True)
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class CategoryFilter(APIView):

    def get(self, request):
        
        all_dissertations = Dissertation.objects.filter(category = request.data.get('category'))
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class MedicalSystemFilter(APIView):

    def get(self, request):
        
        all_dissertations = Dissertation.objects.filter(medical_system = request.data.get('medical_system'))
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class KeywordSearch(APIView):

    def get(self, request):
        
        all_dissertations = Dissertation.objects.filter(keywords__icontains = request.data.get('keywords'))
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class TitleSearch(APIView):

    def get(self, request):
        
        all_dissertations = Dissertation.objects.filter(title__icontains = request.data.get('title'))
        serializer = DissertationSerializer(all_dissertations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# @api_view(['GET', 'POST'])
# def plag_check(request):
#     pdf = request.FILES.get('dissertation_pdf')
#     percent_plag = plag_check(pdf)
#     print(percent_plag)
#     return Response({'ok': 'ok'}, status=status.HTTP_200_OK)

class PlagCheck(APIView):
    def post(self, request):
        print('ok')
        pdf = request.FILES.get('dissertation_pdf')
        percent_plag = plag_check(pdf)
        print(percent_plag)
        return Response({'percent_plag': percent_plag}, status=status.HTTP_200_OK)

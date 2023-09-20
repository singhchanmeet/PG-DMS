from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from . serializers import UserSerializer
from django.contrib.auth import authenticate, login, logout
from rest_framework_simplejwt.views import TokenObtainPairView
from . models import User


class Signup(APIView):
    def post(self, request):
        # Serialize the data using UserSerializer for validation only
        user_serializer = UserSerializer(data=request.data)  

        if user_serializer.is_valid():
            user_serializer.save()
            return Response({'message': 'Student registered successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class Login(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        # Get the user_id and password from the request data
        user_id = request.data.get('user_id')  
        password = request.data.get('password')  

        # Authenticate the user
        user = authenticate(user_id=user_id, password=password)

        if user is not None:
            # Log the user in
            login(request, user)

            # Generate and return the token pair
            token = super().post(request, *args, **kwargs)
            return Response({'access_token': token.data['access']}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class Logout(APIView):
    # only authenticated users can access this view
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        # Perform the logout
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)
    


class UserDetails(APIView):
    # only authenticated users can access this view
    # permission_classes = (IsAuthenticated,)

    # Get request from flutter working with hardcoded values of username and role. 
    # TO DO: login the user from flutter too so that we can access request.user

    def get(self, request):
        username = request.user.name
        role = request.user.role
        return Response({'username': username, 'role' : role }, status=status.HTTP_200_OK)
import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class JDEOrchestratorView(APIView):
    def post(self, request):
        # Get the name from the request body
        name = request.data.get('name')  # It's now in the request body

        if not name:
            return Response({"error": "Name is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        orchestrator_url = "https://jde-server-url.com/TEST_ORCH_CONN"  # Replace with your actual orchestrator URL
        payload = {'name': name}  # Include the data in the request body
        
        try:
            # Send a POST request to the JDE Orchestrator with the name data in the body
            response = requests.post(orchestrator_url, json=payload)  # Make sure to send JSON in the body
            response_data = response.json()

            if response.status_code == 200:
                return Response(response_data, status=status.HTTP_200_OK)
            return Response({'error': 'Error from Orchestrator'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        except requests.exceptions.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

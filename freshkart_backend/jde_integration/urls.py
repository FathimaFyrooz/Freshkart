from django.urls import path
from .views import JDEOrchestratorView

urlpatterns = [
    path('call-jde-orchestrator/', JDEOrchestratorView.as_view(), name='call-jde-orchestrator'),
]

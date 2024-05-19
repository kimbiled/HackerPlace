from django.urls import path
from .views import (
    ModuleList,
    ModuleDetail,
    AssignmentList,
    AssignmentDetail,
    HintList,
    HintDetail,
)

urlpatterns = [
    path("modules/", ModuleList.as_view(), name="module_list"),
    path("modules/<int:pk>/", ModuleDetail.as_view(), name="module_detail"),
    path(
        "modules/<int:module_id>/assignments/",
        AssignmentList.as_view(),
        name="assignment_list",
    ),
    path(
        "modules/<int:module_id>/assignments/<int:pk>/",
        AssignmentDetail.as_view(),
        name="assignment_detail",
    ),
    path(
        "assignments/<int:assignment_id>/hints/", HintList.as_view(), name="hint_list"
    ),
    path(
        "assignments/<int:assignment_id>/hints/<int:pk>/",
        HintDetail.as_view(),
        name="hint_detail",
    ),
]

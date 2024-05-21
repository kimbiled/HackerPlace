from django.contrib import admin
from .models import Module, Assignment, Hint, UserAssignment

@admin.register(Module)
class ModuleAdmin(admin.ModelAdmin):
    list_display = ['title', 'description']

@admin.register(Assignment)
class AssignmentAdmin(admin.ModelAdmin):
    list_display = ['title', 'module', 'description']

@admin.register(Hint)
class HintAdmin(admin.ModelAdmin):
    list_display = ['assignment', 'text', 'image']

@admin.register(UserAssignment)
class UserAssignmentAdmin(admin.ModelAdmin):
    list_display = ['user', 'assignment', 'completed', 'completed_at', 'time_taken']

from django.contrib import admin
from .models import Module, Assignment, Hint

class HintInline(admin.TabularInline):
    model = Hint
    extra = 1

class AssignmentAdmin(admin.ModelAdmin):
    inlines = [HintInline]

admin.site.register(Module)
admin.site.register(Assignment, AssignmentAdmin)

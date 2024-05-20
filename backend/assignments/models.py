from django.db import models
from django.conf import settings
from django.utils import timezone

class Module(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title

class Assignment(models.Model):
    module = models.ForeignKey(Module, related_name='assignments', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='assignments/', blank=True, null=True)
    file = models.FileField(upload_to='assignments/files/', blank=True, null=True)
    video = models.FileField(upload_to='assignments/videos/', blank=True, null=True)
    answer = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Hint(models.Model):
    assignment = models.ForeignKey(Assignment, related_name='hints', on_delete=models.CASCADE)
    text = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='hints/', blank=True, null=True)

    def __str__(self):
        return f"Hint for {self.assignment.title}"

class UserAssignment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='user_assignments', on_delete=models.CASCADE)
    assignment = models.ForeignKey(Assignment, related_name='user_assignments', on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(blank=True, null=True)
    time_taken = models.DurationField(blank=True, null=True)

    def complete(self, time_taken=None):
        self.completed = True
        self.completed_at = timezone.now()
        if time_taken:
            self.time_taken = time_taken
        self.save()

    class Meta:
        unique_together = ('user', 'assignment')
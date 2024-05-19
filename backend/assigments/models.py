from django.db import models

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
    video = models.FileField(upload_to='assignments/', blank=True, null=True)
    answer = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Hint(models.Model):
    assignment = models.ForeignKey(Assignment, related_name='hints', on_delete=models.CASCADE)
    text = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='hints/', blank=True, null=True)

    def __str__(self):
        return f"Hint for {self.assignment.title}"

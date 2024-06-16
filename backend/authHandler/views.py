from django.http import JsonResponse


# Create your views here.
def home():
    return JsonResponse({"holaa":"auth handler page"})

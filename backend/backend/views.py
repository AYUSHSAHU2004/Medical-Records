from django.http import JsonResponse


def home(request):
    return JsonResponse({"ayush": "this osdi"})
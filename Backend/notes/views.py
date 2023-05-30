from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import Http404, HttpResponseForbidden, JsonResponse
from .models import Note
from .serializers import NoteSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


@api_view(['GET', 'POST', 'DELETE'])
def api_note(request, note_id_time):
    try:
        note = Note.objects.get(id_time=note_id_time)
    except Note.DoesNotExist:
        raise Http404()
    
    if request.method == 'POST':
        new_note_data = request.data
        # note.title = new_note_data['title']
        # note.content = new_note_data['content']
        note.id_time = new_note_data['id_time']
        note.save()
    elif request.method == 'DELETE':
        note.delete()
        return Response(status=204)

    serialized_note = NoteSerializer(note)
    return Response(serialized_note.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def api_notes(request):

    if request.method == "POST":
        new_note_data = request.data
        user = request.user
        # title = new_note_data['title']
        # content = new_note_data['content']
        # note = Note(title=title, content=content)
        print(new_note_data)
        id_time = new_note_data['id_time']
        note = Note(id_time=id_time, user=user)
        note.save()
        
    notes = Note.objects.filter(user=request.user)

    serialized_note = NoteSerializer(notes, many=True)
    return Response(serialized_note.data)

@api_view(['POST'])
def api_get_token(request):
    try:
        if request.method == 'POST':
            username = request.data['username']
            email = request.data['email']
            password = request.data['password']
            user = authenticate(username=username, email=email, password=password)

            if user is not None:
                token, created = Token.objects.get_or_create(user=user)
                return JsonResponse({"token":token.key})
            else:
                return HttpResponseForbidden()
    except:
        return HttpResponseForbidden()

@api_view(['POST'])
def api_user(request):
    if request.method == 'POST':
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']
        user = User.objects.create_user(username, email, password)
        user.save()
        print("user created")
        return Response(status=204)

# {
# "username": "pedrao",
# "password": "cornomanso"
# }

# {
# "username": "albertinho",
# "password": "1234567"
# }

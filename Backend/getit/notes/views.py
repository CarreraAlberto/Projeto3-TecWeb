from .models import Note
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .serializers import NoteSerializer


@api_view(['GET', 'POST', 'DELETE'])
def api_note(request, note_id):
    try:
        note = Note.objects.get(id=note_id)
    except Note.DoesNotExist:
        raise Http404()
    
    if request.method == 'POST':
        new_note_data = request.data
        note.title = new_note_data['title']
        note.content = new_note_data['content']
        note.save()
    elif request.method == 'DELETE':
        note.delete()
        return Response(status=204)

    serialized_note = NoteSerializer(note)
    return Response(serialized_note.data)

@api_view(['GET', 'POST'])
def api_notes(request):
    if request.method == 'POST':
        new_note_data = request.data 
        note = Note()
        note.title = new_note_data['title']
        note.content = new_note_data['content']
        note.save()

    all_notes = Note.objects.all()
    serialized_note = NoteSerializer(all_notes, many=True)
    return Response(serialized_note.data)

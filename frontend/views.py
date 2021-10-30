from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.urls import reverse_lazy, reverse
from django.contrib.auth.models import User
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.messages.views import SuccessMessageMixin
from main.models import Artists, UserArtists

# Create your views here.
@login_required
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')

@login_required
def user_choose_fav_artist(request):
	artist = Artists.objects.all()
	#arts = request.POST.get('check_box')

	if request.method == 'POST':
		arts = request.POST.getlist('check_box')

		for art in arts:
			plt = Artists.objects.get(name=art)
			if UserArtists.objects.filter(userartist=plt, user=request.user).exists():
				messages.warning(request, f"{plt.name} already exists in your favorite artists!!")
			else:
				userFavs = UserArtists(userartist=plt, user=request.user)
				userFavs.save()
				# print(art, "saved successfully")
				messages.success(request, f"Artist ({plt.name}) was added to your favorites successfully!!")
		return redirect('home')


	context = {
		'artists':artist
	}

	return render(request, 'frontend/chooseArtists.html', context)

@login_required
def user_choose_fav_artist_search(request):
	if request.method == "GET":
		query = request.GET.get('query')

		if query:
			match = Artists.objects.filter(name__icontains=query)

			if match:
				print("match found")
				context = {
					'artists': match,
				}
				return render(request, "frontend/choose_searched_artists_page.html", context)
			else:
				messages.warning(request, 'no artist found with that name')
				return HttpResponseRedirect("choose_artist")

		else:
			messages.warning(request, 'Enter a search')
			return HttpResponseRedirect('choose_artist')

	return HttpResponseRedirect('choose_artist')
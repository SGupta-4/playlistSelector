function updatePlaylist() {
    var moodSelect = document.getElementById("mood");
    var playlistContainer = document.getElementById("playlist");
    var selectedMood = moodSelect.value;

    // Clear previous playlist
    playlistContainer.innerHTML = "";

    // Fetch and display YouTube videos based on the selected mood
    if (selectedMood === "happy") {
        displayVideos([
          { title: "Happy Video ", youtubeId: "qw50dx9KO-c?feature=shared" },
            { title: "Happy Video ", youtubeId: "bw7bVpI5VcM?feature=shared" },
            { title: "Happy Video ", youtubeId: "/nJZcbidTutE?feature=shared" }
        ]);
    } else if (selectedMood === "relaxed") {
        displayVideos([
            { title: "Relaxed Video ", youtubeId: "jqpePNeAtNs?feature=shared" },
            { title: "Relaxed Video ", youtubeId: "Ik0YeuQHBCI?feature=shared" },
            { title: "Relaxed Video ", youtubeId: "oBwrlePfchs?feature=shared" }
        ]);
    }
}

function displayVideos(videos) {
    var playlistContainer = document.getElementById("playlist");

    videos.forEach(function (video) {
        var listItem = document.createElement("li");
        listItem.className = "song";
        listItem.textContent = video.title;
        var iframe = document.createElement("iframe");
        iframe.src = "https://www.youtube.com/embed/" + video.youtubeId;
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        listItem.appendChild(iframe);
        listItem.addEventListener("click", function () {
            // Toggle visibility of the iframe when the link is clicked
            iframe.style.display = iframe.style.display === "none" ? "block" : "none";
        });
        playlistContainer.appendChild(listItem);
    });
}

// Initial playlist update
updatePlaylist();
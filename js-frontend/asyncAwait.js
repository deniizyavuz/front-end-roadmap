async function fetchPosts() {
    const response = await fetch("js-frontend/settings.json");
    const data = await response.json();
    console.log(response);
    data.forEach(i => {
        console.log("i" ,i);
    });
}

fetchPosts();
let remov = document.getElementById("colorSelect");

document.getElementById("btn").addEventListener("click", () => {
    let selectedIndex = remov.selectedIndex;

    if (selectedIndex !== -1) {
        remov.remove(selectedIndex);
    } 
});
